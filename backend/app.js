const dotenv = require('dotenv');
const express = require('express');
const bp = require('body-parser');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const crypto = require('crypto');
const cookieParser = require('cookie-parser');
const app = express();
dotenv.config();
const port = process.env.PORT || 9000;
const data = {
    users: {},
    sessions: {}
};

app.use(bp.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

function writeToFile() {
    fs.writeFile('data/users.json', JSON.stringify(Object.values(data.users)), { encoding: "utf8" }, (error) => {
        if (error) console.log('writeToFile ' + error);
    });
}

function loadFromFile() {
    fs.readFile('data/users.json', (error, fileData) => {
        if (error) {
            if (error.code == "ENOENT")
                return fs.writeFile("data/users.json", "[]", { encoding: "utf8" }, function (error) {
                    if (error) return console.log('loadFromeFile ' + error);
                })
            return console.log('loadFromFile ' + error);
        }
        data.users = JSON.parse(fileData.toString()).reduce((accumulator, currentUser) => {
            accumulator[currentUser.id] = currentUser;
            return accumulator;
        },{});
    });
}

function isAuthenticated(sessionId){
    return sessionId != undefined && sessionId in data.sessions;
}
//post delete put

app.get('/', (req, res) => {
    return res.send("Hello World");
});

app.listen(port, () => {
    console.log("Gestion d'annuaire was started on port " + port);
    loadFromFile();
});

app.get('/api/v1/users', (req, res) => {

    const users = Object.values(data.users);
    if (Object.keys(req.query).length === 0)
        return res.send(users);
    const filters = req.query;
    const predicates = Object.keys(filters).map(filter => {
        return (obj) => {
            return obj[filter] === filters[filter];
        }
    })
    return res.send(users.filter(user => {
        if (predicates.some(predicate => { return !predicate(user); }))
            return false;
        return true;
    }));
});

app.post('/api/v1/user', (req, res) => {
    const userData = {
        id: uuidv4(),
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        password: req.body.password,
        mail: req.body.mail,
        birthdate: req.body.birthdate,
        phone: req.body.phone
    }
    const users = Object.values(data.users);

    const sessionId = req.signedCookies.SESSION_ID;

    if(!isAuthenticated(sessionId))
        return res.status(401).send({code: "AUTHENTIFICATION_REQUIRED", message: "Authentification required"})

    userData.password = crypto.createHash('sha256').update(userData.password).digest("base64");
    //test !isAuthenticated => true / false 401 Unautorized
    if (!userData.firstname || !userData.lastname || !userData.username || !userData.password || !userData.mail || !userData.birthdate
        || !userData.phone)
        return res.status(400).send({ code: "USER_MALFORMED", message: "User malformed" });

    if (users.some((user) => {
        return user.mail == userData.mail;
    }))
        return res.status(409).send({ code: "USER_ALREADY_EXISTS", message: "User already exist : mail already used" });

    if (userData.id in users)
        return res.status(409).send({ code: "USER_ALREADY_EXISTS", message: "User already exist : id already used" });

    data.users[userData.id] = userData;
    writeToFile();
    console.log(data.users);
    return res.send(userData);
})

app.put('/api/v1/user/:id', (req, res) => {
    const { id } = req.params;
    const userData = req.body;
    const users = data.users;
    const sessionId = req.signedCookies.SESSION_ID;
    
    if(!isAuthenticated(sessionId))
        return res.status(401).send({code: "AUTHENTIFICATION_REQUIRED", message: "Authentification required"})

    
    if (!userData.firstname || !userData.lastname || !userData.username || !userData.password || !userData.mail || !userData.birthdate
        || !userData.phone)
        return res.status(400).send({ code: "USER_MALFORMED", message: "User malformed" });
    if(!(id in users))
        return res.status(404).send(`User with id : ${id} does not exist`);
    userData.id = id;    
    data.users[id] = userData;
    writeToFile();
    return res.send(userData);
});

app.delete('/api/v1/user/:id', (req,res) =>{
    const { id } = req.params;
    const users = data.users;
    const sessionId = req.signedCookies.SESSION_ID;
    if(!isAuthenticated(sessionId))
        return res.status(401).send({code: "AUTHENTIFICATION_REQUIRED", message: "Authentification required"})

    if(!(id in users))
        return res.status(404).send(`User with id : ${id} does not exist`);
    const user = data.users[id];
    delete data.users[id];

    writeToFile();
    return res.send(user);
});

app.post('/api/v1/login', (req,res) =>{
    const loginRequest = req.body;
    const users = Object.values(data.users);
    const mailRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

    

    if(mailRegex.test(loginRequest.identifier)){
        // mail
        var predicate = (user => {
            return user.mail == loginRequest.identifier;
        });
    }else{
        // username
        var predicate = (user => {
            return user.username == loginRequest.identifier;
        });
    }
    const user = users.find(predicate);
    const hashedPassword = crypto.createHash('sha256').update(loginRequest.password).digest("base64");
    if(user == undefined || hashedPassword != user.password)
        return res.status(401).send({code : 'INVALID_CREDENTIALS', message: 'Login failed: Invalid credentials'})
   
    const sessionId = crypto.createHash('sha256').update(JSON.stringify(user)).digest("base64");
    data.sessions[sessionId] = user.id;
    console.log(data.sessions[sessionId]);
    const sessionTtlMilli = new Date().getTime()+process.env.SESSION_TTL*1000;
    setTimeout(() => {delete data.sessions[sessionId]},process.env.SESSION_TTL*1000);
    return res.status(200).cookie("SESSION_ID", sessionId, {httpOnly: true, signed: true, expires: new Date(sessionTtlMilli)}).send({sessionId: sessionId, ttl: process.env.SESSION_TTL});
});

app.post('/api/v1/logout', (req,res) =>{
    const sessionId = req.signedCookies.SESSION_ID;
    console.log(data.sessions, sessionId);
    if(!isAuthenticated(sessionId)){
        res.clearCookie('SESSION_ID');
        return res.status(403).send({code: 'UNKNOWN_SESSION_ID', message: 'Logout failed: Unknown session ID'});
    }

    const user =  data.users[data.sessions[sessionId]];   
    delete data.sessions[sessionId];
    res.clearCookie('SESSION_ID');
    
    return res.send(user);
});







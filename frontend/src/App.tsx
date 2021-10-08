import React, { FunctionComponent, useState } from 'react';
import ReactDOM from 'react';

import './App.scss';



// const  App: FunctionComponent = () => {
//   const [name, setName] = useState<String>('React');
//   return (
//     <h1>Hello, {name} !</h1>
//   )
// }

function App() {

  return (
    <div>
      <header itemID="App-header">
        <button>Rechercher des utilisateurs</button>
      </header>
        <h1>Se connecter</h1>
        <label htmlFor="Identifiant">Identifiant:</label>
        <textarea name="Identifiant"></textarea>
        <br />
        <label htmlFor="Mot_de_passe">Mot de passe:</label>
        <textarea name="Mot_de_passe"></textarea>
        <input type="submit" value="Se connecter"/>
    </div>
  );
}

export default App;

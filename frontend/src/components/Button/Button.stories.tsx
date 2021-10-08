import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Button, { ButtonProps } from "./Button";
import { Story } from "@storybook/react";

export default { 
    title: "Components/Button",
    component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}/>;

export const LargePrimary = Template.bind({});
LargePrimary.args = { label: "large-primary", color: "primary", size: "large", onClick:(event) => console.log("You click on large primary button !") };
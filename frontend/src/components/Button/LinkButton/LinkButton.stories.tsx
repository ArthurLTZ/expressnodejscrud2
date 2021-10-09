import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { ButtonProps } from "../Button";
import { Story } from "@storybook/react";
import LinkButton from "./LinkButton";

export default {
    title: "Components/Button/LinkButton",
    component: LinkButton,
} as Meta;

const Template: Story<ButtonProps> = (args) => <LinkButton {...args} />;

export const SmallPrimary = Template.bind({});
SmallPrimary.args = { label: "small-primary", color: "primary", size: "small", onClick: (event) => console.log("You click on small primary button !") };

export const SmallPrimaryLight = Template.bind({});
SmallPrimaryLight.args = { label: "small-primary-light", color: "primary-light", size: "small", onClick: (event) => console.log("You click on small primary light button !") };

export const SmallPrimaryDark = Template.bind({});
SmallPrimaryDark.args = { label: "small-primary-dark", color: "primary-dark", size: "small", onClick: (event) => console.log("You click on large primary dark button !") };

export const MediumPrimary = Template.bind({});
MediumPrimary.args = { label: "medium-primary", color: "primary", size: "medium", onClick: (event) => console.log("You click on medium primary button !") };

export const MediumPrimaryLight = Template.bind({});
MediumPrimaryLight.args = { label: "medium-primary-light", color: "primary-light", size: "medium", onClick: (event) => console.log("You click on medium primary light button !") };

export const MediumPrimaryDark = Template.bind({});
MediumPrimaryDark.args = { label: "medium-primary-dark", color: "primary-dark", size: "medium", onClick: (event) => console.log("You click on medium primary dark button !") };

export const LargePrimary = Template.bind({});
LargePrimary.args = { label: "large-primary", color: "primary", size: "large", onClick: (event) => console.log("You click on large primary button !") };

export const LargePrimaryLight = Template.bind({});
LargePrimaryLight.args = { label: "large-primary-light", color: "primary-light", size: "large", onClick: (event) => console.log("You click on large primary light button !") };

export const LargePrimaryDark = Template.bind({});
LargePrimaryDark.args = { label: "large-primary-dark", color: "primary-dark", size: "large", onClick: (event) => console.log("You click on large primary dark button !") };

export const SmallSecondary = Template.bind({});
SmallSecondary.args = { label: "small-secondary", color: "secondary", size: "small", onClick: (event) => console.log("You click on small primary button !") };

export const SmallSecondaryLight = Template.bind({});
SmallSecondaryLight.args = { label: "small-secondary-light", color: "secondary-light", size: "small", onClick: (event) => console.log("You click on small primary light button !") };

export const SmallSecondaryDark = Template.bind({});
SmallSecondaryDark.args = { label: "small-secondary-dark", color: "secondary-dark", size: "small", onClick: (event) => console.log("You click on large primary dark button !") };

export const MediumSecondary = Template.bind({});
MediumSecondary.args = { label: "medium-secondary", color: "secondary", size: "medium", onClick: (event) => console.log("You click on medium primary button !") };

export const MediumSecondaryLight = Template.bind({});
MediumSecondaryLight.args = { label: "medium-secondary-light", color: "secondary-light", size: "medium", onClick: (event) => console.log("You click on medium primary light button !") };

export const MediumSecondaryDark = Template.bind({});
MediumSecondaryDark.args = { label: "medium-secondary-dark", color: "secondary-dark", size: "medium", onClick: (event) => console.log("You click on medium primary dark button !") };

export const LargeSecondary = Template.bind({});
LargeSecondary.args = { label: "large-secondary", color: "secondary", size: "large", onClick: (event) => console.log("You click on large primary button !") };

export const LargeSecondaryLight = Template.bind({});
LargeSecondaryLight.args = { label: "large-secondary-light", color: "secondary-light", size: "large", onClick: (event) => console.log("You click on large primary light button !") };

export const LargeSecondaryDark = Template.bind({});
LargeSecondaryDark.args = { label: "large-secondary-dark", color: "secondary-dark", size: "large", onClick: (event) => console.log("You click on large primary dark button !") };


import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { ButtonProps } from "../Button";
import { Story } from "@storybook/react";
import LinkButton, { LinkButtonProps } from "./LinkButton";

export default {
    title: "Components/Button/LinkButton",
    component: LinkButton,
} as Meta;

const Template: Story<LinkButtonProps> = (args) => <LinkButton {...args} />;

export const SmallPrimary = Template.bind({});
SmallPrimary.args = { label: "small-primary", color: "primary", size: "small", behavior: "currentTab", url: "http://google.com" };

export const SmallPrimaryNewTab = Template.bind({});
SmallPrimaryNewTab.args = { label: "small-primary", color: "primary", size: "small", behavior: "newTab", url: "http://google.com" };

export const SmallPrimaryFullBody = Template.bind({});
SmallPrimaryFullBody.args = { label: "small-primary", color: "primary", size: "small", behavior: "fullBody", url: "http://google.com" };

export const SmallPrimaryParentFrame = Template.bind({});
SmallPrimaryParentFrame.args = { label: "small-primary", color: "primary", size: "small", behavior: "parentFrame", url: "http://google.com" };

export const SmallPrimaryOpenInFrame = (args: LinkButtonProps) => (
    <><iframe src="https://fr.reactjs.org" frameBorder="0" width="500" height="350" name="MainFrame"></iframe><LinkButton {...args}></LinkButton></>
);
SmallPrimaryOpenInFrame.args = { label: "small-primary", color: "primary", size: "small", behavior: { frameName: "MainFrame" }, url: "https://https://www.w3schools.com/" };


export const SmallPrimaryLight = Template.bind({});
SmallPrimaryLight.args = { label: "small-primary-light", color: "primary-light", size: "small", behavior: "currentTab", url: "http://google.com" };

export const SmallPrimaryDark = Template.bind({});
SmallPrimaryDark.args = { label: "small-primary-dark", color: "primary-dark", size: "small", behavior: "currentTab", url: "http://google.com" };

export const MediumPrimary = Template.bind({});
MediumPrimary.args = { label: "medium-primary", color: "primary", size: "medium", behavior: "currentTab", url: "http://google.com" };

export const MediumPrimaryLight = Template.bind({});
MediumPrimaryLight.args = { label: "medium-primary-light", color: "primary-light", size: "medium", behavior: "currentTab", url: "http://google.com" };

export const MediumPrimaryDark = Template.bind({});
MediumPrimaryDark.args = { label: "medium-primary-dark", color: "primary-dark", size: "medium", behavior: "currentTab", url: "http://google.com" };

export const LargePrimary = Template.bind({});
LargePrimary.args = { label: "large-primary", color: "primary", size: "large", behavior: "currentTab", url: "http://google.com" };

export const LargePrimaryLight = Template.bind({});
LargePrimaryLight.args = { label: "large-primary-light", color: "primary-light", size: "large", behavior: "currentTab", url: "http://google.com" };

export const LargePrimaryDark = Template.bind({});
LargePrimaryDark.args = { label: "large-primary-dark", color: "primary-dark", size: "large", behavior: "currentTab", url: "http://google.com" };

export const SmallSecondary = Template.bind({});
SmallSecondary.args = { label: "small-secondary", color: "secondary", size: "small", behavior: "currentTab", url: "http://google.com" };

export const SmallSecondaryLight = Template.bind({});
SmallSecondaryLight.args = { label: "small-secondary-light", color: "secondary-light", size: "small", behavior: "currentTab", url: "http://google.com" };

export const SmallSecondaryDark = Template.bind({});
SmallSecondaryDark.args = { label: "small-secondary-dark", color: "secondary-dark", size: "small", behavior: "currentTab", url: "http://google.com" };

export const MediumSecondary = Template.bind({});
MediumSecondary.args = { label: "medium-secondary", color: "secondary", size: "medium", behavior: "currentTab", url: "http://google.com" };

export const MediumSecondaryLight = Template.bind({});
MediumSecondaryLight.args = { label: "medium-secondary-light", color: "secondary-light", size: "medium", behavior: "currentTab", url: "http://google.com" };

export const MediumSecondaryDark = Template.bind({});
MediumSecondaryDark.args = { label: "medium-secondary-dark", color: "secondary-dark", size: "medium", behavior: "currentTab", url: "http://google.com" };

export const LargeSecondary = Template.bind({});
LargeSecondary.args = { label: "large-secondary", color: "secondary", size: "large", behavior: "currentTab", url: "http://google.com" };

export const LargeSecondaryLight = Template.bind({});
LargeSecondaryLight.args = { label: "large-secondary-light", color: "secondary-light", size: "large", behavior: "currentTab", url: "http://google.com" };

export const LargeSecondaryDark = Template.bind({});
LargeSecondaryDark.args = { label: "large-secondary-dark", color: "secondary-dark", size: "large", behavior: "currentTab", url: "http://google.com" };


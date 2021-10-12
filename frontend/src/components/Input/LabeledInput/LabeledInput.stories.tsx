import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { InputProps } from "../Input";
import { Story } from "@storybook/react";
import LabeledInput, { LabeledInputProps } from "./LabeledInput";

export default {
    title: "Components/Input/LabeledInput",
    component: LabeledInput,
} as Meta;

const Template: Story<LabeledInputProps> = (args) => <LabeledInput {...args} />;

export const Small = Template.bind({});
Small.args = { label: "Small :", size: "small", type: "text" };

export const Medium = Template.bind({});
Medium.args = { label: "Medium :", size: "medium", type: "date" };

export const Large = Template.bind({});
Large.args = { label: "Large :", size: "large", type: "password" };
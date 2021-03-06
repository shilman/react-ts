import React from "react";
import { Meta } from "@storybook/react";
import { Button } from "./button";

export default {
  component: Button,
  title: "Examples / Button",
  // argTypes: {
  //   type: {
  //     control: "radio",
  //   },
  // },
} as Meta;

console.log("docgen", Button.__docgenInfo);

export const WithArgs = (args: any) => <Button {...args} />;
// WithArgs.args = { label: 'With args' };
export const Basic = () => <Button label="Click me" />;

import React, { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * A label to show on the button
   */
  label: string;

  /**
   * button type
   */
  type: "button" | "submit" | "reset";
}

export const Button = ({
  label = "Hello",
  type = "button",
  ...props
}: ButtonProps) => (
  <button type={type} {...props}>
    {label}
  </button>
);

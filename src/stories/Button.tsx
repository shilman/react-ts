import React from "react";
import "./button.css";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

class MyComponent extends React.Component<ButtonProps> {
  static Foo = "helloooo";
  render() {
    return <>{MyComponent.Foo}</>;
  }
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = (props) => {
  const {
    primary = false,
    size = "medium",
    backgroundColor,
    label,
    ...rest
  } = props;

  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={{ backgroundColor }}
      {...rest}
    >
      <MyComponent {...props} />
      {label}
    </button>
  );
};

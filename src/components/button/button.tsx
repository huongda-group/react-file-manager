import { MouseEventHandler, KeyboardEventHandler, PropsWithChildren } from "react";
import "./button.css";

interface ButtonProps extends PropsWithChildren {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onKeyDown?: KeyboardEventHandler<HTMLButtonElement>;
  type?: "primary" | "secondary" | "danger" | "ghost" | string; // Adding string to allow others if logic implies
  padding?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  onKeyDown,
  type = "primary",
  padding = "0.4rem 0.8rem",
  children,
}) => {
  return (
    <button
      onClick={onClick}
      onKeyDown={onKeyDown}
      className={`fm-button fm-button-${type}`}
      style={{ padding: padding }}
    >
      {children}
    </button>
  );
};

export default Button;

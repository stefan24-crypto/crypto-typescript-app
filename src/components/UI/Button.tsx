import React, { Children } from "react";
import classes from "./Button.module.css";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={classes.btn}>
      {children}
    </button>
  );
};

export default Button;

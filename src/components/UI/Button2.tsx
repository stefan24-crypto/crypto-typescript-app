import React from "react";
import classes from "./Button2.module.css";

interface Button2Props {
  onClick: () => void;
}

const Button2: React.FC<Button2Props> = ({ children, onClick }) => {
  return (
    <button className={classes.btn2} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button2;

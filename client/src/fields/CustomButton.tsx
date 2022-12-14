import React from "react";
import { ButtonProps, typeButton } from "./types";

export const CustomButton = ({
  color = "blue",
  children,
  className,
  type,
  onClick,
}: ButtonProps) => {
  return (
    <button
      style={{ padding: type === typeButton.small ? "11px 35px" : "20px 40px" }}
      className={className ? className : `button_${color}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

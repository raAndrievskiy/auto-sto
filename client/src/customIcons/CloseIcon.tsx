import React from "react";
import { IconProps } from "./types";

export const CloseIcon = ({ width, heigth, color }: IconProps) => {
  return (
    <svg
      width={width}
      height={heigth}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4.30664"
        y="5.26367"
        width="1.35355"
        height="13.5355"
        transform="rotate(-45 4.30664 5.26367)"
        fill="#0E4194"
      />
      <rect
        x="5.26465"
        y="14.834"
        width="1.35355"
        height="13.5355"
        transform="rotate(-135 5.26465 14.834)"
        fill="#0E4194"
      />
    </svg>
  );
};

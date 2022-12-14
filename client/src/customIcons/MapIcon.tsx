import React from "react";
import { IconProps } from "./types";

export const MapIcon = ({ width, heigth }: IconProps) => {
  return (
    <svg
      width={width}
      height={heigth}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.9997 5.3457V23.3057"
        stroke="#0E4194"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9997 7.70703V26.667"
        stroke="#0E4194"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.8427 5.47115L27.088 7.55248C27.6333 7.73382 28 8.24315 28 8.81782V24.8245C28 25.8151 26.9573 26.4605 26.0707 26.0165L21.1933 23.5778C20.4427 23.2018 19.5587 23.2018 18.808 23.5778L13.1933 26.3858C12.4427 26.7618 11.5587 26.7618 10.808 26.3858L4.73733 23.3512C4.28533 23.1245 4 22.6632 4 22.1578V7.03915C4 6.12848 4.892 5.48582 5.75467 5.77382L11.156 7.57382C11.704 7.75648 12.2947 7.75648 12.8427 7.57382L19.156 5.46982C19.704 5.28848 20.296 5.28848 20.8427 5.47115Z"
        stroke="#0E4194"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

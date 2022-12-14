import React from "react";
import { IconProps } from "../types";

export const VkIcon = ({ width, heigth, color }: IconProps) => {
  return (
    <svg
      width={width}
      height={heigth}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_678_1124)">
        <path
          d="M19.894 14.6002C19.8698 14.548 19.8472 14.5047 19.8262 14.47C19.4792 13.8451 18.8161 13.078 17.8373 12.1686L17.8166 12.1477L17.8063 12.1375L17.7958 12.1271H17.7853C17.341 11.7036 17.0597 11.4188 16.9419 11.273C16.7264 10.9953 16.6781 10.7143 16.7959 10.4294C16.8791 10.2143 17.1918 9.7598 17.7331 9.06548C18.0178 8.69751 18.2433 8.40259 18.4099 8.1804C19.611 6.58363 20.1317 5.56328 19.9719 5.11893L19.9099 5.01509C19.8682 4.95258 19.7606 4.89539 19.5872 4.84324C19.4135 4.79119 19.1914 4.78258 18.9206 4.81727L15.9217 4.83798C15.8731 4.82077 15.8037 4.82237 15.7134 4.84324C15.6231 4.8641 15.5779 4.87457 15.5779 4.87457L15.5257 4.90064L15.4843 4.93197C15.4496 4.95269 15.4114 4.98913 15.3697 5.04121C15.3282 5.09311 15.2936 5.15402 15.2658 5.22343C14.9393 6.06342 14.5681 6.84441 14.1515 7.56635C13.8946 7.99683 13.6587 8.36991 13.4433 8.6858C13.2281 9.00158 13.0476 9.23424 12.9019 9.38337C12.756 9.53265 12.6244 9.65225 12.5061 9.74259C12.3881 9.83297 12.298 9.87116 12.2355 9.85719C12.173 9.84322 12.1141 9.82936 12.0583 9.8155C11.9612 9.75298 11.8831 9.66797 11.8242 9.56037C11.765 9.45278 11.7252 9.31736 11.7044 9.15421C11.6836 8.99096 11.6714 8.85055 11.6679 8.73248C11.6646 8.61457 11.6661 8.44778 11.6732 8.23259C11.6804 8.01729 11.6836 7.87162 11.6836 7.79525C11.6836 7.53141 11.6888 7.24506 11.6991 6.93614C11.7096 6.62722 11.7181 6.38245 11.7252 6.20213C11.7323 6.02163 11.7356 5.83066 11.7356 5.62933C11.7356 5.428 11.7233 5.27011 11.6991 5.15551C11.6752 5.04106 11.6385 4.92997 11.5901 4.82226C11.5414 4.71467 11.4701 4.63144 11.3766 4.57235C11.2829 4.51334 11.1664 4.46651 11.0278 4.43172C10.6598 4.34845 10.1912 4.30341 9.62185 4.2964C8.33069 4.28254 7.50105 4.36592 7.13311 4.54642C6.98733 4.62269 6.85541 4.72689 6.73746 4.8587C6.61247 5.01148 6.59504 5.09486 6.68527 5.10857C7.10186 5.17098 7.39677 5.32026 7.57035 5.55627L7.6329 5.68134C7.68155 5.77157 7.73013 5.93132 7.77875 6.16037C7.8273 6.38942 7.85863 6.64279 7.87241 6.92035C7.90706 7.4272 7.90706 7.86108 7.87241 8.22201C7.83765 8.58309 7.80483 8.86419 7.7735 9.06551C7.74217 9.26684 7.69534 9.42998 7.6329 9.5549C7.57035 9.67986 7.52873 9.75623 7.50787 9.78395C7.48704 9.81167 7.46968 9.82914 7.4559 9.836C7.36566 9.87057 7.27182 9.88819 7.17469 9.88819C7.07742 9.88819 6.95947 9.83953 6.82065 9.7423C6.68188 9.64506 6.53785 9.5115 6.38856 9.34139C6.23928 9.17125 6.07093 8.93348 5.88342 8.62806C5.69606 8.32264 5.50166 7.96167 5.30033 7.54516L5.13376 7.24309C5.02963 7.04877 4.88739 6.76581 4.70689 6.39448C4.52628 6.02301 4.36664 5.66369 4.22786 5.31658C4.17238 5.1708 4.08904 5.05981 3.97799 4.98344L3.92587 4.95211C3.89122 4.92439 3.8356 4.89495 3.7593 4.86359C3.68289 4.83226 3.60316 4.80979 3.51978 4.79597L0.666572 4.81668C0.375011 4.81668 0.177184 4.88274 0.073018 5.01466L0.0313299 5.07706C0.0105041 5.11182 0 5.16733 0 5.24374C0 5.32011 0.0208258 5.41385 0.0625139 5.52483C0.47903 6.50376 0.931983 7.44785 1.42137 8.35725C1.91076 9.26666 2.33603 9.99921 2.69692 10.5542C3.05789 11.1097 3.42583 11.6339 3.80073 12.1267C4.17563 12.6196 4.42379 12.9355 4.54521 13.0742C4.66677 13.2133 4.76225 13.3172 4.83166 13.3866L5.09204 13.6365C5.25865 13.8031 5.5033 14.0027 5.82612 14.2352C6.14901 14.4679 6.50648 14.6969 6.89871 14.9227C7.291 15.1482 7.74739 15.3321 8.2681 15.4744C8.78875 15.6169 9.2955 15.674 9.78842 15.6464H10.986C11.2288 15.6255 11.4128 15.5491 11.5379 15.4173L11.5793 15.3651C11.6072 15.3237 11.6333 15.2593 11.6573 15.1727C11.6817 15.0859 11.6938 14.9903 11.6938 14.8863C11.6867 14.5879 11.7094 14.3189 11.7614 14.0794C11.8133 13.84 11.8724 13.6595 11.9386 13.5379C12.0047 13.4165 12.0793 13.314 12.1624 13.2309C12.2456 13.1476 12.3049 13.0972 12.3397 13.0798C12.3743 13.0624 12.4019 13.0505 12.4227 13.0434C12.5893 12.9879 12.7854 13.0416 13.0112 13.2049C13.2369 13.3681 13.4486 13.5695 13.6465 13.8089C13.8444 14.0485 14.0821 14.3174 14.3597 14.6158C14.6376 14.9144 14.8805 15.1363 15.0886 15.2823L15.2968 15.4073C15.4359 15.4907 15.6164 15.567 15.8386 15.6364C16.0604 15.7058 16.2547 15.7232 16.4215 15.6885L19.0872 15.6469C19.3509 15.6469 19.556 15.6033 19.7015 15.5166C19.8474 15.4299 19.934 15.3343 19.9619 15.2303C19.9898 15.1262 19.9913 15.0081 19.9672 14.8761C19.9425 14.7444 19.9182 14.6523 19.894 14.6002Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_678_1124">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

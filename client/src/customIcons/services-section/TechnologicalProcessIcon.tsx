import React from "react";
import { IconProps } from "../types";

export const TechnologicalProcessIcon = ({
  width,
  heigth,
  color,
}: IconProps) => {
  return (
    <svg
      width={width}
      height={heigth}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.3389 0.28672C26.0459 2.53349 16.7615 11.8776 14.732 24.0449C14.2422 26.9813 14.3931 32.7114 15.0273 35.2485C16.1498 39.7399 18.183 43.8918 20.8341 47.1066C21.2825 47.6503 21.6495 48.1799 21.6495 48.2834C21.6495 48.5292 18.1902 51.9788 17.9438 51.9788C17.8398 51.9788 17.2031 51.4513 16.5289 50.8066C15.7297 50.0426 15.1225 49.6344 14.7847 49.6344C14.388 49.6344 12.7016 51.2052 7.59361 56.3326C1.91306 62.0343 0.850465 63.1993 0.448857 64.1649C-0.727054 66.9918 0.475432 70.1239 3.2616 71.4903C4.27189 71.9858 4.62227 72.0484 5.96677 71.9738C6.83292 71.9259 7.84534 71.7253 8.27182 71.5173C8.69022 71.3134 12.0147 68.1655 15.6598 64.5219C23.3635 56.8215 23.0529 57.349 21.0689 55.3392L19.8504 54.1048L21.7845 52.1662L23.7183 50.2274L25.4461 51.5969C36.62 60.4542 52.8206 59.5757 63.2902 49.5449C66.4533 46.5143 69.6551 41.2092 70.8496 37.0198C75.618 20.2926 65.0837 3.28774 48.1091 0.311443C45.8042 -0.0926431 40.4883 -0.106283 38.3389 0.28672ZM47.3998 3.05991C55.8906 4.55243 62.7381 9.65721 66.5709 17.3519C70.608 25.4564 69.9432 35.553 64.8682 43.217C62.2468 47.1758 58.0396 50.7563 53.8141 52.6248C39.5622 58.9267 23.1126 51.553 18.3794 36.7404C17.599 34.2981 17.1848 31.5966 17.1848 28.9487C17.1848 24.5562 17.941 21.2223 19.8166 17.3459C23.3986 9.94301 30.4763 4.56159 38.5515 3.10083C40.8223 2.69014 45.1811 2.6701 47.3998 3.05991ZM39.1893 6.40428C30.4353 8.04918 23.4562 14.5936 21.1973 23.2757C20.6258 25.4718 20.4308 29.7093 20.7867 32.1908C22.1136 41.4393 29.2798 49.0437 38.5515 51.0421C47.3545 52.9394 56.7894 49.134 61.8213 41.6569C63.6833 38.8899 64.9787 35.8533 64.7266 34.8461C64.5452 34.121 63.7144 33.7157 62.9611 33.9849C62.5202 34.1424 62.2466 34.5782 61.6206 36.1195C59.1096 42.3025 53.7571 46.8604 47.3205 48.2964C45.0001 48.8141 40.9528 48.7562 38.5642 48.1709C31.3816 46.4109 25.8244 40.8758 23.8599 33.5256C23.2702 31.3187 23.3222 26.08 23.9575 23.7397C25.8307 16.8361 31.2336 11.4185 38.1263 9.53189C40.4755 8.88889 45.6869 8.83924 47.906 9.43876C54.4593 11.209 59.7895 16.0284 61.8256 22.0242C62.0325 22.6331 62.4283 23.2623 62.7617 23.5117C63.2887 23.9064 63.3876 23.9166 63.8932 23.6287C64.7931 23.1165 64.9358 22.7182 64.6328 21.5641C64.2187 19.9863 62.7287 17.1243 61.3921 15.3389C58.5779 11.5798 54.6864 8.70795 50.4547 7.26701C47.4366 6.23953 42.2004 5.83843 39.1893 6.40428ZM48.3312 20.6315C47.8346 20.8646 46.2471 22.2779 44.5146 24.0293L41.5485 27.0282L40.2236 25.7529C39.495 25.0515 38.4858 24.2896 37.981 24.06C34.3568 22.4113 30.4653 25.9419 31.7228 29.7377C32.0167 30.6241 32.6251 31.3331 35.841 34.5356C37.9164 36.6022 39.8235 38.3995 40.0788 38.5291C40.7413 38.8656 42.1974 38.8207 42.9998 38.439C43.3767 38.2595 46.084 35.6941 49.0158 32.7379C54.7344 26.9713 54.8175 26.856 54.8097 24.6988C54.7982 21.4857 51.2535 19.2602 48.3312 20.6315ZM51.4303 23.6167C51.8645 24.0521 52.0518 24.4503 52.0518 24.9387C52.0518 25.567 51.5301 26.1625 46.9019 30.8161C44.0696 33.6641 41.6021 35.9944 41.4186 35.9944C40.9282 35.9944 34.4659 29.3903 34.2985 28.7179C33.9924 27.4873 35.2857 26.2066 36.5234 26.5144C36.8202 26.5881 37.9353 27.5046 39.0011 28.5508C40.3137 29.8393 41.0982 30.4531 41.432 30.4531C41.7839 30.4531 42.9322 29.4553 45.4468 26.9641C47.3841 25.0451 49.1604 23.3695 49.3942 23.2408C50.1156 22.8437 50.7819 22.9667 51.4303 23.6167ZM63.459 27.8592C62.6905 28.7106 63.3421 30.24 64.4736 30.24C65.051 30.24 65.871 29.3477 65.871 28.7194C65.871 27.6716 64.1744 27.0666 63.459 27.8592ZM13.3564 62.9689C10.2586 66.0828 7.445 68.7791 7.10399 68.96C6.68324 69.1836 6.14132 69.2565 5.41634 69.1866C4.5317 69.1013 4.23022 68.9541 3.65726 68.3275C2.83427 67.4272 2.57022 66.3158 2.9495 65.3488C3.10938 64.9411 5.57069 62.2875 8.9766 58.8502L14.7335 53.0406L16.8612 55.1736L18.9892 57.3068L13.3564 62.9689Z"
        fill="#2998FF"
      />
    </svg>
  );
};
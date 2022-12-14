import React from "react";
import { IconProps } from "../types";

export const ServiceCarIcon = ({ width, heigth, color }: IconProps) => {
  return (
    <svg
      width={width}
      height={heigth}
      viewBox="0 0 75 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M58.9429 1.46464L56.115 2.92063L56.0543 6.79444L55.9939 10.6683L54.1163 10.8223C48.4978 11.2835 42.7495 13.3449 38.3022 16.494C35.4403 18.5204 33.5812 20.3121 30.6173 23.9002L27.8203 27.2861L23.7978 27.2878C19.0093 27.29 16.6111 27.5328 14.0149 28.2781C10.2138 29.3691 7.09522 31.1801 4.16621 33.9972L2.33308 35.7605V39.1054V42.4501L1.16654 42.5168L0 42.5832V46.9853V51.3874L4.60305 51.4468L9.2061 51.5062L9.87114 52.4637C12.0636 55.6204 15.902 57.3357 19.5367 56.7828C22.3964 56.3481 25.071 54.6924 26.478 52.4861L27.1081 51.4983L31.6683 51.4979L36.2287 51.4974L37.9958 53.2582C38.9677 54.2267 39.9416 55.0191 40.1603 55.0191C40.3787 55.0191 40.8475 54.6973 41.2022 54.3042L41.847 53.5893L42.81 53.919C43.7576 54.2434 43.7741 54.2663 43.8381 55.3492C43.9281 56.8664 44.1769 57 46.9104 57C49.6063 57 49.8823 56.8404 49.8856 55.2786C49.8879 54.2905 49.9232 54.2342 50.7549 53.8882L51.6219 53.5276L52.3516 54.2734C52.7531 54.6834 53.2866 55.0191 53.5372 55.0191C53.9752 55.0191 57.4382 51.6713 57.4382 51.248C57.4382 51.1437 57.0902 50.6771 56.6651 50.2109L55.8921 49.3633L56.2469 48.4684C56.442 47.976 56.7844 47.5261 57.0075 47.4682C57.3231 47.3865 57.4284 47.107 57.4813 46.2114L57.5493 45.0598L59.9934 43.7828L62.4376 42.5058L62.4947 28.5211L62.552 14.5366L60.0505 13.2626L57.5493 11.9889L57.489 7.91257L57.4288 3.83626L59.1035 3.01527C60.0248 2.56362 60.8769 2.19429 60.9971 2.19429C61.1284 2.19429 61.2155 3.27235 61.2155 4.89737V7.60046L63.1924 8.63913C64.2796 9.21052 65.3353 9.6778 65.5384 9.6778C65.7415 9.6778 66.8018 9.22372 67.8946 8.66884L69.8812 7.65989V4.92709C69.8812 3.2827 69.9683 2.19429 70.0997 2.19429C70.2199 2.19429 71.0698 2.56274 71.9883 3.01285L73.6586 3.83163V7.84632V11.861L71.1018 13.2096L68.5447 14.5584L68.602 28.5257L68.6591 42.493L71.1033 43.7738L73.5475 45.0546L73.6077 49.1058L73.6679 53.157L71.9932 53.978C71.072 54.4296 70.2199 54.799 70.0997 54.799C69.9683 54.799 69.8812 53.7209 69.8812 52.0959V49.3928L67.9043 48.3541C66.8171 47.7827 65.7652 47.3155 65.5666 47.3155C65.368 47.3155 64.309 47.7858 63.2133 48.3609L61.2208 49.4064L61.2182 52.2158L61.2155 55.0255L59.8888 54.3618C59.1588 53.9969 58.4749 53.6984 58.3689 53.6984C58.181 53.6984 57.5806 54.8003 57.7077 54.9121C57.7428 54.9429 58.7047 55.4307 59.8454 55.9957C61.469 56.7999 61.9865 56.9679 62.2283 56.7693C62.4592 56.5796 62.5523 55.7315 62.5983 53.4013L62.6598 50.2868L64.1243 49.5326L65.589 48.7783L67.0129 49.5519L68.4369 50.3258L68.4985 53.4207C68.5445 55.7318 68.638 56.5798 68.868 56.7689C69.1098 56.9676 69.8035 56.7108 72.0881 55.5768L75 54.1314L74.9405 49.1276L74.8807 44.124L72.381 42.8509L69.8812 41.578V28.5045V15.4311L72.4356 14.1501L74.9898 12.8693L74.9909 7.86349L74.9918 2.85768L72.0839 1.41446C69.7726 0.267062 69.1118 0.0238476 68.862 0.229204C68.6185 0.429498 68.548 1.18775 68.548 3.60933V6.73149L67.0155 7.46576L65.4828 8.20024L64.0159 7.38762L62.5487 6.57478V3.54814C62.5487 0.737643 62.4067 -0.0311779 61.8932 0.000957176C61.8261 0.00513914 60.4985 0.663688 58.9429 1.46464ZM56.1052 12.5396C56.2363 12.7821 56.9147 13.2725 57.6128 13.6295L58.8824 14.2788L56.3272 14.2901C48.2158 14.3255 42.714 16.4546 37.7345 21.4846C36.0232 23.2135 35.5841 23.5443 35.0015 23.5443C34.0392 23.5443 33.067 24.0913 32.6669 24.8577C32.2602 25.6366 32.212 28.1819 32.5964 28.5627C32.7977 28.7621 36.0658 28.8268 45.9423 28.8268H59.0218L58.952 28.1114L58.8824 27.3961L50.6556 27.3384L42.4285 27.2808L42.5102 26.4316C42.6131 25.3646 42.0872 24.3197 41.225 23.8782C40.8522 23.6874 39.9954 23.5443 39.2239 23.5443H37.8745L38.236 22.9978C38.7986 22.1471 41.6088 19.8648 43.3286 18.8618C47.2888 16.5521 50.4136 15.8477 56.716 15.8436L61.2155 15.8407L61.2137 28.6617L61.212 41.4827L60.2812 41.9835C59.4719 42.4188 59.3259 42.4402 59.1611 42.1485C59.0284 41.9137 58.618 41.8129 57.7941 41.8129C56.6198 41.8129 56.6158 41.8107 56.2543 40.899L55.8921 39.9851L56.6651 39.1375C57.0902 38.6713 57.4382 38.1798 57.4382 38.0451C57.4382 37.5942 54.0461 34.3294 53.5772 34.3294C53.3293 34.3294 52.8011 34.6417 52.4036 35.0233C51.6934 35.7052 51.6661 35.7116 50.8378 35.4002C50.0465 35.1026 49.9874 35.0159 49.8794 33.9908C49.8161 33.3902 49.6852 32.775 49.5886 32.6236C49.339 32.2329 44.4756 32.2379 44.1476 32.6291C44.0183 32.7836 43.8812 33.399 43.8428 33.9968C43.7763 35.0306 43.7317 35.0993 42.9297 35.4004C42.1014 35.7116 42.0738 35.705 41.3639 35.0233C40.9664 34.6417 40.448 34.3294 40.2123 34.3294C39.7392 34.3294 36.3294 37.562 36.3294 38.0104C36.3294 38.164 36.6849 38.6797 37.1193 39.156L37.9092 40.0221L37.4481 40.9175C37.0015 41.7847 36.952 41.8129 35.8734 41.8129C35.0888 41.8129 34.7222 41.9104 34.6322 42.143C34.5253 42.4186 33.8936 42.4719 30.8062 42.4648L27.1081 42.4565L26.2545 41.2388C25.1175 39.6173 23.1221 38.1882 21.179 37.6036C18.8779 36.9112 16.0889 37.0688 14.0696 38.0053C12.4382 38.762 10.861 40.0815 9.85314 41.5327L9.19988 42.4732H6.54417H3.88846V39.6118V36.7505H6.67482C9.0019 36.7505 9.60161 36.6796 10.3131 36.32C11.4116 35.7649 12.2582 34.7581 12.5597 33.6481C12.9664 32.153 12.769 31.9366 10.9312 31.8627L9.33231 31.7982L11.0361 30.9569C11.9731 30.4943 13.623 29.8619 14.7024 29.5516C16.5169 29.0297 17.1143 28.9771 22.6271 28.8521C27.6774 28.7374 28.6289 28.6639 28.8486 28.3714C30.6524 25.9696 35.0946 20.9114 36.3471 19.8329C41.7781 15.1568 47.8425 12.7154 55.4861 12.1282C55.6957 12.1121 55.9743 12.2972 56.1052 12.5396ZM40.7289 25.3491C40.8755 25.4944 40.9955 25.8708 40.9955 26.1855C40.9955 27.2066 40.7098 27.2861 37.0335 27.2861H33.6048L33.7343 26.4961C33.9589 25.124 34.0607 25.085 37.423 25.085C39.4906 25.085 40.5476 25.1695 40.7289 25.3491ZM10.9988 33.5808C10.9988 34.1027 9.78382 35.1314 8.97924 35.2908C7.90313 35.5038 5.22165 35.4561 5.22165 35.2236C5.22165 34.9142 7.85603 33.6917 8.99901 33.4705C10.576 33.1655 10.9988 33.1888 10.9988 33.5808ZM48.372 35.0022L48.4391 36.1151L49.7723 36.6735C51.8208 37.5316 51.9316 37.5334 52.7336 36.721L53.4488 35.9962L54.4916 37.0291L55.5344 38.0621L54.7891 38.8237L54.0439 39.5854L54.612 40.9743C54.9244 41.7383 55.2328 42.5311 55.2977 42.7364C55.3848 43.0135 55.719 43.1269 56.5934 43.1766L57.7714 43.2435L56.9938 43.6595C56.0145 44.1832 55.8903 44.3751 55.8861 45.3713C55.8843 45.815 55.7954 46.2112 55.6886 46.2517C55.5817 46.292 55.2262 46.9688 54.8984 47.7557C54.5705 48.5425 54.2514 49.2992 54.1892 49.4375C54.1272 49.5757 54.3994 50.0531 54.7942 50.4986L55.5121 51.3086L54.4805 52.3305L53.4488 53.3522L52.7509 52.645C52.3669 52.2559 51.9396 51.9374 51.8012 51.9372C51.663 51.9367 50.8251 52.2517 49.939 52.6371L48.328 53.3377V54.3986V55.4593H46.896H45.4639L45.3961 54.4208C45.323 53.3005 45.3921 53.3646 43.2028 52.3895C41.8679 51.795 41.641 51.8157 40.8813 52.601L40.2396 53.2646L39.1744 52.2253L38.1092 51.186L38.7746 50.5059C39.1406 50.1317 39.4401 49.6598 39.4401 49.4568C39.4401 49.145 38.9911 48.0083 38.3334 46.6551C38.236 46.4551 37.7443 46.2816 37.0844 46.2149L35.9961 46.1049V44.6742V43.2435L37.0648 43.176C38.1089 43.1099 38.1436 43.0844 38.5647 42.0755C38.8017 41.5074 39.0957 40.8706 39.2179 40.6604C39.5823 40.0338 39.4746 39.4661 38.8526 38.7338L38.2651 38.0423L39.2315 37.0668L40.198 36.0915L40.8851 36.7512C41.263 37.1139 41.6594 37.4108 41.7663 37.4108C42.0701 37.4108 44.8518 36.2865 45.1617 36.0385C45.3146 35.9161 45.4395 35.3826 45.4395 34.8528V33.8892H46.8722H48.3047L48.372 35.0022ZM21.2834 39.173C22.9275 39.7822 24.9957 41.646 25.7721 43.218C27.8861 47.4981 26.0725 52.6193 21.7303 54.6321C16.3749 57.1145 10.0907 53.4579 9.71382 47.6401C9.44185 43.443 12.1502 39.7679 16.2751 38.7365C17.5054 38.4288 19.8201 38.6306 21.2834 39.173ZM44.8173 39.1826C42.5856 40.0697 40.9955 42.3545 40.9955 44.6742C40.9955 46.5667 41.999 48.4146 43.5977 49.4661C44.612 50.1334 45.0595 50.284 46.2485 50.359C48.3785 50.4933 49.557 50.0839 50.9204 48.7358C51.7705 47.8954 52.1601 47.2961 52.4203 46.4276C52.8613 44.9566 52.8609 44.394 52.4178 42.8984C51.9779 41.4134 50.2565 39.6358 48.8578 39.222C47.799 38.9088 45.561 38.887 44.8173 39.1826ZM48.1232 40.5233C48.99 40.7806 50.55 41.9029 50.55 42.2691C50.55 42.3862 48.988 42.4732 46.8838 42.4732C44.8673 42.4732 43.2175 42.3926 43.2175 42.2942C43.2175 41.9716 44.4234 40.9637 45.2173 40.623C46.1601 40.2187 46.9991 40.1898 48.1232 40.5233ZM16.7746 41.7854C15.1068 42.327 13.7425 43.5383 13.1092 45.0394C12.6537 46.1194 12.6942 48.1052 13.1937 49.1949C13.7374 50.3804 15.4143 51.8108 16.6677 52.1586C18.7835 52.7454 21.1417 51.9643 22.47 50.2369C25.0628 46.8653 22.9024 42.0479 18.6457 41.7092C17.9229 41.6515 17.0808 41.6859 16.7746 41.7854ZM19.7272 43.4366C23.5656 45.0634 22.4124 50.8371 18.2491 50.8371C16.2838 50.8371 14.8173 49.7619 14.3282 47.9626C13.4961 44.9016 16.7495 42.1745 19.7272 43.4366ZM8.11022 47.1011V50.1882L4.7217 50.1275L1.33319 50.0667L1.27142 47.0403L1.20965 44.0139H4.65993H8.11022V47.1011ZM34.598 45.7197L34.6629 47.4255L35.885 47.4909C37.0893 47.5554 37.1128 47.5697 37.5043 48.4813C37.8972 49.3961 37.8963 49.4108 37.4186 49.7962C36.9866 50.1444 36.4722 50.1797 32.5773 50.1264L28.2191 50.0667L28.1574 47.0403L28.0956 44.0139H31.3143H34.5331L34.598 45.7197ZM51.2166 44.9795C51.2166 46.2319 50.1347 47.8695 48.8835 48.5106C46.1705 49.9012 42.8433 48.1631 42.5973 45.2267L42.4958 44.0139H46.8562H51.2166V44.9795Z"
        fill="#2998FF"
      />
    </svg>
  );
};
import React from "react";
import { IconProps } from "../types";

export const PricingIcon = ({ width, heigth, color }: IconProps) => {
  return (
    <svg
      width={width}
      height={heigth}
      viewBox="0 0 65 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.9011 0.291562C3.6536 0.901774 1.46415 2.86998 0.578919 5.07579L0.0908677 6.29194L0.0254128 30.3933C-0.0430076 55.6137 -0.0353817 55.8599 0.872301 57.6617C1.43703 58.7828 2.84357 60.279 3.94148 60.9267C5.78629 62.0153 6.31395 62.061 17.0545 62.0637L27.0275 62.0663L27.7465 63.186C28.7169 64.6974 31.3501 67.3368 33.0049 68.457C34.9285 69.7589 37.5457 70.9424 39.7288 71.4976C42.3732 72.1699 46.728 72.1671 49.4207 71.4914C56.6256 69.6832 62.4301 63.9948 64.3976 56.8139C64.9822 54.6793 65.1905 50.0826 64.8018 47.8917C64.0597 43.7119 61.733 39.2933 58.8341 36.5585C56.4261 34.2866 53.1591 32.3931 50.2941 31.6088L48.8113 31.2029L48.7054 24.047L48.5995 16.891L47.8725 16.0705C47.4725 15.6192 45.3297 13.3304 43.1106 10.9842C40.8915 8.63809 38.2637 5.85983 37.2711 4.81046C36.2783 3.76109 34.8417 2.24932 34.0785 1.4512L32.6906 0L19.7801 0.0142902C10.2542 0.0249545 6.61559 0.0976851 5.9011 0.291562ZM30.4899 7.51834C30.4922 14.239 30.8224 15.5821 32.9327 17.4524C34.5188 18.8581 35.1579 18.9825 40.7995 18.9825H45.7398V24.8173V30.6522L43.6063 30.8002C39.5034 31.0848 35.5041 32.5095 32.5321 34.7454L31.2296 35.7254L21.3078 35.8321L11.3857 35.9387L10.9812 36.4423C10.4662 37.0828 10.4662 37.7807 10.9812 38.4212L11.386 38.9247L19.7758 38.9874L28.1657 39.0499L27.5546 39.9472C27.2184 40.4406 26.6452 41.4404 26.2809 42.1693L25.6183 43.494L18.5021 43.5556L11.3857 43.617L10.9812 44.1206C10.4903 44.731 10.4645 45.3875 10.9062 46.0223C11.2349 46.4951 11.2534 46.4964 17.9094 46.4964H24.5831L24.411 47.5095C24.3166 48.0668 24.2492 50.0103 24.2613 51.8286C24.2829 55.0835 24.3814 55.7151 25.3348 58.707C25.4467 59.0585 24.9324 59.0803 16.52 59.0803C10.3554 59.0803 7.27861 59.0022 6.59335 58.8284C5.31899 58.5055 3.58433 56.8184 3.20813 55.5363C3.01261 54.8698 2.95097 48.9358 2.95266 30.9018L2.95478 7.14509L3.45724 6.05861C4.00524 4.87338 5.24845 3.68623 6.36881 3.278C6.89393 3.08668 10.158 3.01416 18.7847 3.00222L30.4882 2.98601L30.4899 7.51834ZM38.7683 10.7861L43.5696 15.8898L39.945 15.9485C37.5704 15.9869 36.1179 15.9225 35.7335 15.7621C34.9198 15.4229 33.9437 14.2452 33.6783 13.2828C33.3517 12.0982 33.3792 5.48487 33.7105 5.59599C33.8516 5.64334 36.1277 7.97882 38.7683 10.7861ZM11.1345 28.8092C10.4516 29.3499 10.3904 30.3127 11 30.9265C11.409 31.3384 11.706 31.3531 19.579 31.3531C27.4521 31.3531 27.749 31.3384 28.1581 30.9265C28.7677 30.3127 28.7065 29.3499 28.0236 28.8092C27.4817 28.3799 27.2368 28.3671 19.579 28.3671C11.9212 28.3671 11.6764 28.3799 11.1345 28.8092ZM48.9172 34.3581C52.3118 35.2121 56.0253 37.6056 58.2368 40.3653C59.6675 42.1505 61.0893 45.1113 61.6421 47.4562C62.0205 49.0618 62.0777 49.8117 61.9919 52.0418C61.8775 55.0127 61.5371 56.5262 60.4716 58.8011C59.4139 61.0592 58.2552 62.6624 56.4816 64.3218C53.3878 67.2163 49.8908 68.7488 45.7199 69.0376C37.0318 69.6392 29.153 63.523 27.4044 54.8195C26.8642 52.1314 27.0638 48.7468 27.9204 46.0681C28.9393 42.8814 30.8091 40.0526 33.2419 38.017C37.7102 34.2785 43.3588 32.96 48.9172 34.3581ZM43.3158 37.3727C43.1345 37.6333 42.986 38.1479 42.986 38.5163C42.986 39.1276 42.8672 39.2449 41.6274 39.8596C38.7094 41.3061 37.205 44.4719 37.9829 47.5289C38.7681 50.6156 41.0262 52.4983 44.3267 52.8186C46.8601 53.0645 48.2817 54.4899 48.2817 56.7849C48.2817 59.2673 45.898 61.072 43.5533 60.3647C41.9697 59.8869 40.6614 58.084 40.6572 56.373C40.6557 55.8219 39.9194 55.2411 39.2223 55.2411C38.9516 55.2411 38.4879 55.4851 38.1917 55.7835C37.703 56.2754 37.667 56.4277 37.8032 57.4258C38.1367 59.866 39.7506 62.0742 41.8373 62.945L42.986 63.4245V64.4517C42.986 65.6762 43.5033 66.332 44.4688 66.332C45.431 66.332 45.9516 65.6755 45.9516 64.4626V63.446L47.0506 63.0532C47.813 62.7806 48.5105 62.2917 49.3288 61.4567C50.8626 59.8914 51.3223 58.6477 51.2134 56.3581C51.1202 54.4029 50.6097 53.1947 49.325 51.8881C48.182 50.7257 46.8244 50.1054 44.9575 49.8928C43.2055 49.6931 42.4143 49.3404 41.6399 48.4138C40.4846 47.0315 40.4748 45.0955 41.6157 43.5895C42.7128 42.1413 44.8436 41.7864 46.5159 42.7731C47.4376 43.3169 48.2817 44.5679 48.2817 45.3897C48.2817 46.8637 49.3765 47.8288 50.4763 47.3244C51.1624 47.0096 51.3407 46.4026 51.1872 44.9051C50.9306 42.4026 49.0248 40.2364 46.3223 39.3761C46.0613 39.2931 45.9516 39.035 45.9516 38.5048C45.9516 37.5224 45.3392 36.8985 44.375 36.8985C43.8613 36.8985 43.548 37.0389 43.3158 37.3727Z"
        fill="#2998FF"
      />
    </svg>
  );
};
import React from "react";
import { IconProps } from "../types";

export const SupportIcon = ({ width, heigth, color }: IconProps) => {
  return (
    <svg
      width={width}
      height={heigth}
      viewBox="0 0 81 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.8782 0.104242C33.6511 0.531098 28.7645 2.27221 25.1142 4.65248C17.7012 9.48585 12.9308 17.6351 12.3494 26.4588L12.2267 28.3178H10.4023C8.32554 28.3178 6.72105 28.6691 5.47031 29.3979C4.19762 30.1394 2.83161 31.6404 2.17425 33.0196C1.62611 34.1697 1.58958 34.3818 1.58958 36.4147C1.58958 38.4942 1.61551 38.6355 2.22403 39.8647C3.32316 42.0846 5.43397 43.7696 7.79444 44.3113C8.23356 44.412 10.4452 44.4965 12.7096 44.4991C16.5596 44.5033 16.8505 44.4796 17.2001 44.1319C17.4057 43.9275 17.622 43.5677 17.6809 43.3321C17.74 43.0966 17.7634 39.7838 17.7331 35.9705L17.6781 29.0371L17.2312 28.6774C16.9244 28.4303 16.4875 28.3178 15.8366 28.3178H14.8887L15.0204 26.6709C15.4522 21.2701 17.492 16.0688 20.6838 12.2288C21.1127 11.7129 21.5914 11.1312 21.7475 10.9362C22.2966 10.2507 25.1414 7.8571 26.4185 7.00602C29.3646 5.04282 33.3091 3.50422 36.7323 2.98307C39.0903 2.62397 44.013 2.732 46.0695 3.18803C55.101 5.19019 62.3 11.5625 65.1851 20.1087C65.8267 22.0096 66.3562 24.6123 66.5199 26.6709L66.6509 28.3178H65.703C65.052 28.3178 64.6152 28.4303 64.3084 28.6774L63.8615 29.0371L63.8064 35.9705C63.7761 39.7838 63.7996 43.0966 63.8586 43.3321C64.0581 44.1295 64.6334 44.5037 65.6596 44.5037H66.606V46.6526C66.606 47.8346 66.553 48.9388 66.4885 49.1063C66.1947 49.8674 65.5182 49.9619 60.4167 49.9557L55.5333 49.9498L55.0321 49.1279C54.7289 48.6311 54.1787 48.1009 53.6398 47.7869C52.8766 47.3422 52.4828 47.2549 50.8983 47.179C48.507 47.0644 47.3028 47.3437 46.2961 48.2462C44.5598 49.8027 44.3655 52.0491 45.8157 53.7972C46.7878 54.969 47.5803 55.2225 50.287 55.2274C51.8426 55.2302 52.8132 55.1461 53.2208 54.9735C53.9126 54.6804 55.1856 53.4695 55.3528 52.9457C55.4576 52.6169 55.7654 52.5966 60.6283 52.5966C64.0296 52.5966 66.012 52.5224 66.4358 52.3796C67.3941 52.0564 68.0814 51.5184 68.6494 50.6473C69.1291 49.9112 69.1612 49.7187 69.2241 47.2078L69.2905 44.5479L71.5917 44.4651C73.4548 44.3981 74.0915 44.2983 74.9342 43.942C76.4995 43.2803 77.8261 42.2135 78.6981 40.9151C79.7845 39.2973 80.1054 38.082 80.0111 35.9409C79.9451 34.4394 79.8495 34.0355 79.2953 32.9159C78.9434 32.2052 78.2626 31.2329 77.7822 30.7554C76.0132 28.9964 74.1632 28.3178 71.1373 28.3178H69.3128L69.19 26.4556C68.3314 13.4271 58.5468 2.6219 45.5872 0.391071C43.4121 0.0165373 40.0023 -0.110315 37.8782 0.104242ZM35.7869 5.79189C35.4028 6.19842 35.3754 6.4126 35.3754 8.99745C35.3754 11.335 35.3292 11.7848 35.0798 11.88C34.8767 11.9576 34.1444 11.3662 32.742 9.99213C31.619 8.89168 30.554 7.99129 30.3755 7.99129C29.78 7.99129 29.3341 8.36356 26.1934 11.4835C23.7368 13.924 23.0724 14.6896 23.0724 15.08C23.0724 15.4573 23.5536 16.0615 25.0846 17.6063C26.4665 19.0007 27.0613 19.7289 26.9833 19.9308C26.8877 20.1787 26.4376 20.2248 24.1108 20.2248C21.4339 20.2248 21.3379 20.2386 20.8872 20.6869L20.4226 21.1487V25.6388C20.4226 31.3805 20.1341 30.9527 24.006 30.9527C26.4533 30.9527 26.8332 30.9931 26.9382 31.2657C27.0259 31.4925 26.5091 32.1339 25.0657 33.5902C23.4678 35.2026 23.0724 35.7087 23.0724 36.1414C23.0724 36.5893 23.6291 37.2347 26.3435 39.9336C29.0577 42.6327 29.7068 43.1862 30.1572 43.1862C30.5924 43.1862 31.1014 42.793 32.7229 41.2042C34.1875 39.7689 34.8326 39.2551 35.0606 39.3422C35.3345 39.4467 35.3754 39.8227 35.3754 42.2325C35.3754 46.0942 34.9628 45.8211 40.7963 45.8211C46.5739 45.8211 46.1642 46.097 46.1642 42.2062C46.1642 39.821 46.2052 39.4467 46.4789 39.3422C46.707 39.2551 47.3521 39.7689 48.8167 41.2042C50.4382 42.793 50.9472 43.1862 51.3823 43.1862C51.8328 43.1862 52.4818 42.6327 55.196 39.9336C57.9104 37.2347 58.4671 36.5893 58.4671 36.1414C58.4671 35.7087 58.0717 35.2026 56.4738 33.5902C55.0304 32.1339 54.5137 31.4925 54.6013 31.2657C54.7064 30.9931 55.0863 30.9527 57.5336 30.9527C61.4054 30.9527 61.117 31.3805 61.117 25.6388V21.1487L60.6523 20.6869C60.2016 20.2386 60.1057 20.2248 57.4287 20.2248C55.102 20.2248 54.6519 20.1787 54.5563 19.9308C54.4783 19.7289 55.073 19.0007 56.4549 17.6063C57.5616 16.4896 58.4671 15.4306 58.4671 15.2531C58.4671 14.652 58.0471 14.1451 55.1786 11.284C52.326 8.43885 51.7804 7.99129 51.1641 7.99129C50.9856 7.99129 49.9205 8.89168 48.7976 9.99213C47.3952 11.3662 46.6629 11.9576 46.4598 11.88C46.2101 11.7848 46.1642 11.3325 46.1642 8.9711C46.1642 5.07896 46.5804 5.35638 40.7433 5.35638C36.2374 5.35638 36.195 5.36014 35.7869 5.79189ZM43.5143 10.5903C43.5143 12.378 43.5881 13.2863 43.7509 13.5001C44.0403 13.8805 46.5463 14.955 47.144 14.955C47.4387 14.955 48.1676 14.3698 49.4269 13.1222L51.2771 11.2896L53.2094 13.2111L55.1417 15.1325L53.2808 17.0159C51.6464 18.67 51.4315 18.9629 51.5167 19.421C51.6721 20.2576 52.6081 22.3679 52.9376 22.6245C53.1462 22.7869 54.0498 22.8597 55.8534 22.8597H58.4671V25.5887V28.3178L55.8646 28.3238C54.1071 28.3277 53.1628 28.4049 52.9567 28.5609C52.598 28.8325 51.6465 30.9852 51.5252 31.7996C51.4499 32.3053 51.6301 32.5506 53.2507 34.1484C54.2459 35.1298 55.0601 36.0091 55.0601 36.1026C55.0601 36.3226 52.0453 39.3957 51.5869 39.643C51.2911 39.8026 50.9462 39.5481 49.3669 38.0052C47.2669 35.9537 47.3634 35.982 45.359 36.8325C43.494 37.6239 43.5143 37.5831 43.5143 40.5805V43.1862H40.7698H38.0253V40.5805C38.0253 37.5831 38.0455 37.6239 36.1806 36.8325C34.1758 35.9818 34.2731 35.9532 32.1689 38.009C30.8655 39.2822 30.2186 39.7924 30.0435 39.685C29.5546 39.3855 26.4802 36.314 26.4798 36.1246C26.4796 36.019 27.2937 35.1298 28.2889 34.1484C30.3331 32.1327 30.327 32.1533 29.4643 30.152C28.6644 28.2971 28.707 28.3178 25.693 28.3178H23.0724V25.5887V22.8597H25.6862C27.4898 22.8597 28.3934 22.7869 28.602 22.6245C28.9315 22.3679 29.8675 20.2576 30.0229 19.421C30.108 18.9629 29.8932 18.67 28.2588 17.0159L26.3978 15.1325L28.3302 13.2111L30.2625 11.2896L32.1127 13.1222C33.2727 14.2716 34.1105 14.955 34.359 14.955C34.9429 14.955 37.5138 13.866 37.7887 13.5022C37.9513 13.2871 38.0253 12.3769 38.0253 10.5903V7.99129H40.7698H43.5143V10.5903ZM38.3067 17.9179C36.0782 18.7088 34.359 20.2143 33.3492 22.259C32.8592 23.2512 32.8202 23.497 32.8202 25.5887C32.8202 27.7055 32.855 27.9182 33.3761 28.9765C34.9686 32.2122 38.5181 34.1407 41.882 33.5979C44.571 33.1641 46.879 31.4934 48.0819 29.1101C48.6997 27.8862 48.7194 27.7774 48.7194 25.5887C48.7194 23.4921 48.6812 23.2527 48.1852 22.2484C47.3642 20.585 45.993 19.2181 44.3225 18.3971C43.0193 17.7567 42.7348 17.6902 41.0749 17.6383C39.693 17.5948 39.0275 17.6622 38.3067 17.9179ZM43.2605 20.8502C44.9971 21.7267 46.1642 23.6295 46.1642 25.5844C46.1642 28.556 43.7558 30.9527 40.7698 30.9527C39.2484 30.9527 38.0698 30.4567 36.9542 29.3476C34.0312 26.4409 35.2946 21.7173 39.3502 20.3895C40.2542 20.0936 42.2204 20.3253 43.2605 20.8502ZM9.53918 36.4133V41.7746L8.8029 41.7161C6.33019 41.5198 4.14481 39.0306 4.14481 36.4107C4.14481 35.3518 4.71358 33.7223 5.33271 33.0075C6.03965 32.1913 7.15411 31.4648 8.08573 31.2132C9.64764 30.791 9.53918 30.4027 9.53918 36.4133ZM14.9336 36.4107V41.8687H13.6086H12.2837V36.4107V30.9527H13.6086H14.9336V36.4107ZM69.2559 36.4107V41.8687H67.9309H66.606V36.4107V30.9527H67.9309H69.2559V36.4107ZM74.3164 31.5627C76.1099 32.3904 77.3947 34.414 77.3947 36.4107C77.3947 39.0283 75.2075 41.5313 72.7575 41.7172L72.0004 41.7746L71.9498 36.6016C71.9222 33.7564 71.9425 31.3174 71.9947 31.1815C72.116 30.8676 73.1941 31.0445 74.3164 31.5627ZM52.5995 50.3381C53.0951 50.8308 53.0809 51.6166 52.5666 52.1611C52.1911 52.5584 51.9935 52.5966 50.3161 52.5966C48.8403 52.5966 48.4001 52.5317 48.0859 52.2672C47.4823 51.7593 47.3994 51.067 47.8707 50.4712C48.2627 49.9756 48.3274 49.9617 50.2474 49.9617C51.9687 49.9617 52.2695 50.0099 52.5995 50.3381ZM11.4672 54.2965C11.0719 54.6057 10.9673 54.8673 10.9211 55.661L10.8641 56.6431L5.81233 56.6931L0.760548 56.7432L0.365718 57.2423C-0.0245703 57.7356 -0.0283559 57.8523 0.0231273 67.6073L0.0753675 77.4736L0.522249 77.8332C0.936953 78.1669 1.32857 78.1929 5.96394 78.1929H10.9588V79.113C10.9588 79.7385 11.0746 80.1757 11.3205 80.4776L11.682 80.9219L17.5314 80.9765C23.2403 81.0298 23.3929 81.0217 23.889 80.6336C24.3465 80.2758 24.3974 80.1147 24.3974 79.0261C24.3974 78.3608 24.4381 77.8165 24.4879 77.8165C24.5376 77.8165 25.1978 78.1039 25.9547 78.4553C26.7118 78.8065 27.6719 79.1872 28.0883 79.3011C28.6016 79.4417 32.6614 79.5087 40.7007 79.5092C51.4236 79.5102 52.6531 79.4793 53.5715 79.1848C54.495 78.8887 57.3002 77.3347 67.8363 71.2825C69.8142 70.1464 72.8805 68.3867 74.6502 67.3721C76.42 66.3574 78.1763 65.334 78.5531 65.0978C81.3697 63.3316 81.842 59.2801 79.5137 56.8557C78.1015 55.3855 75.7571 54.8195 73.8697 55.4935C73.4661 55.6375 70.1193 57.4904 66.4322 59.6109L59.7285 63.4664L59.2672 62.9213C58.2099 61.672 58.6335 61.8069 41.6035 57.2933C36.6685 55.9853 34.9668 55.6079 34.003 55.6079C33.1584 55.6079 31.514 55.9091 28.8639 56.549C26.7207 57.0665 24.8388 57.49 24.6822 57.49C24.4551 57.49 24.3968 57.2135 24.3945 56.1255C24.3928 55.3749 24.329 54.6678 24.2526 54.554C23.8651 53.9771 23.2117 53.9141 17.6215 53.9141C12.2127 53.9141 11.9341 53.9314 11.4672 54.2965ZM21.7475 67.3709V78.1929H17.6781H13.6086V67.3709V56.549H17.6781H21.7475V67.3709ZM77.1672 58.3567C77.4063 58.5124 77.7731 58.9104 77.9821 59.2411C78.4606 59.9981 78.3837 61.3464 77.8182 62.1241C77.5867 62.4421 76.1486 63.396 74.3338 64.4351C72.6339 65.4081 70.1786 66.8167 68.8773 67.5652C67.576 68.3135 64.3394 70.1745 61.6848 71.7005C59.0302 73.2265 56.3046 74.7995 55.628 75.1961C54.9513 75.5926 53.9718 76.1115 53.4513 76.3492L52.5049 76.7813L41.0037 76.834L29.5025 76.8865L28.1929 76.4337C27.4725 76.1847 26.3229 75.6692 25.6381 75.2885L24.3928 74.5961L24.4424 67.5015L24.492 60.4072L28.7507 59.3346C31.093 58.7448 33.3927 58.2583 33.8612 58.2538C34.6613 58.246 36.7017 58.7555 47.3945 61.633C49.7888 62.2773 52.7767 63.0717 54.0345 63.3984C56.654 64.0788 57.145 64.3417 57.6087 65.3132C58.1168 66.3778 57.9207 67.5317 57.0916 68.3558C56.1475 69.2948 55.2929 69.3486 52.6813 68.6338C51.5432 68.3221 49.4623 67.762 48.0569 67.3886C46.6515 67.0154 43.9345 66.287 42.019 65.77C38.2439 64.7513 37.5742 64.6666 37.0465 65.1416C36.6471 65.5009 36.5873 66.4916 36.9369 66.9514C37.1961 67.2923 37.4877 67.3777 47.3712 70.0083C53.9553 71.7609 55.2256 71.9943 56.5734 71.6999C58.6324 71.2503 60.2726 69.3968 60.5117 67.2495L60.6438 66.0621L62.7258 64.8642C70.9997 60.1038 74.5952 58.0704 74.884 57.9888C75.41 57.8397 76.6895 58.0458 77.1672 58.3567ZM10.9588 67.465V75.558H6.88932H2.81987V67.465V59.3721H6.88932H10.9588V67.465ZM16.6323 73.4406C16.0579 74.1643 16.1663 76.0055 16.814 76.5271C17.4083 77.0055 18.0799 76.9635 18.633 76.4134C19.2574 75.7927 19.2966 74.1664 18.7053 73.419C18.1549 72.723 17.1939 72.7332 16.6323 73.4406Z"
        fill="#2998FF"
      />
    </svg>
  );
};
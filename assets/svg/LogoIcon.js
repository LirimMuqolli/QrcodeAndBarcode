import React from "react";
import { View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

const LogoIcon = () => {
  return (
    <View>
      <Svg
        width="100"
        height="19"
        viewBox="0 0 100 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M75.9148 12.6896L79.012 12.3885C79.1985 13.428 79.5749 14.1916 80.1413 14.6791C80.7148 15.1667 81.4855 15.4104 82.4534 15.4104C83.4787 15.4104 84.2494 15.1953 84.7656 14.7652C85.289 14.3278 85.5507 13.8188 85.5507 13.238C85.5507 12.8652 85.4396 12.5498 85.2173 12.2917C85.0022 12.0264 84.6222 11.797 84.0773 11.6034C83.7045 11.4743 82.8549 11.2449 81.5286 10.9151C79.8222 10.4921 78.6249 9.97231 77.9366 9.35573C76.9687 8.48821 76.4848 7.4307 76.4848 6.18319C76.4848 5.3802 76.7106 4.63098 77.1623 3.93554C77.6212 3.23292 78.2772 2.69879 79.1303 2.33314C79.9907 1.96749 81.0267 1.78467 82.2384 1.78467C84.2172 1.78467 85.7048 2.21843 86.7014 3.08594C87.7051 3.95346 88.2321 5.11134 88.2823 6.5596L85.099 6.6994C84.9628 5.88924 84.6688 5.30851 84.2172 4.9572C83.7726 4.59872 83.1023 4.41948 82.2061 4.41948C81.2812 4.41948 80.5571 4.60948 80.0337 4.98946C79.6967 5.23323 79.5283 5.55944 79.5283 5.96811C79.5283 6.34092 79.686 6.65997 80.0014 6.92524C80.4029 7.26221 81.378 7.61352 82.9266 7.97917C84.4753 8.34482 85.6188 8.7248 86.3573 9.11913C87.1029 9.50629 87.6836 10.0404 88.0995 10.7215C88.5225 11.3955 88.734 12.2307 88.734 13.2273C88.734 14.1307 88.483 14.9767 87.9812 15.7653C87.4793 16.554 86.7695 17.1419 85.8518 17.529C84.9341 17.909 83.7906 18.099 82.4212 18.099C80.428 18.099 78.8973 17.6402 77.8291 16.7225C76.7608 15.7976 76.1227 14.4533 75.9148 12.6896Z"
          fill="#0070C0"
        />
        <Path
          d="M75.0223 17.8191H71.5594L70.1828 14.2379H63.8808L62.5795 17.8191H59.2026L65.3434 2.05322H68.7095L75.0223 17.8191ZM69.1612 11.5816L66.9888 5.73121L64.8594 11.5816H69.1612Z"
          fill="#0070C0"
        />
        <Path
          d="M47.7493 17.8191V2.05322H52.8576C54.7934 2.05322 56.0552 2.13209 56.6431 2.28982C57.5465 2.52641 58.3029 3.04262 58.9123 3.83844C59.5217 4.6271 59.8264 5.64876 59.8264 6.90343C59.8264 7.87132 59.6507 8.68507 59.2994 9.34467C58.9481 10.0043 58.5 10.5241 57.9551 10.904C57.4174 11.2769 56.869 11.5242 56.3097 11.6461C55.5498 11.7967 54.4492 11.8719 53.0081 11.8719H50.9326V17.8191H47.7493ZM50.9326 4.7203V9.19411H52.6748C53.9294 9.19411 54.7683 9.11166 55.1913 8.94676C55.6143 8.78186 55.9441 8.52375 56.1807 8.17244C56.4244 7.82114 56.5463 7.41247 56.5463 6.94645C56.5463 6.37288 56.3778 5.89969 56.0409 5.52688C55.7039 5.15406 55.2773 4.92105 54.7611 4.82784C54.3811 4.75615 53.6176 4.7203 52.4704 4.7203H50.9326Z"
          fill="#0070C0"
        />
        <Path
          d="M29.9617 10.0332C29.9617 8.42727 30.2018 7.07939 30.6822 5.98962C31.0407 5.18663 31.5282 4.46608 32.1448 3.82799C32.7686 3.1899 33.4497 2.71671 34.1881 2.40842C35.1704 1.99259 36.3031 1.78467 37.5865 1.78467C39.9094 1.78467 41.7664 2.50521 43.1572 3.94629C44.5553 5.38737 45.2543 7.39127 45.2543 9.95797C45.2543 12.5032 44.5625 14.4963 43.1788 15.9374C41.795 17.3713 39.9453 18.0883 37.6295 18.0883C35.2851 18.0883 33.421 17.3749 32.0373 15.9481C30.6535 14.5142 29.9617 12.5426 29.9617 10.0332ZM33.2417 9.92571C33.2417 11.7109 33.654 13.066 34.4785 13.9908C35.303 14.9086 36.3497 15.3674 37.6188 15.3674C38.8878 15.3674 39.9274 14.9121 40.7375 14.0016C41.5549 13.0839 41.9635 11.7109 41.9635 9.88269C41.9635 8.07596 41.5656 6.72808 40.7698 5.83906C39.9811 4.95003 38.9308 4.50552 37.6188 4.50552C36.3067 4.50552 35.2492 4.9572 34.4462 5.86056C33.6432 6.75676 33.2417 8.11181 33.2417 9.92571Z"
          fill="#0070C0"
        />
        <Path
          d="M14.7012 17.8191V2.05322H21.4011C23.086 2.05322 24.3084 2.19661 25.0684 2.4834C25.8355 2.76301 26.4485 3.26488 26.9074 3.989C27.3662 4.71313 27.5956 5.54121 27.5956 6.47326C27.5956 7.65624 27.2479 8.63488 26.5525 9.40919C25.857 10.1763 24.8174 10.6603 23.4337 10.861C24.122 11.2625 24.6884 11.7035 25.1329 12.1838C25.5846 12.6642 26.1904 13.5174 26.9504 14.7433L28.8754 17.8191H25.0684L22.7669 14.3885C21.9496 13.1625 21.3904 12.3917 21.0893 12.0763C20.7881 11.7536 20.4691 11.535 20.1321 11.4203C19.7951 11.2984 19.261 11.2374 18.5297 11.2374H17.8845V17.8191H14.7012ZM17.8845 8.72092H20.2397C21.7668 8.72092 22.7203 8.65639 23.1003 8.52734C23.4803 8.39829 23.7778 8.17603 23.9929 7.86057C24.208 7.54511 24.3156 7.15078 24.3156 6.67759C24.3156 6.14704 24.1722 5.72045 23.8854 5.39782C23.6058 5.06802 23.2079 4.86011 22.6917 4.77407C22.4335 4.73822 21.6592 4.7203 20.3687 4.7203H17.8845V8.72092Z"
          fill="#0070C0"
        />
        <Path
          d="M0 17.8191V2.05322H5.10831C7.0441 2.05322 8.30594 2.13209 8.89384 2.28982C9.79721 2.52641 10.5536 3.04262 11.163 3.83844C11.7724 4.6271 12.0771 5.64876 12.0771 6.90343C12.0771 7.87132 11.9015 8.68507 11.5502 9.34467C11.1989 10.0043 10.7508 10.5241 10.2059 10.904C9.66816 11.2769 9.11968 11.5242 8.56046 11.6461C7.80048 11.7967 6.69996 11.8719 5.25887 11.8719H3.18329V17.8191H0ZM3.18329 4.7203V9.19411H4.92549C6.18016 9.19411 7.019 9.11166 7.44201 8.94676C7.86501 8.78186 8.19481 8.52375 8.43141 8.17244C8.67517 7.82114 8.79705 7.41247 8.79705 6.94645C8.79705 6.37288 8.62857 5.89969 8.2916 5.52688C7.95463 5.15406 7.52804 4.92105 7.01183 4.82784C6.63185 4.75615 5.86829 4.7203 4.72116 4.7203H3.18329Z"
          fill="#0070C0"
        />
        <Path
          d="M94.2898 1.59961C95.0273 1.59961 95.7348 1.78491 96.4124 2.15552C97.0899 2.52238 97.6215 3.05021 98.0071 3.73901C98.3964 4.42782 98.5911 5.14844 98.5911 5.90088C98.5911 6.64958 98.4001 7.36458 98.0183 8.0459C97.6402 8.72347 97.1105 9.25317 96.4292 9.63501C95.7516 10.0131 95.0385 10.2021 94.2898 10.2021C93.5411 10.2021 92.8261 10.0131 92.1448 9.63501C91.4672 9.25317 90.9375 8.72347 90.5557 8.0459C90.1776 7.36458 89.9885 6.64958 89.9885 5.90088C89.9885 5.14844 90.1813 4.42782 90.5669 3.73901C90.9562 3.05021 91.4897 2.52238 92.1672 2.15552C92.8448 1.78491 93.5523 1.59961 94.2898 1.59961ZM94.2954 2.44189C93.7039 2.44189 93.1368 2.58976 92.594 2.8855C92.0512 3.18123 91.6226 3.60612 91.3081 4.16016C90.9974 4.71419 90.842 5.29443 90.842 5.90088C90.842 6.50358 90.9937 7.07821 91.2969 7.62476C91.6038 8.17131 92.0306 8.59806 92.5771 8.90503C93.1237 9.212 93.6965 9.36548 94.2954 9.36548C94.8981 9.36548 95.4709 9.212 96.0137 8.90503C96.5602 8.59806 96.987 8.17131 97.2939 7.62476C97.6009 7.07821 97.7544 6.50358 97.7544 5.90088C97.7544 5.29443 97.5972 4.71419 97.2827 4.16016C96.972 3.60612 96.5434 3.18123 95.9968 2.8855C95.454 2.58976 94.8869 2.44189 94.2954 2.44189ZM92.3469 8.20312V3.63794H93.2734C94.1419 3.63794 94.6286 3.64168 94.7334 3.64917C95.0404 3.67537 95.2781 3.73714 95.4465 3.83447C95.6187 3.92806 95.761 4.07406 95.8733 4.27246C95.9893 4.46712 96.0474 4.68424 96.0474 4.92383C96.0474 5.25326 95.9388 5.53589 95.7217 5.77173C95.5083 6.00382 95.2069 6.14795 94.8176 6.2041C94.9561 6.25651 95.0628 6.31453 95.1377 6.37817C95.2126 6.43807 95.3155 6.55412 95.4465 6.72632C95.4802 6.77124 95.5925 6.95654 95.7834 7.28223L96.3225 8.20312H95.177L94.7952 7.46191C94.5369 6.96403 94.3235 6.65145 94.155 6.52417C93.9866 6.39315 93.7732 6.32764 93.5149 6.32764H93.2734V8.20312H92.3469ZM93.2734 5.60889H93.6497C94.185 5.60889 94.5163 5.5883 94.6436 5.54712C94.7746 5.50594 94.8775 5.43481 94.9524 5.33374C95.0273 5.22892 95.0647 5.111 95.0647 4.97998C95.0647 4.8527 95.0273 4.7404 94.9524 4.64307C94.8813 4.54199 94.7783 4.47087 94.6436 4.42969C94.5088 4.38477 94.1775 4.3623 93.6497 4.3623H93.2734V5.60889Z"
          fill="#0070C0"
        />
      </Svg>
    </View>
  );
};

export default LogoIcon;

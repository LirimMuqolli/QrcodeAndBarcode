import React from "react";
import { View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

const BackIcon = () => {
  return (
    <View>
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M9.57 5.93018L3.5 12.0002L9.57 18.0702"
          stroke="#0070C0"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M20.4999 12H3.66992"
          stroke="#0070C0"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default BackIcon;

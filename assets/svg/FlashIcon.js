import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

const FlashIcon = () => {
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
          d="M6.15587 13.28H9.24587V20.48C9.24587 21.54 10.5659 22.04 11.2659 21.24L18.8359 12.64C19.4959 11.89 18.9659 10.72 17.9659 10.72H14.8759V3.51997C14.8759 2.45997 13.5559 1.95997 12.8559 2.75997L5.28588 11.36C4.63588 12.11 5.16587 13.28 6.15587 13.28Z"
          stroke="white"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default FlashIcon;

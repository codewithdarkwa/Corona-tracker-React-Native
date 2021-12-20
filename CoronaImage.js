import React from "react";

import { Image } from "react-native";

export const CoronaImage = () => {
  return (
    <Image
      source={require("./assets/corona.png")}
      style={{
        width: 350,
        height: 150,
        margin: 30,
      }}
    />
  );
};

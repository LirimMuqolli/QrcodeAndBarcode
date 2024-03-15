import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

const QRCodeScannerFrame = ({ isScanning }) => {
  const [backgroundColor, setBackgroundColor] = useState("red");

  useEffect(() => {
    if (isScanning) {
      setBackgroundColor("rgba(255, 255, 255, 0.2)");
    } else {
      setBackgroundColor("red");
    }
  }, [isScanning]);

  return (
    <View style={styles.container}>
      <View style={[styles.frame, { backgroundColor }]}>
        <View style={styles.cornerTopLeft} />
        <View style={styles.cornerTopRight} />
        <View style={styles.cornerBottomLeft} />
        <View style={styles.cornerBottomRight} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
  },
  frame: {
    width: 250,
    height: 250,
    overflow: "hidden",
    position: "relative",
  },
  cornerTopLeft: {
    position: "absolute",
    top: 0,
    left: 0,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    width: 30,
    height: 40,
    borderColor: "white", // White border color
  },
  cornerTopRight: {
    position: "absolute",
    top: 0,
    right: 0,
    borderTopWidth: 2,
    borderRightWidth: 2,
    width: 30,
    height: 40,
    borderColor: "white", // White border color
  },
  cornerBottomLeft: {
    position: "absolute",
    bottom: 0,
    left: 0,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    width: 30,
    height: 40,
    borderColor: "white", // White border color
  },
  cornerBottomRight: {
    position: "absolute",
    bottom: 0,
    right: 0,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    width: 30,
    height: 40,
    borderColor: "white", // White border color
  },
});

export default QRCodeScannerFrame;

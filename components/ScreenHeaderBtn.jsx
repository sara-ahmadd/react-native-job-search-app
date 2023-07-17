import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

function ScreenHeaderBtn({ icon, handlePress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image source={icon} style={styles.img} resizeMode="contain" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: 40,
    height: 40,
    borderRadius: 10,
    padding: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "90%",
    height: "90%",
  },
});

export default ScreenHeaderBtn;

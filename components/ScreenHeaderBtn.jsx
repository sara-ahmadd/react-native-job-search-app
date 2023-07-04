import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

function ScreenHeaderBtn({ icon, handlePress }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={icon} style={styles.img} resizeMode="cover" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e8e8e1",
    width: 40,
    height: 40,
    borderRadius: 10,
    padding: 2,
  },
  img: {
    width: "100%",
    height: "100%",
  },
});

export default ScreenHeaderBtn;

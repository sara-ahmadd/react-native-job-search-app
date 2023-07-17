import React from "react";
import { Linking, StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";

function ApplyBtn({ url }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => Linking.openURL(url)}>
        <Text>Apply for the job</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 10,
    marginVertical: 10,
    backgroundColor: "#f0e9d8",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ApplyBtn;

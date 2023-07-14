import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

function PopularJobCard({ job, handlePress }) {
  return (
    <TouchableOpacity style={styles.container}>
      <MaterialIcons name="work" size={24} color="black" />
      <TouchableOpacity style={styles.details}>
        <Text numberOfLines={1}>{job.title}</Text>
        <Text style={styles.companyName}>Company : {job.company}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
    gap: 5,
    alignItems: "flex-start",
    backgroundColor: "#fcfafa",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  details: {
    gap: 5,
    width: 200,
  },
  companyName: {
    fontWeight: "bold",
  },
});

export default PopularJobCard;

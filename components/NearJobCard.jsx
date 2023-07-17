import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

function NearJobCard({ job, handleNavigate }) {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      {job?.employer_logo ? (
        <Image
          source={{ uri: job.employer_logo }}
          resizeMode="contain"
          style={styles.companyImg}
        />
      ) : (
        <MaterialIcons name="work" size={24} color="black" />
      )}
      <TouchableOpacity style={styles.details}>
        <Text numberOfLines={1}>{job?.job_title}</Text>
        <Text style={styles.companyName}>{job?.job_employment_type}</Text>
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
    marginBottom: 10,
  },
  details: {
    gap: 5,
    width: 200,
  },
  companyName: {
    fontWeight: "bold",
  },
  companyImg: {
    width: 50,
    height: 50,
  },
});

export default NearJobCard;

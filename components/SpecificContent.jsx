import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SpecificContent = ({ specificData, activeTab }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.activeTabTitle}>{activeTab}</Text>
      <View style={styles.details}>
        {activeTab === "Qualifications" ||
          (activeTab === "Responsibilities" &&
            specificData &&
            specificData.map((item, index) => {
              return <Text key={index}>{item}</Text>;
            }))}
        {activeTab === "Description" && <Text>{specificData}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    columnGap: 10,
  },
  activeTabTitle: {
    fontWeight: "bold",
    fontSize: 25,
  },
  details: {
    paddingTop: 10,
    fontSize: 20,
  },
});

export default SpecificContent;

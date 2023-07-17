import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const SpecificContent = ({ data, activeTab }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.activeTabTitle}>{activeTab}</Text>
      <View style={styles.details}>
        {activeTab === "Description" ? (
          <Text>{data}</Text>
        ) : (
          data?.map((item, index) => {
            return <Text key={index + item}> * {item}</Text>;
          })
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    columnGap: 10,
  },
  activeTabTitle: {
    fontWeight: "bold",
    fontSize: 20,
    paddingHorizontal: 10,
  },
  details: {
    paddingTop: 10,
    fontSize: 20,
    paddingHorizontal: 10,
    width: "100%",
  },
});

export default SpecificContent;

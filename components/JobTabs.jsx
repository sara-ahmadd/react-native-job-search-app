import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const JobTabs = ({ tab, activeTab, setActiveTab }) => {
  return (
    <TouchableOpacity
      onPress={() => setActiveTab(tab)}
      style={styles.container(tab, activeTab)}
    >
      <Text style={styles.tabTitle(tab, activeTab)}>{tab}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: (tab, activeTab) => ({
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: tab === activeTab ? "#f0e9d8" : "transparent",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: tab === activeTab ? "#000" : "#b5b5ac",
  }),
  tabTitle: (tab, activeTab) => ({
    color: tab === activeTab ? "#000" : "#b5b5ac",
  }),
});
export default JobTabs;

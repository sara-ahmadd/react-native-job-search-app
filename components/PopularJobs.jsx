import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import PopularJobCard from "./PopularJobCard";
import { ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import useFetch from "../hooks/useFetch";

function PopularJobs() {
  const router = useRouter();
  const { jobs, error, isLoading } = useFetch("search", {
    query: "frontend developer",
    page: "1",
    num_pages: "1",
  });
  const goToJobDetails = (item) => {
    router.push(`/job-details/${item.job_id}`);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Popular Jobs</Text>
        <TouchableOpacity onPress={() => router.push(`/search/Popular Jobs`)}>
          <Text>Show All</Text>
        </TouchableOpacity>
      </View>
      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : error ? (
          <Text style={styles.error}> Somthing went wrong</Text>
        ) : (
          <FlatList
            data={jobs}
            keyExtractor={(item) => item.job_id}
            contentContainerStyle={styles.jobsList}
            renderItem={({ item }) => {
              return (
                <PopularJobCard job={item} handleNavigate={goToJobDetails} />
              );
            }}
            horizontal
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    width: "100%",
    paddingVertical: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  jobsList: {
    columnGap: 10,
    paddingVertical: 10,
  },
  error: {
    fontWeight: "bold",
    fontSize: 20,
    color: "red",
  },
});
export default PopularJobs;

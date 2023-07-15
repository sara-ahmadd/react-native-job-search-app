import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
// import useFetch from "../hooks/useFetch";
import NearJobCard from "./NearJobCard";
import useFetch from "../hooks/useFetch";

function NearJobs() {
  const router = useRouter();
  const { jobs, error, isLoading } = useFetch("search", {
    query: "react developer",
    page: "1",
    num_pages: "1",
  });
  // const jobs = [1, 2, 3, 4];
  // const isLoading = false;
  // const error = false;
  const goToJob = (id) => {
    router.push(`/job-details/${id}`);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Nearby Jobs</Text>
        <TouchableOpacity>
          <Text>Show All</Text>
        </TouchableOpacity>
      </View>
      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : error ? (
          <Text style={styles.error}> Somthing went wrong</Text>
        ) : (
          <ScrollView style={styles.jobsList}>
            {jobs?.map((job, index) => {
              return (
                <NearJobCard
                  job={job}
                  key={index}
                  handleNavigate={() => {
                    goToJob(job.job_id);
                  }}
                />
              );
            })}
          </ScrollView>
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
  jobTab: {
    marginVertical: 10,
  },
  error: {
    fontWeight: "bold",
    fontSize: 20,
    color: "red",
  },
});
export default NearJobs;

import React from "react";
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";
import useFetch from "../../hooks/useFetch";
import { useRouter, useSearchParams } from "expo-router";
import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

function JobDetails() {
  const params = useSearchParams();
  const router = useRouter();
  const { jobs, error, isLoading } = useFetch("job-details", {
    job_id: params.id,
    extended_publisher_details: "false",
  });
  const selectedJob = jobs?.filter((j) => {
    return j.job_id === params.id;
  });
  return (
    <SafeAreaView>
      {isLoading ? (
        <ActivityIndicator />
      ) : error ? (
        <Text>Somthing went wrong</Text>
      ) : (
        <View>
          <Text>JobDetails</Text>
          <View style={styles.styles}>
            {selectedJob?.employer_logo ? (
              <Image source={{ uri: selectedJob.employer_logo }} />
            ) : (
              <MaterialIcons name="work" size={24} color="black" />
            )}
            <Text>{selectedJob.job_title}</Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingHorizontal: 10,
  },
});

export default JobDetails;

import { Stack, useRouter, useSearchParams } from "expo-router";
import useFetch from "../../hooks/useFetch";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import NearJobCard from "../../components/NearJobCard";
import ScreenHeaderBtn from "../../components/ScreenHeaderBtn";
import left from "../../assets/images/left-arrow.png";

const Search = () => {
  const params = useSearchParams();
  const { jobs, error, isLoading } = useFetch("search", {
    query: params.search,
    page: "1",
    num_pages: "1",
  });
  const router = useRouter();
  const goToJob = (id) => {
    router.push(`/job-details/${id}`);
  };
  return (
    <>
      <Stack.Screen
        options={{
          headerBackVisible: false,
          headerTitle: params.search,
          headerLeft: () => {
            return (
              <ScreenHeaderBtn icon={left} handlePress={() => router.back()} />
            );
          },
        }}
      />
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
    </>
  );
};

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

export default Search;

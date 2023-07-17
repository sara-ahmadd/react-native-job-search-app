import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import useFetch from "../../hooks/useFetch";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import JobTabs from "../../components/JobTabs";
import SpecificContent from "../../components/SpecificContent";
import ScreenHeaderBtn from "../../components/ScreenHeaderBtn";
import left from "../../assets/images/left-arrow.png";
import ApplyBtn from "../../components/ApplyBtn";

function JobDetails() {
  const params = useSearchParams();
  const router = useRouter();
  const { jobs, error, isLoading } = useFetch("job-details", {
    job_id: params.id,
  });
  const tabs = ["Description", "Qualifications", "Responsibilities"];
  const [activeTab, setActiveTab] = useState("Description");
  const specificData = () => {
    switch (activeTab) {
      case "Qualifications":
        return (
          <SpecificContent
            data={
              jobs && (jobs[0].job_highlights?.Qualifications ?? ["NoData"])
            }
            activeTab={activeTab}
          />
        );
      case "Responsibilities":
        return (
          <SpecificContent
            data={
              jobs && (jobs[0].job_highlights?.Responsibilities ?? ["NoData"])
            }
            activeTab={activeTab}
          />
        );
      case "Description":
        return (
          <SpecificContent
            data={jobs && (jobs[0].job_description ?? "NoData")}
            activeTab={activeTab}
          />
        );
      default:
        return (
          <SpecificContent
            data={jobs[0].job_description ?? "NoData"}
            activeTab={activeTab}
          />
        );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerBackVisible: false,
          headerLeft: () => {
            return (
              <ScreenHeaderBtn icon={left} handlePress={() => router.back()} />
            );
          },
        }}
      />
      <ScrollView
        style={{
          width: "100%",
          paddingTop: 15,
        }}
      >
        {isLoading ? (
          <ActivityIndicator />
        ) : error ? (
          <Text>Somthing went wrong</Text>
        ) : (
          <>
            <View>
              <View style={styles.title}>
                {jobs && jobs[0].employer_logo ? (
                  <Image
                    source={{ uri: jobs[0].employer_logo }}
                    style={styles.companyImg}
                    resizeMethod="contain"
                  />
                ) : (
                  <MaterialIcons name="work" size={24} color="black" />
                )}
                <Text style={styles.titleText}>
                  {jobs ? jobs[0].job_title : `Job Title `}
                </Text>
                <View>
                  <Text style={styles.companyName}>
                    {jobs ? jobs[0].employer_name : `Company Name`} /
                    {jobs ? jobs[0].job_country : `Location`}
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <FlatList
                data={tabs}
                renderItem={({ item }) => {
                  return (
                    <JobTabs
                      tab={item}
                      activeTab={activeTab}
                      setActiveTab={setActiveTab}
                    />
                  );
                }}
                contentContainerStyle={{
                  flexDirection: "row",
                  gap: 20,
                  paddingTop: 30,
                  width: "100%",
                  flex: 1,
                  justifyContent: "center",
                }}
              />
              {specificData()}
            </View>
          </>
        )}
      </ScrollView>
      <ApplyBtn
        url={
          jobs &&
          (jobs[0].job_google_link ?? `https://careers.google.com/jobs/results`)
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    alignItems: "center",

    flex: 1,
  },
  title: {
    gap: 5,
    alignItems: "center",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 25,
  },
  companyName: {
    fontSize: 20,
  },
  companyImg: {
    width: 80,
    height: 50,
  },
});

export default JobDetails;

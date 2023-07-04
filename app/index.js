import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { SplashScreen, Stack } from "expo-router";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn";
import WelcomeScreen from "../components/WelcomeScreen";
import PopularJobs from "../components/PopularJobs";
import NearJobs from "../components/NearJobs";
import menu from "./../assets/images/menu.png";
import user from "./../assets/images/user.png";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#bcbdb7",
          },
          headerShadowVisible: true,
          headerLeft: () => {
            return <ScreenHeaderBtn icon={menu} />;
          },
          headerRight: () => {
            return <ScreenHeaderBtn icon={user} />;
          },
          headerTitle: "",
        }}
      />
      <ScrollView>
        <View style={styles.container}>
          <WelcomeScreen />
          <PopularJobs />
          <NearJobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0e9d8",
    paddingTop: 20,
  },
});

export default App;

import React, { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import search from "./../assets/images/search.png";

function WelcomeScreen() {
  const [text, onChangeText] = useState("");
  const [jobTypes, setJobTypes] = useState([
    "Full Time",
    "Part Time",
    "Contractor",
  ]);
  const [activeJOB, setActiveJOB] = useState("Full Time");

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.welcomeMsg}>Hello User</Text>
        <Text style={styles.findJob}>Find Your Job</Text>
      </View>
      <View style={styles.inputData}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={onChangeText}
          placeholder="What are you lookink for?"
          placeholderTextColor={"#bdbdb7"}
        />

        <TouchableOpacity style={styles.imgContainer}>
          <Image source={search} style={styles.img} resizeMode="contain" />
        </TouchableOpacity>
      </View>
      <View style={styles.jobTypes}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={styles.jobTab(activeJOB, item)}
                onPress={() => setActiveJOB(item)}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingHorizontal: 10,
  },
  welcomeMsg: {
    fontFamily: "DMSans",
    fontSize: 20,
  },
  findJob: {
    fontSize: 25,
    fontFamily: "DMSansBold",
  },
  input: {
    width: "60%",
    backgroundColor: "#e8e8e1",
    height: 40,
    borderRadius: 10,
    padding: 10,
    flex: 2,
  },
  imgContainer: {
    width: "10%",
    paddingLeft: 5,
  },
  img: {
    width: 20,
    height: 20,
  },
  inputData: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  jobTypes: {
    padding: 5,
    justifyContent: "center",
  },
  jobTab: (activeJob, item) => ({
    width: "70%",
    borderRadius: 20,
    padding: 7,
    backgroundColor: "#cfcfcc",
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: activeJob === item ? "#333" : "transparent",
  }),
});
export default WelcomeScreen;

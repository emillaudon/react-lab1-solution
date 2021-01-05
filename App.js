import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";

export default function App() {
  let inputText = 'Type something';
  const image =
    "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/thumbs-up.png";

  const buttonPressed = () => console.log(inputText);

  return (
    <View style={styles.container}>
      <View style={styles.top} />
      <View style={styles.headlineBox}>
        <Text style={styles.headline}>Hello World!</Text>
        <Text style={{ fontSize: 24, fontWeight: "500" }}>
          First React Native App
        </Text>
        <Text style={{ fontSize: 14 }}>
          This is a paragraph explaining what this app is all about. As you can
          see there are already many components including text, images and
          buttons.
        </Text>
      </View>

      <View style={styles.inputBox}>
        <Text style={{ width: "90%", fontSize: 22, fontWeight: "bold" }}>
          What would you like to get out of this course?
        </Text>
        <TextInput
          style={{
            height: "40%",
            backgroundColor: "#F2F2F2",
            textAlignVertical: "top",
          }}
          placeholder="Initial Text"
          multiline={true}
          onChangeText={(text) => inputText = text}
        />
      </View>

      <View style={styles.emojiBox}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>
          An emoji describing how you are feeling about the course:
        </Text>
        <Image source={{ uri: image }} style={{ height: 100, width: 100 }} />
      </View>

      <Button title="Submit" onPress={buttonPressed} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    backgroundColor: "white",
  },
  top: {
    backgroundColor: "#24305E",
    width: "100%",
    height: "5%",
    justifyContent: "center",
  },
  headlineBox: {
    backgroundColor: "#A8D1E7",
    width: "100%",
    height: "18%",
    justifyContent: "center",
  },
  headline: { 
    fontSize: 30, 
    fontWeight: "bold" },
  inputBox: { 
    height: "25%", 
    width: "70%", 
    justifyContent: "center" },
  emojiBox: { 
    height: "17%", 
    width: "70%", 
    justifyContent: "center" },
});

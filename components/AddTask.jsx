import React from "react";
import { View, StyleSheet, TextInput, Text, Image } from "react-native";

const MyComponent = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}></View>
      <View style={styles.footer}>
        <TextInput
          style={styles.inputWrapper}
          onChangeText={props.onChange}
          value={props.value}
          placeholder="Write a Task"
        />
        <View style={styles.addWrapper} onPress= {props.onPress} >
          <Text style={styles.addText}>+</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginLeft: 20,
    marginRight: 29,
  },
  content: {
    flex: 1,
  },
  footer: {
    height: 50,
    width: "100%",
    height: 50,
    
    alignItems: "center",
    position: "absolute",
    bottom: 37,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  inputWrapper: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    color: "#C0C0C0",
    textAlign: "center",
    borderWidth: 1,
    width: 250,
    fontSize: 14,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {
    width: 32,
    height: 32,
    alignContent: "center",
    color: "#c0c0c0",
    fontSize: 30,
    textAlign: "center",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default MyComponent;

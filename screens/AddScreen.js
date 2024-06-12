import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useTasks } from "../context/taskContext";

export default function AddScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { taskItems, setTaskItems } = useTasks();

  const handleAddTask = () => {
    Keyboard.dismiss();
    if (title || content) {
      const newTask = { id: Date.now(), title, content, done: false };
      setTaskItems([...taskItems, newTask]);
      navigation.goBack();
    } else {
      alert("You must write a new task");
    }
  };

  return (
    <View>
      <Image
        source={require("../assets/images/progress.png")}
        style={styles.taskLogo}
      />
      <View style={styles.textContainer}>
        <Text type="subtitle" style={styles.subtitle}>
          Add new task
        </Text>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          value={title}
          placeholder="Write your task title"
          onChangeText={setTitle}
        />

        <TextInput
          style={styles.textInput}
          value={content}
          placeholder="Write your task"
          onChangeText={setContent}
          multiline
          textBreakStrategy="highQuality"
        />

        <TouchableOpacity
          onPress={handleAddTask}
          style={styles.addBtn}
          title="Create task"
        >
          <Text style={styles.addBtnText}>Create task</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      <TouchableOpacity onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    //position: "relative",
  },
  writeTaskWrapper: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    height: 40,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    borderRadius: 2,
    backgroundColor: "#fff",
    marginBottom: 16,
    paddingHorizontal: 8,
    width: "80vw",
    maxWidth: 500,
  },
  textInput: {
    height: 120,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    borderRadius: 2,
    backgroundColor: "#fff",
    marginBottom: 16,
    paddingHorizontal: 8,
    width: "80vw",
    maxWidth: 500,
    textAlignVertical: 'top',
    flexWrap: 'wrap',
  },
  addBtn: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    backgroundColor: "#d40da3",
    borderColor: "#000",
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  addBtnText: {
    color: "#fff",
    fontWeight: 700,
    fontSize: 20,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  taskLogo: {
    height: 250,
    width: "100%",
  },
  buttonContainer: {
    marginVertical: 5,
    width: "70%",
    borderRadius: 5,
    overflow: "hidden",
    borderColor: "gray",
    borderWidth: 1,
  },
});

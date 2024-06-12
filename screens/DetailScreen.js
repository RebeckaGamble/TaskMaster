import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useTasks } from "../context/taskContext";

export default function DetailScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { taskItems, setTaskItems } = useTasks();

  const task = route.params?.task;
  //console.log("from detail task", task);

  const [title, setTitle] = useState(task.title);
  const [content, setContent] = useState(task.content);
  const [isDone, setIsDone] = useState(task.done);

  const handleUpdateTask = () => {
    const updatedTasks = taskItems.map((item) =>
      item.id === task.id ? { ...item, title, content } : item
    );
    setTaskItems(updatedTasks);
    navigation.goBack();
  };

  const handleMarkAsDone = () => {
    const updatedTasks = taskItems.map((item) =>
      item.id === task.id ? { ...item, done: true } : item
    );
    setTaskItems(updatedTasks);
    setIsDone(true);
    navigation.navigate("Home", { task });
  };

  const deleteTask = (id) => {
    setTaskItems(taskItems.filter((task) => task.id !== id));
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/tidy.png")}
        style={styles.taskLogo}
      />
      <View style={styles.textContainer}>
        <Text style={styles.subtitle}>Stay on Track with Your Tasks! </Text>
        <Text style={styles.normalText}>
          Remember to stay on top of your tasks and mark them as done as you
          complete them. Not only does it help you keep track of your progress,
          but there's also something incredibly satisfying about checking off
          each item on your list. Keep going—you've got this!
        </Text>
      </View>

      <View style={styles.editContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
            placeholder="Task Title"
            editable={!isDone}
          />
          <TextInput
            style={styles.textInput}
            value={content}
            onChangeText={setContent}
            placeholder="Task Content"
            multiline
            editable={!isDone}
          />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.editBtn} onPress={handleUpdateTask}>
            <Text style={styles.btnText}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.doneBtn} onPress={handleMarkAsDone}>
            <MaterialIcons name="done" size={26} style={styles.icon} />
            <Text style={styles.btnText}> Done </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deleteBtn}
            onPress={() => deleteTask(task.id)}
          >
            <FontAwesome name="trash-o" size={26} style={styles.icon} />
            <Text style={styles.btnText}> Delete </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 16,
  },
  editContainer: {
    padding: 15,
    borderRadius: 10,
    justifyContent: "space-between",
    marginBottom: 20,
    flexDirection: "column",
    alignItems: "center",
    width: "90vw",
    maxWidth: 540,
    gap: 4,
  },
  inputContainer: {
    flexDirection: "column",
    gap: 4,
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
    textAlignVertical: "top",
    flexWrap: "wrap",
  },
  btnContainer: {
    justifyContent: "space-evenly",
    marginBottom: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  editBtn: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    backgroundColor: "#d40da3",
    borderColor: "#000",
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  deleteBtn: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    backgroundColor: "red",
    borderColor: "#000",
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  doneBtn: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    backgroundColor: "green",
    borderColor: "#000",
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  btnText: {
    color: "#fff",
    fontWeight: 700,
    fontSize: 20,
  },
  icon: {
    fontSize: 20,
    color: "#fff",
  },
  normalText: {
    fontSize: 16,
  },
  taskLogo: {
    height: 250,
    width: "100%",
  },
});

import {
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  View,
  SectionList,
  FlatList,
} from "react-native";
import React from "react";
import { useTasks } from "../context/taskContext";
import TaskCard from "../components/TaskCard";

export default function HomeScreen({ navigation }) {
  const { taskItems, setTaskItems } = useTasks();

  const notDone = taskItems.filter((task) => !task.done);
  const doneTasks = taskItems.filter((task) => task.done);

  const goToDetail = (task) => {
    navigation.navigate("Detail", { task });
  };

  const deleteTask = (id) => {
    setTaskItems(taskItems.filter((task) => task.id !== id));
  };

  const renderItem = ({ item }) => (
    <TaskCard
      title={item.title}
      text={item.content}
      onPressDelete={() => deleteTask(item.id)}
      onPressInfo={() => goToDetail(item)}
      done={item.done}
    />
  );

  const renderDoneItem = ({ item }) => (
    <TaskCard
      title={item.title}
      text={item.content}
      onPressDelete={() => deleteTask(item.id)}
      onPressInfo={() => goToDetail(item)}
      done={item.done}
    />
  );

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/do_this_week.png")}
        style={styles.taskLogo}
      />

      <View style={styles.textContainer}>
        <Text type="title" style={styles.title}>
          <Text style={styles.title} type="title">
            Conquer Your Tasks!
          </Text>
        </Text>
        <Text style={styles.normalText}>
          Welcome! This is your space to create and save your tasks. By writing
          down your tasks, you'll have a clear view of what needs to be done,
          helping you stay organized and productive. Start now and watch your
          productivity soar!
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("Add")}
        style={styles.addBtn}
        title="Add new task"
      >
        <Text style={styles.addBtnText}>Add new task</Text>
      </TouchableOpacity>
      <View style={styles.taskContainer}>
        <Text style={styles.subtitle}>Your tasks:</Text>
        {taskItems.length === 0 ? (
          <View>
            <Text style={styles.normalText}>You have no tasks!</Text>
          </View>
        ) : (
          <>
            <FlatList
              data={notDone}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={styles.items}
            />
          </>
        )}
      </View>
      <View style={styles.doneContainer}>
        <Text style={styles.subtitle}>Your completed tasks:</Text>
        {doneTasks.length === 0 ? (
          <Text style={styles.normalText}>You have no completed tasks!</Text>
        ) : (
          <SectionList
            sections={[{ data: doneTasks }]}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderDoneItem}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.sectionHeader}>{title}</Text>
            )}
          />
        )}
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
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
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
  items: {
    width: "100%",
  },
  taskLogo: {
    height: 250,
    width: "100%",
  },
  taskContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 16,
  },
  doneContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 16,
    borderTopColor: "gray",
    borderTopWidth: 2,
    width: "80%",
  },
  normalText: {
    fontSize: 16,
  },
});

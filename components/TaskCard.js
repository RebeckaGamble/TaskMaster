import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TaskCard({ title, text, onPressDelete, onPressInfo, done }) {

  const wrapText = (inputText) => {
    const maxLength = 24; 
    return inputText
      .split(" ")
      .map((word) =>
        word.length > maxLength
          ? word.match(new RegExp(`.{1,${maxLength}}`, "g")).join("\u200B")
          : word
      )
      .join(" ");
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemLeft}>
        <TouchableOpacity onPress={onPressInfo}>
          <Ionicons
            name="information-circle-outline"
            size={26}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.textContainer}>
      <Text style={[styles.heading, done && styles.lineThrough]}>{title}</Text>
        <Text style={[styles.content, done && styles.lineThrough]}>{wrapText(text)}</Text>
      </View>

      <View style={styles.itemRight}>
        <TouchableOpacity onPress={onPressDelete}>
          <FontAwesome name="trash-o" size={26} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    justifyContent: "space-between",
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    width: "90vw",
    maxWidth: 540,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    width: "10%",
  },
  itemRight: {
    flexDirection: "row",
    alignItems: "center",
    width: "10%",
  },
  icon: {
    color: "#d40da3",
  },
  textContainer: {
    paddingHorizontal: 10,
    width: "80%",
    flexWrap: "wrap",
    flexDirection: "column",
  },
  heading: {
    fontWeight: 700,
    fontSize: 18,
    paddingBottom: 4,
  },
  content: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  lineThrough: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
});

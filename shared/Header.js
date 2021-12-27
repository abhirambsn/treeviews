import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation, title }) {
  return (
    <View style={styles.header}>
      <View style={styles.headerTitleContainer}>
          <Image source={require('../assets/logo.png')} style={styles.headerImage} />
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: 10,
  },
  headerTitleContainer: {
      flexDirection: 'row'
  },
  headerImage: {
      width: 26,
      height: 26,
  }
});

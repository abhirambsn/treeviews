import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { global } from "../styles/global";

export default function About() {
  return (
    <View style={global.container}>
      <Text style={global.title}>About Screen</Text>
    </View>
  );
}

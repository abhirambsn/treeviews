import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Card from "../components/Card";
import ReviewRating from "../components/ReviewRating";
import { global } from "../styles/global";

export default function ReviewDetail({ navigation }) {
  const rating = navigation.getParam("rating");
  return (
    <View style={global.container}>
      <Card>
        <Text>{navigation.getParam("title")}</Text>
        <Text>{navigation.getParam("body")}</Text>
        <View style={styles.rating}>
          <ReviewRating rating={rating} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});

import React from "react";
import { StyleSheet, View } from "react-native";
import { Rating } from "react-native-ratings";

export default function ReviewRating({ rating }) {
  return (
    <View>
      <Rating
        startingValue={rating}
        fractions={1}
        imageSize={20}
        type="heart"
        showRating
        ratingColor="red"
        readonly
      />
    </View>
  );
}

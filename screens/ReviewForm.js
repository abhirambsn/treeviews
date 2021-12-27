import React from "react";
import { Text, View, TextInput } from "react-native";
import { global } from "../styles/global";
import { Formik } from "formik";
import * as yup from "yup";
import FlatButton from "../components/Button";

const ReviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test(
      "is_number_in_range",
      "Rating Must be a number between 1 - 5",
      (val) => {
        return parseFloat(val) < 6 && parseFloat(val) > 0;
      }
    ),
});

export default function ReviewForm({ addReview }) {
  return (
    <View style={global.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={ReviewSchema}
        onSubmit={(values) => {
          addReview(values);
        }}
      >
        {(formProps) => (
          <View>
            <TextInput
              style={global.input}
              placeholder="Review Title"
              onChangeText={formProps.handleChange("title")}
              value={formProps.values.title}
              onBlur={formProps.handleBlur("title")}
            />
            <Text style={global.errorText}>
              {formProps.touched.title && formProps.errors.title}
            </Text>

            <TextInput
              style={global.input}
              placeholder="Review Body"
              onChangeText={formProps.handleChange("body")}
              value={formProps.values.body}
              onBlur={formProps.handleBlur("body")}
              multiline
            />
            <Text style={global.errorText}>
              {formProps.touched.body && formProps.errors.body}
            </Text>

            <TextInput
              style={global.input}
              placeholder="Rating"
              onChangeText={formProps.handleChange("rating")}
              value={formProps.values.rating}
              onBlur={formProps.handleBlur("rating")}
              keyboardType="numeric"
            />
            <Text style={global.errorText}>
              {formProps.touched.rating && formProps.errors.rating}
            </Text>

            <FlatButton text="Submit" onPress={formProps.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}

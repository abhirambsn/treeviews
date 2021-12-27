import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/About";
import Header from "../shared/Header";
import React from "react";
import { TouchableOpacity } from "react-native";
import { DrawerActions } from "react-navigation-drawer";
import { MaterialIcons } from "@expo/vector-icons";

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="About" />,
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          >
            <MaterialIcons name="menu" size={28} style={{ marginLeft: 10 }} />
          </TouchableOpacity>
        ),
      };
    },
  },
};

const AboutStack = createStackNavigator(screens);

export default AboutStack;

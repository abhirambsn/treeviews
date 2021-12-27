import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home";
import ReviewDetail from "../screens/Detail";
import Header from "../shared/Header";
import React from "react";
import { TouchableOpacity } from "react-native";
import { DrawerActions } from "react-navigation-drawer";
import { MaterialIcons } from "@expo/vector-icons";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Treeview" />,
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          >
            <MaterialIcons name="menu" size={28} style={{marginLeft: 10}} />
          </TouchableOpacity>
        ),
      };
    },
  },
  ReviewDetails: {
    screen: ReviewDetail,
    navigationOptions: {
      title: "Review Details",
    },
  },
};
const HomeStack = createStackNavigator(screens);

export default HomeStack;

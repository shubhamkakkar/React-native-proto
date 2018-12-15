import React from "react";
import { TabNavigator, TabBarTop } from "react-navigation";
import { Icon } from "react-native-elements";
import FeedPage from "./Feed/FeedPage.js";
import SearchPage from "./Search/SearchPage.js";
import AddPage from "./Add/AddPage.js";
import SavedPage from "./Saved/SavedPage.js";
import ProfilePage from "./Profile/ProfilePage.js";

const Tabs = TabNavigator(
  {
    Feed: {
      screen: FeedPage,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            size={29}
            name="newspaper-o"
            type="font-awesome"
            color="#000000"
          />
        )
      }
    },
    Search: {
      screen: SearchPage,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon size={29} name="search" type="feather" color="#000000" />
        )
      }
    },
    Add: {
      screen: AddPage,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            size={38}
            containerStyle={{ zIndex: 10000 }}
            name="add-circle-outline"
            color="#000000"
          />
        )
      }
    },
    Saved: {
      screen: SavedPage,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon size={29} name="inbox" type="feather" color="#000000" />
        )
      }
    },

    Profile: {
      screen: ProfilePage,

      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon size={29} name="user-o" type="font-awesome" color="#000000" />
        )
      }
    }
  },
  {
    tabBarComponent: TabBarTop,

    tabBarPosition: "bottom",
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      activeTintColor: "#000000",
      inactiveTintColor: "#8e8e8e",
      style: {
        elevation: 15,
        backgroundColor: "#fff",
        height: "8.5%"
      },
      iconStyle: {
        position: "relative",
        width: "100%",
        height: 32
      },
      indicatorStyle: {
        backgroundColor: "#000"
      }
    }
  }
);

export default Tabs;

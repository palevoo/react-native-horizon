import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import faker from "faker";
import times from "lodash/times";

import FoodItem from "./components/FoodItem";
import SlideMe from "./components/SlideMe";
import { data } from "./utils";

export default class App extends React.Component {
  state = {
    data: data
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Kitchenete</Text>
        {this.state.data.length < 1 ? (
          <Text>LOADING...</Text>
        ) : (
          <SlideMe data={this.state.data} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  header: {
    backgroundColor: "#35D788",
    padding: 20,
    paddingTop: 40,
    width: Dimensions.get("window").width
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    width: Dimensions.get("window").width,
    borderBottomWidth: 1,
    borderBottomColor: "#404040"
  },
  info: {
    paddingLeft: 10,
    flexDirection: "column"
  }
});

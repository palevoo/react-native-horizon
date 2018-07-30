/* @flow */

import React, { Component } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

export default class Dot extends Component {
  render() {
    const { handleItem, id } = this.props;
    return (
      <TouchableOpacity onPress={() => handleItem(id)}>
        <View style={styles.dot} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  dot: {
    backgroundColor: "#404040",
    width: 7,
    height: 7,
    padding: 0,
    margin: 10,
    borderRadius: 7
  }
});

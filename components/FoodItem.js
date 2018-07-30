/* @flow */

import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

import CustomButton from "Button";

export default class FoodItem extends Component {
  render() {
    const {
      category,
      color,
      city,
      name,
      description,
      id,
      index,
      title,
      imageUrl,
      price,
      onPressItem
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={[styles.color, { backgroundColor: color }]}>
          <Image source={{ uri: imageUrl }} style={styles.foodImage} />
        </View>
        <View style={styles.text}>
          <Text>{city}</Text>
          <CustomButton title={`${price}₽`} onPress={this._onPress} />
        </View>
      </View>
    );
  }

  _onPress = () => {
    onPressItem(id);
  };
}

const styles = StyleSheet.create({
  container: {
    padding: 60,
    paddingTop: 0,
    marginTop: 0,
    width: Dimensions.get("window").width,
    flexDirection: "column",
    alignItems: "center"
  },
  color: {
    width: Dimensions.get("window").width,
    zIndex: 1,
    alignItems: "center"
  },
  foodImage: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    margin: 20,
    marginBottom: -20,
    zIndex: 2,
    borderRadius: Dimensions.get("window").width * 0.35
  },
  text: {
    width: Dimensions.get("window").width,
    flexDirection: "row",
    backgroundColor: "#fafafa",
    padding: 40,
    justifyContent: "space-between",
    alignItems: "center"
  }
});

/* @flow */

import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import FoodItem from "./FoodItem";

export default class SlideMe extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          centerContent
          pagingEnabled
          style={styles.container}
          data={this.props.data}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }

  _logger = (id: String) => {
    console.log(id);
  };
  _renderItem({ item }) {
    return (
      <FoodItem
        key={item.id}
        color={item.color}
        id={item.id}
        imageUrl={item.image}
        onPressItem={this._logger}
        price={item.price}
        city={item.city}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});

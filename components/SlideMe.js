/* @flow */

import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";

import FoodItem from "./FoodItem";
import NavBar from "./NavBar";
import Paginate from "./Paginate";

const { width, height } = Dimensions.get("window");
const DEFAULT_CAT = "Breakfast";

export default class SlideMe extends Component {
  state = {
    activeCategory: "",
    data: this.props.data,
    filteredByCategory: []
  };
  componentDidMount() {
    this.setState(() => ({
      activeCategory: DEFAULT_CAT,
      filteredByCategory: this._filterByCategory(this.state.data, DEFAULT_CAT)
    }));
  }
  render() {
    return (
      <View style={styles.container}>
        <NavBar handleCategory={this._handleCategory} />
        <Paginate
          items={this.state.filteredByCategory}
          handleItem={this._handleItem}
        />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          // style={styles.container}
          data={this.state.filteredByCategory}
          // ref={r => (this.refs = r)}
          keyExtractor={this._keyExtractor}
          // onViewableItemsChanged={this.onViewableItemsChanged} // Map your keys to whatever unique ids the have (mine is a "id" prop)
          renderItem={this._renderItem}
        />
      </View>
    );
  }

  _filterByCategory = (data, category) => {
    return data.filter(el => el.category === category);
  };
  _handleCategory = category => {
    this.setState(() => ({
      activeCategory: category,
      filteredByCategory: this._filterByCategory(this.state.data, category)
    }));
  };
  _handleItem = item => {
    console.log("PARENTO", item);
  };
  _keyExtractor = (item: Object, index: Number) => {
    return item.id;
  };
  _logger = (id: String) => {
    console.log(id);
  };
  _renderItem({ item }) {
    return (
      <FoodItem
        index={item.id}
        category={item.category}
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
  container: {
    flex: 1,
    width,
    height: height / 2
  }
});

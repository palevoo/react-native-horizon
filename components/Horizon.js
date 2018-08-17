/* @flow */

import React, { Component } from 'react'
import { View, StyleSheet, FlatList, Dimensions } from 'react-native'
// import propTypes from 'prop-types'

import ListItem from './ListItem'
import NavBar from './NavBar'
import Paginate from './Paginate'

const { width, height } = Dimensions.get('window')

const DEFAULT_CAT = 'Breakfast'

export default class Horizon extends Component {
  state = {
    activeCategory: DEFAULT_CAT,
    data: this.props.data,
    filteredByCategory: []
  }

  componentDidMount () {
    this._handleCategory(DEFAULT_CAT)
  }

  render () {
    return (
      <View style={styles.container}>
        <NavBar
          handleCategory={this._handleCategory}
          activeCategory={this.state.activeCategory}
        />
        <Paginate
          items={this.state.filteredByCategory}
          handleItem={this._handleItem}
        />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          data={this.state.filteredByCategory}
          // ref={r => (this.refs = r)}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          onViewableItemsChanged={this._onViewableItemsChanged}
        />
      </View>
    )
  }

  _filterByCategory = (data, category) => {
    return data.filter(el => el.category === category)
  }
  _onViewableItemsChanged = (item, changed) => {
    console.log('ITEM', item)
    console.log('changed', changed)
  }
  _handleCategory = category => {
    this.setState(() => ({
      activeCategory: category,
      filteredByCategory: this._filterByCategory(this.state.data, category)
    }))
  }
  _handleItem = item => {
    console.log('PARENTO', item)
  }
  _keyExtractor = (item: Object, index: Number) => {
    return item.id
  }

  _renderItem ({ item }) {
    return (
      <ListItem
        index={item.id}
        category={item.category}
        color={item.color}
        id={item.id}
        imageUrl={item.image}
        price={item.price}
        city={item.city}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height: height / 2
  }
})

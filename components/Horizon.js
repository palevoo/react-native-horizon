/* @flow */

import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  SectionList
} from 'react-native'
// import propTypes from 'prop-types'

import ListItem from './ListItem'
import NavBar from './NavBar'
import Paginate from './Paginate'
import { CATEGORIES } from '../utils'

const { width, height } = Dimensions.get('window')

const DEFAULT_CAT = 'Breakfast'

export default class Horizon extends Component {
  state = {
    activeCategory: DEFAULT_CAT,
    data: this.props.data,
    filteredByCategory: [],
    activeItem: ''
  }

  componentDidMount() {
    this._handleCategory(DEFAULT_CAT)
  }

  render() {
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
        <SectionList
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          sections={this._getSortedSections(CATEGORIES, this.state.data)}
          ref={r => (this.horizonList = r)}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          onScrollToIndexFailed={() => {}}
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
    this._navigateToCategory(category)
    this.setState(() => ({
      activeCategory: category,
      filteredByCategory: this._filterByCategory(this.state.data, category)
    }))
  }
  _navigateToCategory = category => {
    this.horizonList.scrollToLocation({
      animated: true,
      itemIndex: 0,
      sectionIndex: CATEGORIES.indexOf(category),
      viewPosition: 0
    })
  }
  _handleItem = item => {
    console.log('PARENTO', item)
  }
  _keyExtractor = (item: Object, index: Number) => {
    return item.id
  }

  _getSortedSections = (categories, data) => {
    let res = []
    categories.forEach((el, i) => {
      res.push({ section: el, data: [] })
      data.map(item => {
        if (item.category === res[i]['section']) {
          res[i]['data'].push(item)
        }
      })
    })
    return res
  }

  _renderItem({ item, index, section }) {
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

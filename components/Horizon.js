/* @flow */

import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, SectionList } from 'react-native'
// import propTypes from 'prop-types'
// import throttle from 'lodash/throttle'

import ListItem from './ListItem'
import NavBar from './NavBar'
import Paginate from './Paginate'
import { CATEGORIES } from '../utils'

const { width, height } = Dimensions.get('window')

const DEFAULT_CAT = 'Autobots'

export default class Horizon extends Component {
  state = {
    activeCategory: DEFAULT_CAT,
    categories: CATEGORIES,
    data: this.props.data,
    filteredByCategory: [],
    activeItem: 0,
    list: {},
    index: null
  }

  componentDidMount () {
    // this._handleCategory(DEFAULT_CAT)
  }

  render () {
    return (
      <View style={styles.container}>
        <NavBar
          activeCategory={this.state.activeCategory}
          highlightSection={this._hightlightActiveSection}
          navigateToSection={this._navigateToCategory}
          categories={this.state.categories}
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
          initialNumToRender={3}
        />
        <Paginate
          items={this.state.filteredByCategory}
          handleItem={this._handleItem}
          activeItem={this.state.activeItem}
        />
      </View>
    )
  }

  _filterByCategory = (data, category) => {
    return data.filter(el => el.category === category)
  }
  _onViewableItemsChanged = item => {
    let prevSection = this.state.activeCategory
    let currentSection = item.viewableItems[0].section.section
    if (prevSection !== currentSection) {
      this._hightlightActiveSection(
        currentSection,
        CATEGORIES.indexOf(currentSection),
        this.state.list
      )
    }
    let activeItem = item.viewableItems[0].item.id
    // throttle(() => {
    this.setState(() => ({
      activeCategory: currentSection,
      activeItem: activeItem,
      filteredByCategory: this._filterByCategory(
        this.state.data,
        currentSection
      )
    }))
    // }, 100)
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
  _hightlightActiveSection = (item, index, list) => {
    this.setState(() => ({
      activeCategory: item,
      list: list,
      index: index
    }))
    if (index < this.state.categories.length - 2) {
      list.scrollToIndex({
        animated: true,
        index: index,
        viewOffset: 0,
        viewPosition: 0.5
      })
    } else {
      list.scrollToEnd({ animated: true })
    }
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

  _renderItem ({ item, index, section }) {
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

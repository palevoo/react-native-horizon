/* @flow */

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions
} from 'react-native'

export default class NavBar extends Component {
  renderMenuItem = ({ item, index }) => {
    const { activeCategory, highlightSection, navigateToSection } = this.props
    if (item === activeCategory) {
      // if (this.flatList) highlightSection(item, index, this.flatList)
      return (
        <TouchableOpacity
          item={item}
          onPress={() => {
            highlightSection(item, index, this.flatList)
            navigateToSection(item)
          }}
        >
          <View style={styles.menuItem}>
            <Text style={styles.menuTextActive}>{item}</Text>
          </View>
        </TouchableOpacity>
      )
    }
    return (
      <TouchableOpacity
        item={item}
        onPress={() => {
          highlightSection(item, index, this.flatList)
          navigateToSection(item)
        }}
      >
        <View style={styles.menuItem}>
          <Text style={styles.menuText}>{item}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  componentDidMount () {
    this.props.highlightSection(this.props.activeCategory, 0, this.flatList)
  }
  render () {
    const { activeCategory, categories, highlightSection } = this.props
    return (
      <View style={styles.container}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          initialScrollIndex={0}
          data={categories}
          renderItem={this.renderMenuItem}
          keyExtractor={item => item}
          activeCategory={activeCategory}
          highlightSection={highlightSection}
          ref={ref => {
            this.flatList = ref
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: Dimensions.get('window').width,
    backgroundColor: '#EF4743'
  },
  menuItem: {
    paddingLeft: 10,
    paddingRight: 10
  },
  menuText: {
    fontSize: 24,
    color: 'rgba(255, 255, 255, 0.7)'
  },
  menuTextActive: {
    marginTop: 1,
    fontSize: 24,
    color: '#fafafa'
  }
})

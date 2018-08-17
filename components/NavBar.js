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
import { CATEGORIES } from '../utils'

export default class NavBar extends Component {
  state = {
    categories: CATEGORIES
  }

  renderMenuItem = ({ item, index }) => {
    const { handleCategory, activeCategory } = this.props
    if (item === activeCategory) {
      return (
        <TouchableOpacity
          item={item}
          onPress={() => {
            if (index < 3) {
              this.flatList.scrollToIndex({
                animated: true,
                index: index,
                viewOffset: 0,
                viewPosition: 0.5
              })
              handleCategory(item)
            } else {
              this.flatList.scrollToEnd({ animated: true })
              handleCategory(item)
            }
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
          if (index < 3) {
            this.flatList.scrollToIndex({
              animated: true,
              index: index,
              viewOffset: 0,
              viewPosition: 0.5
            })
            handleCategory(item)
          } else {
            this.flatList.scrollToEnd({ animated: true })
            handleCategory(item)
          }
        }}
      >
        <View style={styles.menuItem}>
          <Text style={styles.menuText}>{item}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    const { handleCategory, activeCategory } = this.props
    return (
      <View style={styles.container}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          initialScrollIndex={0}
          data={this.state.categories}
          renderItem={this.renderMenuItem}
          keyExtractor={item => item}
          handleCategory={handleCategory}
          activeCategory={activeCategory}
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
    backgroundColor: '#35D788'
  },
  menuItem: {
    paddingLeft: 10,
    paddingRight: 10
  },
  menuText: {
    fontSize: 24,
    color: '#fafafa'
  },
  menuTextActive: {
    fontSize: 24,
    color: '#fafafa',
    fontWeight: 'bold'
  }
})

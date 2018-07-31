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
  };

  renderMenuItem = ({ item }) => {
    return (
      <TouchableOpacity
        item={item}
        onPress={() => this.props.handleCategory(item)}
      >
        <View style={styles.menuItem}>
          <Text style={styles.menuText}>{item}</Text>
        </View>
      </TouchableOpacity>
    )
  };

  render () {
    const { handleCategory } = this.props

    return (
      <View style={styles.container}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={this.state.categories}
          renderItem={this.renderMenuItem}
          keyExtractor={item => item}
          handleCategory={handleCategory}
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
    paddingLeft: 20,
    paddingRight: 20
  },
  menuText: {
    fontSize: 24,
    color: '#fafafa'
  }
})

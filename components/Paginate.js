/* @flow */

import React, { Component } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'

import Dot from './Dot'

export default class Paginate extends Component {
  render () {
    const { items, handleItem } = this.props
    return (
      <View style={styles.container}>
        {items.map(el => (
          <Dot id={el.id} key={el.id} handleItem={handleItem} />
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: 25,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

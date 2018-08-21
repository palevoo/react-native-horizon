/* @flow */

import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'

export default class Dot extends Component {
  render () {
    const { activeItem, handleItem, id } = this.props
    console.log(id, activeItem)
    if (activeItem === id) {
      return (
        <TouchableOpacity onPress={() => handleItem(id)}>
          <View style={styles.fatDot} />
        </TouchableOpacity>
      )
    }
    return (
      <TouchableOpacity
        onPress={() => {
          console.log('WTF????')
          handleItem(id)
        }}
      >
        <View style={styles.dot} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  dot: {
    backgroundColor: '#404040',
    width: 7,
    height: 7,
    padding: 0,
    margin: 10,
    marginTop: 10,
    borderRadius: 7
  },
  fatDot: {
    backgroundColor: '#404040',
    width: 7.75,
    height: 7.75,
    padding: 0,
    margin: 10,
    marginTop: 9.25,
    borderRadius: 7.75
  }
})

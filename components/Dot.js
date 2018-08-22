import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import propTypes from 'prop-types'

export default class Dot extends Component {
  render () {
    const { activeDotColor, activeItem, dotColor, handleItem, id } = this.props
    if (activeItem === id) {
      return (
        <TouchableOpacity onPress={() => handleItem(id)}>
          <View
            style={[styles.activeDot, { backgroundColor: activeDotColor }]}
          />
        </TouchableOpacity>
      )
    }
    return (
      <TouchableOpacity onPress={() => handleItem(id)}>
        <View style={[styles.dot, { backgroundColor: dotColor }]} />
      </TouchableOpacity>
    )
  }
}

Dot.propTypes = {
  activeItem: propTypes.number,
  activeDotColor: propTypes.string,
  dotColor: propTypes.string,
  handleItem: propTypes.func,
  itemId: propTypes.number
}

Dot.defaultProps = {
  dotColor: '#A5A5A8',
  activeDotColor: '#404040'
}

const styles = StyleSheet.create({
  dot: {
    width: 7,
    height: 7,
    padding: 0,
    margin: 10,
    marginTop: 10,
    borderRadius: 7
  },
  activeDot: {
    width: 7.75,
    height: 7.75,
    padding: 0,
    margin: 10,
    marginTop: 9.25,
    borderRadius: 7.75
  }
})

/* @flow */

import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import propTypes from 'prop-types'

import CustomButton from 'Button'

const { width } = Dimensions.get('window')

export default class ListItem extends Component {
  // TODO: show spinner while image is still loading
  // TODO: show fallback image onLoadFail
  render () {
    const { color, category, id, imageUrl, city, price } = this.props

    return (
      <View style={styles.container}>
        <View style={[styles.color, { backgroundColor: color }]}>
          <Image source={{ uri: imageUrl }} style={styles.foodImage} />
        </View>
        <View style={styles.text}>
          <Text>{city}</Text>
          <Text>{category}</Text>
          <CustomButton
            title={`${price}₽`}
            onPress={() => console.log(`Pressed ${id}`)}
          />
        </View>
      </View>
    )
  }
}

ListItem.propTypes = {
  category: propTypes.string,
  color: propTypes.string,
  city: propTypes.string,
  id: propTypes.number.isRequired,
  imageUrl: propTypes.string,
  price: propTypes.string
}

ListItem.defaultProps = {
  category: 'Unknown',
  color: '#fafafa',
  city: 'Unknown'
}

const styles = StyleSheet.create({
  container: {
    padding: 60,
    paddingTop: 0,
    marginTop: 0,
    width: width,
    flexDirection: 'column',
    alignItems: 'center'
  },
  color: {
    width: width,
    zIndex: 1,
    alignItems: 'center'
  },
  foodImage: {
    width: width * 0.7,
    height: width * 0.7,
    margin: 20,
    marginBottom: -20,
    zIndex: 2,
    borderRadius: width * 0.35
  },
  text: {
    width: width,
    flexDirection: 'row',
    padding: 40,
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

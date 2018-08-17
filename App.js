import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
// import propTypes from 'prop-types'

import Horizon from './components/Horizon'
// import Example from './components/Example'
import { data, APP_NAME } from './utils'

const { width } = Dimensions.get('window')

export default class App extends React.Component {
  state = {
    data: data
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{APP_NAME}</Text>
        {this.state.data.length < 1 ? (
          <Text>LOADING...</Text>
        ) : (
          <Horizon data={this.state.data} />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  header: {
    backgroundColor: '#35D788',
    padding: 20,
    paddingTop: 40,
    width: width
  }
})

import React from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native'

class MyListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id)
  }

  render() {
    const textColor = this.props.selected ? 'orange' : 'black'
    const textSize = this.props.selected ? 20 : 12
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View>
          <Text style={{ color: textColor, fontSize: textSize, margin: 10 }}>
            {this.props.title}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default class MultiSelectList extends React.PureComponent {
  state = { selected: (new Map(): Map<string, boolean>) }

  _keyExtractor = (item, index) => item.id

  _onPressItem = (id: string) => {
    // updater functions are preferred for transactional updates
    this.setState(state => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected)
      selected.set(id, !selected.get(id)) // toggle
      return { selected }
    })
  }

  _renderItem = ({ item }) => (
    <MyListItem
      id={item.id}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item.id)}
      title={item.city}
    />
  )

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: 'white' }}>COMPONENTNO</Text>
        <FlatList
          data={this.props.data}
          extraData={this.state.selected}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          getItemLayout={(data, index) => ({
            length: 20,
            offset: 20 * index,
            index
          })}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: 'red'
  }
})

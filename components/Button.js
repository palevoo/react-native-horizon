/* @flow */

import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default class CustomButton extends Component {
  render() {
    const { title, onPress } = this.props;
    return (
      <View>
        <Button title={title} onPress={onPress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

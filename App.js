import React from "react";
import { StyleSheet, Text, View } from "react-native";
import faker from "faker";

export default class App extends React.Component {
  state = {
    email: ""
  };

  componentDidMount() {
    let email = faker.internet.email();
    console.log("HERE", this.state);

    this.setState({
      email: email
    });
    console.log("HERE", this.state);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Email: {this.state.email}</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TouchableWithoutFeedback } from 'react-native';

export default class App extends Component {
  state = { 
    productCount: 0
  }
  
  addProduct = () => {
    this.setState((prevState) => ({
      "productCount": prevState.productCount + 1
    }))
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Button color={'red'} title="Add Product" onPress={this.addProduct} />
        
        <TouchableWithoutFeedback onLongPress={this.addProduct}><View><Text style={{color: 'red', fontSize: 18}}>Long Press</Text></View></TouchableWithoutFeedback>

        <Text style={{marginTop: 50, fontSize: 24}}>{this.state.productCount}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50
  }
})
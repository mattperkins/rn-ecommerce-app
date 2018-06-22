import React from 'react'
import { StyleSheet, View } from 'react-native'
import AddProduct from './AddProduct'
import AnimatedToggleButton from './AnimatedToggleButton'
  
export default class App extends React.Component{
  
  state={
    value: ""
  }

  _onStateChange = (newState) => {
    const value = newState?"red":"yellow"
    this.setState({
      bgColorToggle:value
    })
  }

    render(){      

      return (
        <View style={[styles.container, {backgroundColor: this.state.bgColorToggle}]}>

                <AnimatedToggleButton onStateChange={this._onStateChange}/>

                <AddProduct />

        </View>
      )
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  }
})
  

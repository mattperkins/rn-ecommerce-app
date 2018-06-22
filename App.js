import React from 'react'
import { StyleSheet, View } from 'react-native'
import AddProduct from './AddProduct'
import AnimatedToggleButton from './AnimatedToggleButton'
  
export default class App extends React.Component{
  
    render(){      

      return (
        <View style={[styles.container]}>
        
                <AnimatedToggleButton />


                <AddProduct />

        </View>
      )
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1'
  }
})
  

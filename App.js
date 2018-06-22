import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Animated, Easing } from 'react-native'
import AddProduct from './AddProduct'

class Header extends React.Component{
  
    state={
     toggle: true
   }
 
_onPress = () => {
  const newState = !this.state.toggle
  this.setState({toggle:newState})
  this.props.onStateChange && this.props.onStateChange(newState)
  } 


  render() {
    const {toggle} = this.state
    const appTitle = toggle?"My App":"ppA yM"
    const buttonBg = toggle?"dodgerblue":"#eaeaea"
  
    const { header, txt } = styl
    return (
      <View style={{flex:1}}>

       <View style={[ header, {backgroundColor: buttonBg} ]}>            
          <TouchableOpacity onPress={this._onPress}>
          
              <Text style={txt}>{appTitle}</Text>
          
          </TouchableOpacity>
        </View>

        <AddProduct />
       
       </View>
    )
  }
} 
    
        
const styl = {
  header:{
    alignItems: 'center',
    padding: 30,
    paddingTop: 45,
    width: '100%'
  },
  txt:{
    fontSize: 24
  }
}
  



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

                <Header onStateChange={this._onStateChange}/>

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
  

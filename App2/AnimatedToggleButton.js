import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Animated, Easing } from 'react-native'

export default class AnimatedToggleButton extends React.Component{
  
    state={
     toggle: true,
     animated: new Animated.Value(1)
   }
 
_onPress = () => {
  const newState = !this.state.toggle
  this.animatedButton()
  this.setState({toggle:newState})
  this.props.onStateChange && this.props.onStateChange(newState)
  } 

animatedButton(){
    this.state.animated.setValue(0)
    Animated.timing(this.state.animated,{
        toValue:1,
        duration:1000,
        easing: Easing.bounce
    }).start()
}

// spring animation example
// animatedButton(newState){
//     this.state.animated.setValue(newState?0:1)
//     Animated.spring(this.state.animated,{
//         toValue:newState?1:0,
//         duration:1000,
//     }).start()
// }


  render() {
    const {toggle, animated} = this.state
    const appTitle = toggle?"My App":"My App"
  
    const { txt } = styles
    return (
      <View>

       <View>            
          <TouchableOpacity 
          style={{
                backgroundColor: '#ecf0f1',
                alignItems: 'center',
                padding: 30,
                paddingTop: 45,
                width: '100%'
          }}
          onPress={this._onPress}>
          
          <Animated.View style={{
                    backgroundColor: 'dodgerblue',
                    position: 'absolute',
                    left:0,top:0,right:0,bottom:0,
                    transform: [
                        {
                            scale: animated.interpolate({
                                inputRange:[0,1],
                                outputRange:[0,1]
                            })
                        }
                    ]} }>
              
          </Animated.View>

            <Text style={txt}>{appTitle}</Text>

          </TouchableOpacity>
        </View>
       
       </View>
    )
  }
} 
    
        
const styles = StyleSheet.create({
  txt:{
    fontSize: 24,
    color: 'white'
  }
})
  




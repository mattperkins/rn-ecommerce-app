import { AppRegistry } from 'react-native'
import React, { Component } from 'react'
import { Text, View, Image, Dimensions, Animated, PanResponder } from 'react-native'

import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings (
    [ 'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader' ]
)

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

const Users = [
    {id:1, lemon: {uri:"https://placehold.it/100"} },
    {id:2, lemon: {uri:"https://placehold.it/200"} },
    {id:3, lemon: {uri:"https://placehold.it/300"} },
    {id:4, lemon: {uri:"https://placehold.it/400"} }
]

export default class App extends Component {
 
 constructor(props){
     super(props)

    this.position = new Animated.ValueXY()
    this.state = {
        currentIndex: 0
    }

    this.rotate = this.position.x.interpolate({
        inputRange:[-SCREEN_WIDTH/2, 0, SCREEN_WIDTH/2],
        outputRange:['-10deg', '0deg', '10deg'],
        extrapolate: 'clamp'
    })

    this.rotateAndTranslate = {
        transform:[{
            rotate: this.rotate
        },
        ...this.position.getTranslateTransform()
        ]
    }

     this.PanResponder = PanResponder.create({

         onStartShouldSetPanResponder:(evt, gestureState) => true,
         onPanResponderMove:(evt, gestureState) => {
             this.position.setValue({
                 x: gestureState.dx,
                 y: gestureState.dy
             })
         },
        onPanResponderRelease:(evt, gestureState) => {
            
        }
     })
 }


 renderUsers = () => {

     return Users.map((item,i) => {

         if( i < this.state.currentIndex ) {
             return null
         }
         else if (i === this.state.currentIndex) {
             return (
            <Animated.View 
            {...this.PanResponder.panHandlers}
                key={item.id}
                style={[this.rotateAndTranslate, { height:SCREEN_HEIGHT-120, width: SCREEN_WIDTH, padding: 10, position: 'absolute' } ]}>

                {/* DOPE BUTTON */}
                <Animated.View 
                    style={{
                        transform: [{rotate: '-30deg'}], position: 'absolute', top:50, left:50, zIndex:1000
                    }}>
                    <Text style={{
                        borderWidth:1, borderColor:'green', color:'green', fontSize:32, fontWeight:'800', padding:10  
                    }}>DOPE</Text>
                </Animated.View>


                {/* NOPE BUTTON */}
                <Animated.View 
                    style={{
                        transform: [{rotate: '30deg'}], position: 'absolute', top:50, left:50, zIndex:1000
                    }}>
                    <Text style={{
                        borderWidth:1, borderColor:'green', color:'green', fontSize:32, fontWeight:'800', padding:10  
                    }}>NOPE</Text>
                </Animated.View>

                <Image
                    style={{ flex:1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }} 
                    source={item.lemon} />

            </Animated.View>
         )
         }
         else {
             return (
            <Animated.View 
          
                key={item.id}
                style={{height:SCREEN_HEIGHT-120, width: SCREEN_WIDTH, padding: 10, position: 'absolute'}}>
                <Image
                    style={{ flex:1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }} 
                    source={item.lemon} />
            </Animated.View>
         )
         }
     }).reverse()

 }



// Component render method
  render() {
 
   return (
       <View style={{flex:1}}>
           <View style={{height:60}}>
           
           </View>

            <View style={{flex:1}}>
             {this.renderUsers()}
            </View>

            <View style={{height:60}}>
           
           </View>
       </View>
)
}
}



AppRegistry.registerComponent('space_monkey', () => App)

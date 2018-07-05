import { AppRegistry } from 'react-native'
import React, { Component } from 'react'
import { Text, View, Image, Dimensions, Animated } from 'react-native'

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
 
 renderUsers = () => {

     return Users.map((item,i) => {
         return (
            <Animated.View 
                key={i}
                style={{height:SCREEN_HEIGHT-120, width: SCREEN_WIDTH, padding: 10}}>
                <Image
                    style={{ flex:1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }} 
                    source={item.lemon} />
            </Animated.View>
         )
     })

 }


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

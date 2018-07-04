import { AppRegistry } from 'react-native'
import React from 'react'
import { Text, View } from 'react-native'


import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings (
    [ 'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader' ]
)



const App = () => {
        console.log('hello, world!')
        const lemon = [1,2,3,4,5]
        const lime = {
            backgroundColor: '#ccc',
            padding: 10,
            margin: 10
        }
       return <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            {
                lemon.map((l,i) => <View key={i} style={lime}><Text>{l}</Text></View>)
            }
        </View>
       
}



AppRegistry.registerComponent('space_monkey', () => App)

import React from 'react'
import { Text, View } from 'react-native'

import { AppRegistry } from 'react-native'

import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings (
    [ 'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader' ]
)



const App = () => (
  
        <View>
            <Text>Hello, World!</Text>
        </View>
  
)



AppRegistry.registerComponent('space_monkey', () => App)

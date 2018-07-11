import { AppRegistry } from 'react-native'
import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(
    ['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']
)


export default class App extends Component {

    render() {

        return (

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Hello, World!</Text>
            </View>

        )
    }
}



AppRegistry.registerComponent('space_monkey', () => App)

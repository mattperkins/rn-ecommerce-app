import { AppRegistry } from 'react-native'
import React, { Component } from 'react'
// import { View } from 'react-native'
import AppOfDay from './AppOfDay'

import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings (
    [ 'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader' ]
)


export default class App extends Component {
 
  render() {
 
   return (
       
            <AppOfDay />
       
)
}
}



AppRegistry.registerComponent('space_monkey', () => App)

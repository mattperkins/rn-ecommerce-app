import React from 'react'
import { View } from 'react-native'
import Users_redux from './Users_redux'

export default class App7 extends React.Component {
 
  render() {
 
   return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Users_redux />
    </View>
)
}
}
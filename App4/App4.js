import React from 'react'
import { View } from 'react-native'
import Animator from './Animator'

export default class App4 extends React.Component{
    render(){
        return (
            <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                {/* <PlatformDimensions />    */}
                <Animator />
            </View>
        )
    }
}
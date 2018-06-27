import React from 'react'
import { View } from 'react-native'
import PlatformDimensions from './PlatformDimensions'

export default class App3 extends React.Component{
    render(){
        return (
            <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                <PlatformDimensions />   
            </View>
        )
    }
}
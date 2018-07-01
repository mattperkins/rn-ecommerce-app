import React from 'react'
import { View } from 'react-native'
import Parallel from './Parallel'

export default class App5 extends React.Component{
    render(){
        return (
            <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                
                <Parallel />
            </View>
        )
    }
}
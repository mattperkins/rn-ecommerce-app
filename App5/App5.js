import React from 'react'
import { View } from 'react-native'
import Interpolation from './Interpolation'

export default class App4 extends React.Component{
    render(){
        return (
            <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                
                <Interpolation />
            </View>
        )
    }
}
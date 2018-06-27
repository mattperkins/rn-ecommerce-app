import React from 'react'
import { View, Text, Platform } from 'react-native'

export default class PlatformDimensions extends React.Component{

    state={
        os: Platform.OS
    }

    render(){
        
        return (
            <View>
                <Text>
                { 
                   this.state.os  === 'ios' ? 
                        'Welcome to IOS!' :
                        'Welcome to Android'
                }
                </Text>
            </View>
        )
    }
}
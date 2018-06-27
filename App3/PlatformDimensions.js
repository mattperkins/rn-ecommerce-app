import React from 'react'
import { View, Text, Platform } from 'react-native'

export default class PlatformDimensions extends React.Component{
    render(){
        return (
            <View>
                <Text>
                { 
                    Platform.OS === 'ios' ? 
                        'Welcome to IOS' :
                        'Welcome to Android'
                }
                </Text>
            </View>
        )
    }
}
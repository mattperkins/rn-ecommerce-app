import React from 'react'
import { View, Text, Platform } from 'react-native'

export default class PlatformDimensions extends React.Component{

    state={
        os: Platform.OS
    }
    
    checkSupport = ()=>{
        
        if(this.state.os === 'ios'){
            if(Platform.Version < 11) {
                return false
            }
        } else {
            if(Platform.Version < 26){
                return false
            }
        }
            return true
    }
    render(){
        
        return (
            <View>
                { this.checkSupport() ? 
                    <Text>
                    { 
                    this.state.os  === 'ios' ? 
                            'Welcome to IOS!' :
                            'Welcome to Android'
                    }
                    </Text>
                :
                    <Text>Your device is not supported, soweee!!!</Text>
                }
            </View>
        )
    }
}
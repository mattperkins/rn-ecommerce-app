import React from 'react'
import { View, Text, Platform, StyleSheet, Dimensions } from 'react-native'

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
    
    Dimensions.addEventListener("change",(ds) => {
        console.log(ds)
        // console.log(ds.window)
    })        

        return (
            <View style={[styles.lemon, {padding: 20}]}>
                { this.checkSupport() ? 
                    <Text style={{color: 'white'}}>
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

const styles = StyleSheet.create({
    lemon:{
        ...Platform.select({
            ios:{backgroundColor: '#f33'},
            android:{backgroundColor:'#33f'}
        })
    }
})
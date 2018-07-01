import React from 'react'
import { View, Text, Platform, StyleSheet, Dimensions } from 'react-native'

export default class PlatformDimensions extends React.Component{

    constructor(props) {
    super(props)
        this.state = {
         os: Platform.OS,
         orientation: Dimensions.get('window').height > 500 ? 'Portrait' : 'Landscape'
    }

    Dimensions.addEventListener("rotate", (ds) => {
       this.setState({
            orientation: ds.window.height > 500 ? 'Portrait' : 'Landscape'
       })
    })
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

    componentWillUnmount(){
        Dimensions.removeEventListener("rotate")
    }

    render(){        

        return (
            <View style={[styles.lemon, {padding: 20}]}>

                <Text style={{backgroundColor: this.state.orientation === 'Portrait' ? 'red' : 'blue'}}>{this.state.orientation}</Text>


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
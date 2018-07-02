import React, { Component } from 'react'
import { Text, View } from 'react-native'

class InputData extends Component{

    state={
        title: '',
        body: ''
    }

    render() {
        return (
            <View>
                <Text>InputData</Text>
            </View>
        )
    }
} 

export default InputData
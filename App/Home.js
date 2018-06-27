import React from 'react'
import { View, Text, Button } from 'react-native'

export default class Home extends React.Component{

    static navigationOptions = {
        title: 'Home'
    }
    
    render(){

        const {navigate} = this.props.navigation 
        return (
            <View>
                <Text>Home</Text>
                <Button 
                    title="Go to Profile"
                    onPress={
                        ()=>{
                            navigate('Profile')
                        }
                    }
                    />
            </View>
            

        )
    }
}

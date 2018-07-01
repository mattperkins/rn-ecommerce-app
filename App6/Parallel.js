import React from 'react'
import { View, Text, Animated, Button } from 'react-native'

export default class Parallel extends React.Component{

    constructor(props) {
    super(props)

    this.state = {
        redSquare : new Animated.Value(1)
    }
   
    }// end constructor
    
        

    // button click for red square
    runAnimation = () => {

    }

    render(){
        
        return (
            
            <View>

                    <View style={{backgroundColor: 'red', width: 65, height: 40}}></View>
                

                <Button 
                    title="Press"
                    onPress={this.runAnimation}
                />

            </View>
        )
    }
}
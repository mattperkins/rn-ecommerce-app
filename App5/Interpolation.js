import React from 'react'
import { View, Animated, Easing, Button } from 'react-native'

export default class App4 extends React.Component{

    constructor(props) {
    super(props)

    this.state = {
        redSquare : new Animated.Value(1)
    }
   
    }// end constructor
    
        

    // button click for red square
    runAnimation = () => {
        Animated.timing(this.state.redSquare, {
            toValue:0,
            duration: 1000
        }).start()
    }

    render(){
        
        return (
            
            <View>

                <Animated.View
                    style={{
                        opacity: this.state.redSquare,
                        // right: this.state.redSquare.interpolate({
                        //     inputRange: [0,1],
                        //     outputRange: [100, 0]
                        // })
                    }}
                >
                    <View style={{backgroundColor: 'red', width: 40, height: 40}}></View>
                
                
                </Animated.View>

                <Button 
                    title="Press to activate red box"
                    onPress={this.runAnimation}
                />

            </View>
        )
    }
}
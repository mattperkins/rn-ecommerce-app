import React from 'react'
import { View, Text, Animated, Button } from 'react-native'

export default class Interpolation extends React.Component{

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

                {/* adding opacity, slide left and rotate style animation properties */}
                <Animated.View
                    style={{
                        // opacity: this.state.redSquare,
                        transform: [
                            {
                                rotateX: this.state.redSquare.interpolate({
                                    inputRange: [0, 0.5, 1],
                                    outputRange: ['0deg', '180deg', '0deg']            
                                }) 
                            }
                        ]
                        // right: this.state.redSquare.interpolate({
                        //     inputRange: [0,1],
                        //     outputRange: [100, 0]
                        // })
                    }}
                >
                    <View style={{backgroundColor: 'red', width: 65, height: 40}}></View>
                
                <Animated.Text
                    style={{
                        fontSize: this.state.redSquare.interpolate({
                            inputRange: [0,1],
                            outputRange: [20, 0]
                        }),
                        color: this.state.redSquare.interpolate({
                            inputRange: [0,1],
                            outputRange: ['red', 'green']
                        })
                }}>
                    <Text>Animation</Text>
                </Animated.Text>

                </Animated.View>

                <Button 
                    title="Press to activate red box"
                    onPress={this.runAnimation}
                />

            </View>
        )
    }
}
import React from 'react'
import { View, Animated, Easing, Button } from 'react-native'

export default class App4 extends React.Component{

    constructor(props) {
    super(props)

    this.state = {
        redSquare : new Animated.ValueXY(0,0)
    }
   

    this.blueSquare = new Animated.ValueXY(0,0)
    
        Animated.timing(this.blueSquare, {
            toValue:{ x:-100, y:100 },
            duration: 5000,
            delay: 2000,
            easing: Easing.bounce
        }).start()


    this.yellowSquare = new Animated.Value(0)

        Animated.timing(this.yellowSquare, {
                toValue: 100,
                duration: 1000,
                delay: 1000,
                easing: Easing.bounce
            }).start()
    
    }// end constructor
    
        

    // button click for red square
    runAnimation = () => {
        Animated.spring(this.state.redSquare, {
            toValue:{ x:100, y:300 },
            friction: 1
        }).start()
    }

    

    render(){
        return (
            <View>

                <Animated.View
                    // style={{
                    //     left: this.redSquare.x,
                    //     top: this.redSquare.y
                    // }}

                    // same as above - but specific to ValueXY operation
                    style={this.state.redSquare.getLayout()}
                >
                    <View style={{backgroundColor: 'red', width: 40, height: 40}}></View>
                
                <Button 
                    title="Press to activate red box"
                    onPress={this.runAnimation}
                />
                </Animated.View>

                <Animated.View
                    // style={{
                    //     left: this.redSquare.x,
                    //     top: this.redSquare.y
                    // }}

                    // same as above - but specific to ValueXY operation
                    style={this.blueSquare.getLayout()}
                >
                    <View style={{backgroundColor: 'blue', width: 40, height: 40}}></View>
                </Animated.View>


                <Animated.View
                    style={{
                        top: this.yellowSquare,
                        opacity: this.yellowSquare
                    }}
                >
                    
                    <View style={{backgroundColor: 'yellow', width: 140, height: 140}}></View>
                </Animated.View>

            </View>
        )
    }
}
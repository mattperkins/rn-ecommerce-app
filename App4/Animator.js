import React from 'react'
import { View, Animated, Easing } from 'react-native'

export default class App4 extends React.Component{

    constructor(props) {
    super(props)
   
    this.redSquare = new Animated.ValueXY(0,0)
    this.blueSquare = new Animated.ValueXY(0,0)

        Animated.spring(this.redSquare, {
            toValue:{ x:100, y:300 },
            friction: 1,
            delay: 1000
        }).start()

        Animated.timing(this.blueSquare, {
            toValue:{ x:-100, y:100 },
            duration: 5000,
            delay: 2000,
            easing: Easing.bounce
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
                    style={this.redSquare.getLayout()}
                >
                    <View style={{backgroundColor: 'red', width: 40, height: 40}}></View>
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

            </View>
        )
    }
}
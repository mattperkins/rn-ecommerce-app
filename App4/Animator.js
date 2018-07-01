import React from 'react'
import { View, Animated } from 'react-native'

export default class App4 extends React.Component{

    constructor(props) {
    super(props)
   
    this.redSquare = new Animated.ValueXY(0,0)

        Animated.spring(this.redSquare, {
            toValue:{
                x:100, y:300
            }
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

            </View>
        )
    }
}
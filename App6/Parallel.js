import React from 'react'
import { View, Text, Animated, Button } from 'react-native'

export default class Parallel extends React.Component{

    constructor(props) {
    super(props)

    this.state = {
        yellowSquare : new Animated.Value(1),
        redSquare : new Animated.ValueXY(0,0),
        greenSquare : new Animated.Value(1)
    }
   
    }// end constructor
    
        

    // button click for red square
    runAnimation = () => {

        // Sequence Animation
        Animated.sequence([
            Animated.timing(this.state.yellowSquare,{
                toValue: 0
            }),
            Animated.spring(this.state.redSquare, {
                toValue: {x:200, y:300}
            }),
            Animated.timing(this.state.greenSquare,{
                toValue: 0
            })
        ]).start()

        // The Parallel Animation can also be used in the sequence above

        // Parallel Animation
        // Animated.parallel([
        //     Animated.spring(this.state.redSquare, {
        //         toValue: {x:200, y:300}
        //     }),
        //     Animated.timing(this.state.greenSquare,{
        //         toValue: 0
        //     })
        // ]).start() 
    }

    render(){
        
        return (
            
            <View>
                    
                     <Animated.View
                        style={{opacity: this.state.yellowSquare}} 
                    >
                        <View style={{backgroundColor: 'yellow', width: '100%', height: 200}}></View>
                    </Animated.View>


                   <Animated.View
                   style={this.state.redSquare.getLayout()}
                   > 
                       <View style={{backgroundColor: 'red', width: 65, height: 40}}></View>
                   </Animated.View>


                     <Animated.View
                        style={{opacity: this.state.greenSquare}} 
                    >
                   
                    <View style={{backgroundColor: 'green', width: 65, height: 40}}></View>
                    </Animated.View>

                <Button 
                    title="Press"
                    onPress={this.runAnimation}
                />

            </View>
        )
    }
}
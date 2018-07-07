import React from 'react' 
import { Image, ScrollView, TouchableWithoutFeedback, Animated, Dimensions, SafeAreaView } from 'react-native'

let SCREEN_WIDTH = Dimensions.get('window').width
let SCREEN_HEIGHT = Dimensions.get('window').height
const images = [
    { id:1, src: "https://picsum.photos/1001" },
    { id:2, src: "https://picsum.photos/1002" }
]

export default class AppOfDay extends React.Component {
 
  render() {
         
   return (
       <SafeAreaView style={{flex:1}}>
            <ScrollView 
                    style={{flex:1}}
            >
                
                    {images.map((image, i) => {

                        return (
                            <TouchableWithoutFeedback key={image.id}>
                                <Animated.View
                                    style={{ height: SCREEN_HEIGHT -150, width: SCREEN_WIDTH, padding: 15 }}
                                >
                                    <Image source={{uri: image.src}} style={{flex:1, width: null, height: null, resizeMode: 'cover', borderRadius: 20}}/>
                                </Animated.View>
                            </TouchableWithoutFeedback>
                            )
                    })}

            </ScrollView>
       </SafeAreaView>
)
}
}


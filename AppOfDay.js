import React from 'react'
import { View, Image, ScrollView, TouchableWithoutFeedback, Animated, Dimensions, SafeAreaView, StyleSheet } from 'react-native'

let SCREEN_WIDTH = Dimensions.get('window').width
let SCREEN_HEIGHT = Dimensions.get('window').height
const images = [
    { id: 1, src: "https://picsum.photos/1001" },
    { id: 2, src: "https://picsum.photos/1002" }
]

constructor(props){
    super(props)

    this.allImages = {}
    this.oldPosition = {}
    this.position = new Animated.ValueXY()
    this.dimensions = new Animated.ValueXY()

    this.set = {
        activeImage: null
    }
}

openImage = (i) => {

    this.allImages[i].measure(x, y, width, height, pageX, pageY) => {
        this.oldPosition.x = pageX
        this.oldPosition.y = pageY
        this.oldPosition.width = width
        this.oldPosition.height = height

        this.position.setValue({
            x: pageX,
            y: pageY
        })

        this.dimensions.setValue({
            x: width,
            y: height
        })

        this.setState({
            activeImage: images[i]
        }, () => {
            this.viewImage.measure((dx, dy, dWidth, dHeight, dPageX, dPageY) => {

                Animated.parallel([
                    Animated.timing(this.position.x, {
                        toValue: dPageX,
                        duration: 300
                    }),


                    Animated.timing(this.position.y, {
                        toValue: dPageY,
                        duration: 300
                    }),


                    Animated.timing(this.dimensions.x, {
                        toValue: dWidth,
                        duration: 300
                    }),


                    Animated.timing(this.dimensions.y, {
                        toValue: dHeight,
                        duration: 300
                    })
                ]).start()

            })
        })
    }
}

export default class AppOfDay extends React.Component {

    render() {

        const activeImageStyle = {
            width: this.dimensions.x,
            height: this.dimension.y,
            left: this.position.x,
            top: this.position.y
        }

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView
                    style={{ flex: 1 }}
                >

                    {images.map((image, i) => {

                        return (
                            <TouchableWithoutFeedback
                                onPress={() => this.openImage(i)}
                                key={image.id}>
                                <Animated.View
                                    style={{ height: SCREEN_HEIGHT - 150, width: SCREEN_WIDTH, padding: 15 }}
                                >
                                    <Image
                                        ref={(image) => (this.allImages[i] = image)}
                                        source={{ uri: image.src }} style={{ flex: 1, width: null, height: null, resizeMode: 'cover', borderRadius: 20 }} />
                                </Animated.View>
                            </TouchableWithoutFeedback>
                        )
                    })}

                </ScrollView>

                <View
                    style={StyleSheet.absoluteFill}
                    pointerEvents={this.state.activeImage ? "auto" : "none"}
                >

                    <View
                        style={{ flex: 2 }}
                        ref={(view) => (this.viewImage = view)}
                    >
                        <Animated.Image
                            source={this.state.activeImage ? this.state.activeImage.src : null}
                            style={[{ resizeMode: 'cover', top: 0, left: 0, height: null, width: null }, activeImageStyle]}
                        />
                    </View>


                    <View
                        style={{ flex: 1 }}
                    >

                    </View>

                </View>

            </SafeAreaView>
        )
    }
}


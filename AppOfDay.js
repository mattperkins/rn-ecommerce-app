import React from 'react'
import { View, Text, Image, ScrollView, TouchableWithoutFeedback, Animated, Dimensions, SafeAreaView, StyleSheet } from 'react-native'

let SCREEN_WIDTH = Dimensions.get('window').width
let SCREEN_HEIGHT = Dimensions.get('window').height
const images = [
    // { id: 1, src: "https://picsum.photos/1001" },
    // { id: 2, src: "https://picsum.photos/1002" }
    { id: 1, src: require('./assets/1001.jpg') },
    { id: 2, src: require('./assets/1002.jpg') }
]

export default class AppOfDay extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            activeImage: null
        }

        this.allImages = {}
        this.oldPosition = {}
        this.position = new Animated.ValueXY()
        this.dimensions = new Animated.ValueXY()
        this.animation = new Animated.Value(0)
        this.activeImageStyle = null
    }


    openImage = (i) => {

        this.allImages[i].measure((x, y, width, height, pageX, pageY) => {
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
                        }),

                        Animated.timing(this.animation, {
                            toValue: 1,
                            duration: 300
                        })
                    ]).start()

                })
            })
        }
        )
    }

    render() {

        const activeImageStyle = {
            width: this.dimensions.x,
            height: this.dimensions.y,
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
                                    {/* source={{ uri: image.src }} */}
                                    <Image
                                        ref={(image) => (this.allImages[i] = image)}
                                        source={image.src} style={{ flex: 1, width: null, height: null, resizeMode: 'cover', borderRadius: 20 }} />
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


                    <Animated.View
                        style={{ flex: 1, backgroundColor: 'white', padding: 20, paddingTop: 50 }}
                    >
                        <Text
                            style={{ fontSize: 24, paddingBottom: 10 }}
                        >Title Goes Here</Text>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, incidunt vitae sapiente neque fugit ex ducimus nesciunt expedita nisi voluptatum sit tenetur in quos doloremque, cupiditate modi. Dignissimos, distinctio magni? </Text>
                    </Animated.View>

                </View>

            </SafeAreaView>
        )
    }
}


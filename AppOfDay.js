import React, { Component } from 'react' 
import {  StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native'

const images = [
    { id:1, lemon: { uri: "https://placehold.it/200"} },
    { id:2, lemon: { uri: "https://placehold.it/250"} }
]

export default class AppOfDay extends Component {
 
  render() {
         
   return (
       <ScrollView 
            style={{flex:1}}
       >
            {images.map((item,i) => {
                <Image 
                    key={item.id}
                    style={styles.img}
                    source={item.lemon}
                />
            })}
           
       </ScrollView>
)
}
}

const styles = StyleSheet.create({
    img: {
        height:200,
        width:200
    }
})
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import StateLongPress from './StateLongPress'
import AnimatedToggleButton from './AnimatedToggleButton'

 const ListItems = ({items}) => items.map( (item, i) =><Text key={i}>{item}</Text> )
 
 


export default class App2 extends React.Component{
    
    state={
      items: [20,30]
    }
    render(){      

      return (
        <View style={[styles.container]}>
        
                <AnimatedToggleButton />


                <StateLongPress />

                <ListItems items={this.state.items} />
        </View>
      )
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1'
  }
})
  

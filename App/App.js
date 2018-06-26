import React from 'react'
import { createStackNavigator } from 'react-navigation'
import Home from './Home'
import Profile from './Profile'

const RootStack = createStackNavigator({
    Home: {
        screen: Home,
    },
    Profile: {
        screen: Profile,
    },
})

export default class App extends React.Component{
    
    render() {
        return (
            <RootStack/>
        )
    }
}


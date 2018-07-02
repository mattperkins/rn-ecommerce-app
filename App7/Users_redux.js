import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { getUsers } from '../Store/actions'
import { bindActionCreators } from 'redux'
import InputData from './InputData'
import UserLogin from './UserLogin'


class Users_redux extends Component {

constructor(props) {
super(props)
    this.props.getUsers()
}

  render() {
 
   return (

       <View style={{flex:1}}>

            <InputData />


            <UserLogin />

        </View>
)
}
}

function mapStateToProps(state){
    // console.log(state)
    return {
        users:state.users
    }
}
    
function mapDispatchToProps(dispatch){
    return bindActionCreators({getUsers},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Users_redux)
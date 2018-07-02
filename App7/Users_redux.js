import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { getUsers } from '../Store/actions'
import { bindActionCreators } from 'redux'

class Users_redux extends Component {
 
  render() {
 
   return (
    <View>
        <Text>Users_redux</Text>
    </View>
)
}
}

function mapStateToProps(state){
    return {
        users:state.users
    }
}
    

export default Users_redux
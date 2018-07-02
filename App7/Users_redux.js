import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { getUsers } from '../Store/actions'
import { bindActionCreators } from 'redux'

class Users_redux extends Component {

 componentDidMount(){
     this.props.getUsers()
 }


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
    
function mapDispatchToProps(dispatch){
    return bindActionCreators({getUsers},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Users_redux)
import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'
// import axios from 'axios'
import {connect} from 'react-redux'
import { addUser, getUsers, getOneUser, updateUser, deleteUser } from '../Store/actions'
import { bindActionCreators } from 'redux'


class InputData extends Component{

    state={
        title: '',
        body: ''
    }

    handleTitleInput = (title) => {
        this.setState({title})
    }

    handleBodyInput = (body) => {
        this.setState({body})
    }

    addUser = () => {
        // console.log(this.state)

        this.props.addUser(this.state)

        // const FOLDER = "users"
        // const URL = `https://rn-ecommerce-app.firebaseio.com/${FOLDER}.json`
        

        // axios({
        //     method:"POST",
        //     url: URL,
        //     data: this.state
        // }).then(res => console.log(res.data))
    }

    componentDidMount(){
        this.props.getUsers()
        this.props.getOneUser('-LGQr5AKp1IC5SIkjf--')
        this.props.updateUser('-LGQr5AKp1IC5SIkjf--')
        this.props.deleteUser('-LGQyBbNOzx2vsqgShOe')
    }     

    render() {
        const { formContainer, inputWrapper, input } = styles
        return (
            <View style={formContainer}>
            
                <View style={inputWrapper}>
                        <Text>Title:</Text>
                        <TextInput 
                            value={this.state.name}
                            style={input}
                            onChangeText={this.handleTitleInput}
                            underlineColorAndroid="transparent"
                        />
                </View>

                <View style={inputWrapper}>
                        <Text>Body: </Text>
                        <TextInput 
                            value={this.state.body}
                            style={input}
                            onChangeText={this.handleBodyInput}
                            underlineColorAndroid="transparent"
                        />
                </View>
            
                <Button 
                        title="Add User"
                        onPress={this.addUser}        
                />
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    formContainer:{
        flex:1,
        marginTop: 50,
        width: '100%',
        justifyContent:'flex-start', 
        alignItems:'center'
    },
    inputWrapper:{
        width: '80%',
    },
    input:{
        padding: 5,
        borderWidth: 1,
        borderColor: 'lightgrey',
        marginBottom: 5
    }
})


function mapStateToProps(state){
    console.log(state)
    return {
        users:state.users
    }
}
    
function mapDispatchToProps(dispatch){
    return bindActionCreators({addUser,getUsers,getOneUser,updateUser,deleteUser},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(InputData)
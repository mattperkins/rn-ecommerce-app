import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'
import {connect} from 'react-redux'
import {  } from '../Store/actions'
import { bindActionCreators } from 'redux'


class UserLogin extends Component{

    state={
        email: '',
        password: ''
    }

    handleEmailInput = (email) => {
        this.setState({email})
    }

    handlePasswordInput = (password) => {
        this.setState({password})
    }

    

    componentDidMount(){
        // this.props.getUsers()
        // this.props.getOneUser('-LGQr5AKp1IC5SIkjf--')
        // this.props.updateUser('-LGQr5AKp1IC5SIkjf--')
        // this.props.deleteUser('-LGQyBbNOzx2vsqgShOe')
    }     

    render() {
        const { formContainer, inputWrapper, input } = styles
        return (
            <View style={formContainer}>
            
                <View style={inputWrapper}>
                        <Text>Email:</Text>
                        <TextInput 
                            value={this.state.email}
                            style={input}
                            onChangeText={this.handleEmailInput}
                            underlineColorAndroid="transparent"
                        />
                </View>

                <View style={inputWrapper}>
                        <Text>Password: </Text>
                        <TextInput 
                            value={this.state.password}
                            style={input}
                            onChangeText={this.handlePasswordInput}
                            underlineColorAndroid="transparent"
                        />
                </View>
            
                <Button 
                        title="Login"
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
    return bindActionCreators({},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin)
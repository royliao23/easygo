import React, { Component } from "react";
import axios from 'axios';
import Main from '../HeadLine';
import Mainpage from '../signin.js';
import  { Redirect } from 'react-router-dom'
const API_URL = "http://royliao.pythonanywhere.com/api-token-auth/";

class Login extends Component {
    state ={
        tok:localStorage.getItem('authcode')


    }
    constructor(props) {
        super(props);
        this.state = {username: "", password: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
   
    handleSubmit(event) {
        
        alert('A username and password was submitted: ' + this.state.username + " " + this.state.password);
        event.preventDefault();
        try {
            axios.post(`${API_URL}`,  this.state).then((response) => {
                
                
                
                
                    alert("token:"+response.data.token);

                    localStorage.setItem('accesstoken',{'Authorization':"Token "+response.data.token}
                    );
                    localStorage.setItem('authcode',response.data.token)
                    this.setState(() => ({ tok:localStorage.getItem('authcode') }));
                    alert(this.state.tok);
                    return this.state.tok;
               
              });
           
            }        
            catch (error) {
                if (error.response.status === 401) {
                  if (error.response.data.rtnCode === 1) {
                    console.log('Username not found!')
                  }
                } else if (error.response.status === 400) {
                    console.log('Username1 not found!')
                } else {
                    console.log('Username3 not found!')
                }
            }
        
    }

    render() {
        return (
            <div>
                
                { 

(localStorage.getItem('authcode')=='')?( 

    <form onSubmit={this.handleSubmit}>
    <label>
        Username:
        <input name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
    </label>
    <label>
        Password:
        <input name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
    </label>
    <input type="submit" value="Submit"/>
</form>

) : ( 

<Main />

) 

} 
                
            </div>
            
        )
        
        
    }
    
}
export default Login;
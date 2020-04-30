import React, { Component } from "react";
import axios from 'axios';
import Main from '../HeadLine';
import Landpage from './Counter';
import Mainpage from '../signin.js';
import  { Redirect } from 'react-router-dom'
const API_URL = "https://royliao.pythonanywhere.com/api-token-auth/";

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
        
     //   alert('A username and password was submitted: ' + this.state.username + " " + this.state.password);
        event.preventDefault();
        axios.post(`${API_URL}`,  this.state)
    .then((response) => {
  //      alert(response.data.token);
        console.log(response.data.token);
        localStorage.setItem('accesstoken',{'Authorization':"Token "+response.data.token}
                    );
                    localStorage.setItem('authcode',response.data.token)
                    this.setState(() => ({ tok:localStorage.getItem('authcode') }));
    //                alert(this.state.tok);
                    return this.state.tok;
    })
    .catch((error) => {
        // Error 😨
        if (error.response) {
            /*
             * The request was made and the server responded with a
             * status code that falls out of the range of 2xx
             */
            alert(error.response.data.non_field_errors+" Please try with correct user name and password!");
           
          
            console.log(error.response.data);
            console.log(error.response.status);
          
        } else if (error.request) {
            /*
             * The request was made but no response was received, `error.request`
             * is an instance of XMLHttpRequest in the browser and an instance
             * of http.ClientRequest in Node.js
             */
            console.log(error.request);
        } else {
            // Something happened in setting up the request and triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);
    });
        
    }

    render() {
        return (
            <div>
               
                { 

(localStorage.getItem('authcode')=='')?( 
<div>
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
<Landpage />

</div>
) : ( 

<Main />


) 

} 
                
            </div>
            
        )
        
        
    }
    
}
export default Login;
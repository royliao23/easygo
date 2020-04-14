import React, { Component } from "react";
import axios from 'axios';
const API_URL = "http://royliao.pythonanywhere.com/api-token-auth/";
class Login extends Component {
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
                alert(response.data.token);

                localStorage.setItem('accesstoken',{'Authorization':"Token "+response.data.token},)
              });
            }
            
         catch (error) {
            
        }
        
    }

    render() {
        return (
            <div>Login
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
            </div>
        )
    }
}
export default Login;
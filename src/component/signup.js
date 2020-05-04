import React, { Component } from "react";
import axios from 'axios';
class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            email:"",
            first_name:"",
            last_name:"",
            password_confirm:"",
            users: [],
            newUserData: {
               username: '',
               password: '',
               email:'',
               first_name:'',
               last_name:'',
               password_confirm:''
                },
            mymessage:'',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleChangef = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      //  this.setState({[event.target.username]: event.target.value});
        this.setState({[event.target.name]: event.target.value});
        
    }
    handleChangef(event) {
        //  this.setState({[event.target.username]: event.target.value});
          this.setState({[event.target.name]: event.target.value});
      }

    handleSubmit(event) {
       // alert('A username and password was submitted: ' + this.state.username + " " + this.state.password + " " + this.state.email);
        this.setState(Object.assign(this.state.newUserData,{username:this.state.username}));
        this.setState(Object.assign(this.state.newUserData,{password:this.state.password}));
        this.setState(Object.assign(this.state.newUserData,{first_name:this.state.first_name}));
        this.setState(Object.assign(this.state.newUserData,{last_name:this.state.last_name}));
        this.setState(Object.assign(this.state.newUserData,{email:this.state.email}));
        this.setState(Object.assign(this.state.newUserData,{password_confirm:this.state.password_confirm}));
        event.preventDefault();
     // alert(this.state.newUserData.username);
        axios.post('http://royliao.pythonanywhere.com/accounts/register/',  this.state.newUserData).then((response) => {
            let { users } = this.state;
          //  alert(response.data);
            users.push(response.data);
            this.setState({
              mymessage:"User name "+this.state.newUserData.username+ ' is added!'
            });
            this.setState({  
              username: '',
              password: '',
              first_name:'',
              last_name:'',
              Password:'',
              email:'',
              password_confirm:''
            });
          });
        }
    

    render() {
        return (
            <div>
              
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
                    </label><br></br>
                    
                    <label>
                        First Name:
                        <input name="first_name" type="text" value={this.state.first_name} onChange={this.handleChange}/>
                    </label><br></br>
                    <label>
                        Last Name:
                        <input name="last_name" type="text" value={this.state.last_name} onChange={this.handleChange}/>
                    </label><br></br>
                    <label>
                        Email:
                        <input name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
                    </label><br></br>
                    <label>
                        Password:
                        <input name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
                    </label><br></br>
                    <label>
                        Confirm Password:
                        <input name="password_confirm" type="password" value={this.state.password_confirm} onChange={this.handleChange}/>
                    </label><br></br><br></br>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
export default Signup;
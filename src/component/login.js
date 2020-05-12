import React, { Component } from "react";
import axios from 'axios';
import Main from '../HeadLinetry';
import Landpage from './Counter';
import Signup from './signup';
import Mainpage from '../signin.js';
import  { Redirect } from 'react-router-dom'
const API_URL = "https://royliao.pythonanywhere.com/api-token-auth/";
const USERAPI_URL ="http://royliao.pythonanywhere.com/users/retrieve/andyliao/";
class Login extends Component {
    state ={
        tok:localStorage.getItem('authcode'),
        signupform:'',
        permit:[],
       
       
        

    }
    constructor(props) {
        super(props);
        this.state = {username: "", password: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleuser = this.handleuser.bind(this);
    }
    UNSAFE_componentWillMount() {
        this.setState({signupform: <div>
            </div>});
        
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
                       this.setState(() => ({ tok:localStorage.getItem('authcode') }));
                       
                       localStorage.setItem('usern',this.state.username);
                     //  this.handleuser();
                     axios.get(USERAPI_URL+this.state.username)
                     .then((response) => {
                         this.setState({permit:response});
                         alert(this.state.permit[0]);
                         

                     })
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
      // this.setState({username:''});
       this.setState({password:''});
       {this.handleuser(this.state.username)};
       
       //this.setState({username:''});   
       }
   
    handleuser(username) {
        
     //   alert('A username and password was submitted: ' + this.state.username + " " + this.state.password);
      
    //axios.get(`${USERAPI_URL}`,  this.state.username)
    axios.get('http://royliao.pythonanywhere.com/users/retrieve/'+username)
    .then((response) => {
        this.setState({permit:response.data});
       // alert(this.state.permit[0]);
        localStorage.setItem('permito',this.state.permit)
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
        
        let form1=this.state.signupform;
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
<div style={{marginTop:20}}>not a user? You can <span style={{color:'blue'}} onClick={()=>{this.setState({signupform: <div>User Register<Signup /></div>});}}>click here to sign up</span>
<div style={{marginTop:20}}>{form1}</div>

<Landpage />
</div>


</div>
) : ( 

<Main user={this.state.username} permit={this.state.permit} />


) 

} 
                
            </div>
            
        )
        
        
    }
    
}
export default Login;
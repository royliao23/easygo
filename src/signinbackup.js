import React from 'react'; 

import Loginform from './component/login';

  
// Message Component 

function Message(props) 
{ 

    if (props.isLoggedIn) 

        return 'Welcome User'; 

    else

        return <Loginform />; 
} 

  
// Login Component 

function Login(props) 
{ 

   return( 

           <button onClick = {props.clickFunc}> 

               Login 

           </button> 

       ); 
} 

  
// Logout Component 

function Logout(props) 
{ 

    return( 

           <button onClick = {props.clickFunc}> 

               Logout 

           </button> 

       ); 
} 

  
// Parent Homepage Component 
class Homepage extends React.Component{ 

  

    constructor(props) 

    { 

        super(props); 

  

        this.state = {isLoggedIn : false}; 

  

        this.ifLoginClicked = this.ifLoginClicked.bind(this); 

        this.ifLogoutClicked = this.ifLogoutClicked.bind(this); 

    } 

  

    ifLoginClicked() 

    { 

        //open the form
        //authorization process
        //set value for isLoggedIn
        
        this.setState({isLoggedIn : true}); 
    
        

    } 

  

    ifLogoutClicked() 

    { 

        this.setState({isLoggedIn : false}); 

    } 

  

    render(){ 

  

        return( 

  

            <div> 
                  

                { 

                    (this.state.isLoggedIn)?( 

                    <Logout clickFunc = {this.ifLogoutClicked} /> 

                    ) : ( 

                    <Login clickFunc = {this.ifLoginClicked} /> 
                    
                    ) 

                } 

                    <Message isLoggedIn = {this.state.isLoggedIn}/> 
                    
                   
            </div> 

                  

            ); 

    } 
} 

export default Homepage;

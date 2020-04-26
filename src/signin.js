import React from 'react'; 
import Main from './HeadLine';
import Loginform from './component/login';

  

class Homepage extends React.Component{ 

  

    constructor(props) 

    { 

        super(props); 

  

        this.state = {
            isLoggedIn :false,
            tk:localStorage.getItem('authcode')
        }; 

  

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
                    
                    <Main />
            </div> 

                  

            ); 

    } 
} 

export default Homepage;

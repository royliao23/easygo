import React, { Component } from 'react';
import Login from './component/login';
import Head from './HeadLine';
import Mainpage from './signin.js';
//const API_URL = 'https://royliao.pythonanywhere.com/api/article/'

//const API_URL= 'https://royliao.pythonanywhere.com/snippets/'
class App extends Component {
 
    
    render() {
    
      
      return (
        <div className="App container">
          <Login /> 
          
       
      
        </div>

      );
      
  }
}

export default App;

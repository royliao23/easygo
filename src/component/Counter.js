import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Signup from './signup';
class Counter extends Component {
  constructor(props){

    super(props)
    this.state = {
        count:0

    }
  }
  increase(num){
      this.setState({
          count:this.state.count+num},()=>{console.log("count",this.state.count)}
      )
  }
  tosignup(){
    return (
<div><Signup /></div>

    )
}

  render() {
    return (
      <div>
       
       <h1>count - {this.state.count}</h1>
       <Button onClick={()=>this.increase(5)}>increase</Button>
      
      
      
      </div>
    );
  }
}
 
export default Counter;

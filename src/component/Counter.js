import React, { Component } from 'react';
import { Button } from 'reactstrap';
 
class Counter extends Component {
  constructor(props){

    super(props)
    this.state = {
        count:0

    }
  }
  increase(){
      this.setState({
          count:this.state.count+1},()=>{console.log("count",this.state.count)}
      )
  }
  render() {
    return (
      <div>
        
       <h1>count - {this.state.count}</h1>
       <Button onClick={()=>this.increase()}>increase</Button>
      </div>
    );
  }
}
 
export default Counter;

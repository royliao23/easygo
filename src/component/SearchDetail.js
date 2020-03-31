import React from 'react'
import { Button, Input,Submit } from 'reactstrap';
function ChildComponent(props) {
  
    return <Button id="myBtn" onClick={()=>props.greethandler2("from child")}>Search 3</Button>;
    
  //return <Button type="submit" onClick={()=>props.greethandler2("from child")}>Submit</Button>;

 }
export default ChildComponent;
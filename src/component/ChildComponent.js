import React from 'react'
import { Button, Input,Submit } from 'reactstrap';
function ChildComponent(props) {
  
    return <Button id="Btn1" onClick={()=>props.greethandler2("from child")}>Search </Button>;
    
  //return <Button type="submit" onClick={()=>props.greethandler2("from child")}>Submit</Button>;

 }
export default ChildComponent;
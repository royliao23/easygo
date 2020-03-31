import React, { Component } from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';
import ChildComponent from './ChildComponent';
const API_URL = 'https://royliao.pythonanywhere.com/api/article/'
class ParentComponet extends Component {
  constructor(props){

    super(props)
    this.state = {
        parentname:'Peter!',
        books:[],
        show:[],
    
    }
    this.increase=this.increase.bind(this)
  }
  increase(childname){
      this.setState(
        {greetmessage:`hello ${this.state.parentname} from ${childname}`})
      
  }

  
  getsearch2 = (childname) => {
    axios.get(`${API_URL}?search=${childname}`).then((response) => {
      //  response.header("Access-Control-Allow-Origin", "*");
      //  response.header("Access-Control-Allow-Headers", "X-Requested-With");
      this.setState({
        books: response.data
      },()=>{console.log("title",{childname});
      
    
    
    })
    });
   
    
  }
  render() {
    let show=this.state.books.map((book) => {
      return (
        
        <tr key={book.id}>
          <td>{book.id}</td>
          <td>{book.title}</td>
          <td>{book.desc}</td>
          <td>{book.year}</td>
          <td>
            <Button color="success" size="sm" className="mr-2" >Edit</Button>
            <Button color="danger" size="sm"  >Delete</Button>
          </td>
        </tr>
        
      )
    });
    return (
      <div>
        
        <ChildComponent greethandler2={this.getsearch2} />

       
    
       
              {show}
              
       
      </div>
      
    );
  }
}
 
export default ParentComponet;

import React, { Component } from 'react'
import axios from 'axios'
import Suggestions from './Suggestions'
import { Button } from 'reactstrap';
import SearchDetail from './ChildComponent';//vary name in child component

const { API_KEY } = process.env
const API_URL = 'https://royliao.pythonanywhere.com/api/article/'



class Search extends Component {
  constructor(props) {
    super(props)
    this.singlesearch = this.singlesearch.bind(this)
    this.getsearch2 = this.getsearch2.bind(this)
 
}
  state = {
    query: '',
    results: [],
    singlequery:'',
    entry:'',
    show:'',
    books:[],
    input:'ti',
    books2:[{"id":24,"title":"Bob The Builders","desc":"The best children's series","year":1999},]
      
    

    
  }

  getInfo = () => {
    axios.get(`${API_URL}?search=${this.state.query}`)
  //  axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
      .then(({ data }) => {
        this.setState({
          results: data
        })
      })
  }

  

  handleInputChange = (event) => {
    
    this.setState({
      query: this.search.value
   
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo();
         // this.UNSAFE_componentWillMount()
        }
      } else if (!this.state.query) {
      }
    });
    if (event.key === "Enter") {
      //this.getsearch2();
      alert("choice:"+this.state.query);
     // document.getElementById("myBtn").click();
      return;
    }  
  }
  getsearch2 = (childname) => {
    axios.get(`${API_URL}?search=${this.state.query}`).then((response) => {
      //  response.header("Access-Control-Allow-Origin", "*");
      //  response.header("Access-Control-Allow-Headers", "X-Requested-With");
      this.setState({
        books: response.data
      },()=>{console.log("title:",{childname});
      
    
    
    })
    });
   
    
  }

 
  singlesearch(choice){
    //alert("choice:"+choice);
    
    this.setState({entry:choice, query:choice},()=>{//alert("choice:"+this.state.query);
  this.getsearch2(this.state.query)})
   // this.refs.ref.value = {choice}
   
  }

  jumptosearch=()=>{alert("roy")}
  

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
         
      
        <input 
          id="myInput"
          placeholder="Search for..."
          ref={input => this.search = input}
          value={this.state.query}
          onChange={this.handleInputChange}
          onClick={this.getsearch2}
          onkeypress="return event.keyCode!=13"
        />
        <br></br>
        <SearchDetail greethandler2={this.getsearch2} />

        
     
      <Suggestions results={this.state.results} action={this.singlesearch}/>
      {show}
  
      </div>
     
    )
  }
}

export default Search

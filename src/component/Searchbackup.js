import React, { Component } from 'react'
import axios from 'axios'
import Suggestions from './Suggestions'
import { Button } from 'reactstrap';
import ChildComponent from './ChildComponent';

const { API_KEY } = process.env
const API_URL = 'https://royliao.pythonanywhere.com/api/article/'

class Search extends Component {
  constructor(props) {
    super(props)
    this.singlesearch = this.singlesearch.bind(this)
}
  state = {
    query: '',
    results: [],
    singlequery:'',
    entry:'',
    show:'',
    books:[],

    boxbooks:[],
    boxquery:'',
    buttonshow:'',
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

  getsearch = () => {
    axios.get(`${API_URL}?search=${this.state.singlequery}`)
  //  axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
      .then(({ data }) => {
        this.setState({
          results: data
        })
      })
  }

  handleInputChange = () => {
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
    })
  }
  getsearch2 = (childname) => {
    axios.get(`${API_URL}?search=${childname}`).then((response) => {
      //  response.header("Access-Control-Allow-Origin", "*");
      //  response.header("Access-Control-Allow-Headers", "X-Requested-With");
      this.setState({
        books: response.data
      },()=>{console.log("title:",this.state.books[0].title);
      
    
    
    })
    });
   
    
  }
  singlesearch(choice){
    //alert("choice:"+choice);
    
    this.setState({entry:choice, query:choice},()=>{//alert("choice:"+this.state.query);
  this.getsearch2(this.state.query)})
   // this.refs.ref.value = {choice}
   
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
    let buttonshow=this.state.books.map((book) => {
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
       
      
      <form>
        <input 
         // placeholder="Search for..."
          ref={input => this.search = input}
          value={this.state.query}
          onChange={this.handleInputChange}
        />
        <div>
        
        <ChildComponent greethandler2={this.getsearch2} />

       
    
       
              {buttonshow}
              
       
      </div>
      </form>
      <Suggestions results={this.state.results} action={this.singlesearch}/>
      {show}
      </div>
    )
  }
}

export default Search

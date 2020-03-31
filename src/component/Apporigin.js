import React, { Component } from 'react';
import axios from 'axios';
import {  Input, FormGroup, Label, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
//import titles from './component/title';
import Example from './component/Example';
import Titles from './component/titles';
import Header from './component/Header';
import Footer from './component/Footer';
import Counter from './component/Counter';
import ParentComponent from './component/ParentComponent';
import Search from './component/Search';
const API_URL = 'https://royliao.pythonanywhere.com/api/article/'

//const API_URL= 'https://royliao.pythonanywhere.com/snippets/'
class App extends Component {
  constructor(props) {
    super(props)
    
    this._refreshBooks = this._refreshBooks.bind(this)
 
}
  state = {
    searchkey:'',
    newseachkey:'',
    //results: [],
    books: [],
    newBookData: {
      title: '',
      desc: '',
      year:''
      },
    headerInfo: {'content-type': 'application/json','Access-Control-Allow-Origin': "*" },
    newBookModal: false,
    
    editBookData: {
      id: '',
      title: '',
      desc: '',
      year:''
      },
    editBookModal: false,
    mymessage:'',
    

    }

    toggleNewBookModal() {
      this.setState({
        newBookModal: ! this.state.newBookModal
      });
    }

    toggleEditBookModal() {
      this.setState({
        editBookModal: ! this.state.editBookModal
      });
    }
    getsearch2 = () => {
      axios.get(`${API_URL}?search=${this.state.searchkey}`).then((response) => {
        //  response.header("Access-Control-Allow-Origin", "*");
        //  response.header("Access-Control-Allow-Headers", "X-Requested-With");
        this.setState({
          books: response.data
        },()=>{console.log("title:");
        
      
      
      })
      });
     
      
    }
    addBook() {
     
      axios.post(`${API_URL}`,  this.state.newBookData,this.state.headerInfo).then((response) => {
        let { books } = this.state;
  
        books.push(response.data);
        this.setState({
          mymessage:"Book Title "+this.state.newBookData.title+ ' is added!'
        });
        this.setState({ books, newBookModal: false, newBookData: {
          title: '',
          desc: '',
          year:''
        }});
      });
    }

    editBook(id, title, desc, year) {
      this.setState({
        editBookData: { id, title, desc, year }, editBookModal: ! this.state.editBookModal
      } );
      
    }

    updateBook() {
      let {id, title, desc, year } = this.state.editBookData;
      //alert(this.state.editBookData.id);
      
      axios.put(`${API_URL}` + this.state.editBookData.id+'/', {id,
        title, desc, year
      }, this.state.headerInfo).then((response) => {
        this._refreshBooks();

        

      });

      this.setState({
        mymessage:"Book ID "+this.state.editBookData.id+ " is edited!" 
      });
        this.setState({
          editBookModal: false, editBookData: { id: '', title: '', desc: '', year:'' }
        });
        
    }

    deleteBook(id) {
      axios.delete(`${API_URL}` + id+'/').then((response) => {
        this._refreshBooks();
        this.setState({
          mymessage:"Book ID "+id+ ' is deleted!'
        });
        //alert("Book ID "+id+" id deleted");
      });
    }
    handleInputChanger = () => {
      this.setState({
        searchkey: this.search.value
     
      }, () => {
        if (this.state.searchkey && this.state.searchkey.length > 0) {
         // if (this.state.searchkey.length % 2 === 0) {
            this.getInfo();
            this.UNSAFE_componentWillMount()
         // }
        } else if (!this.state.searchkey) 
        window.location.reload(true);
      })
    }

    getInfo = () => {
      axios.get(`${API_URL}?search=${this.state.searchkey}`)
    //  axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
        .then(({ data }) => {
          this.setState({
            results: data

          })
        })
    }

    UNSAFE_componentWillMount() {
      if(this.state.searchkey!==''||this.state.searchkey!==null) {
      //  link = `/api/article/?search=${this.searchkey}`
       // alert( `/api/article/?search=${this.state.searchkey}`);
        axios.get(`${API_URL}?search=${this.state.searchkey}`).then((response) => {
          //  response.header("Access-Control-Allow-Origin", "*");
          //  response.header("Access-Control-Allow-Headers", "X-Requested-With");
          this.setState({
            books: response.data
          })
        });
      }
     
        
      }
      UNSAFE_componentWillMount2() {
        if(this.state.searchkey!==''||this.state.searchkey!==null) {
        //  link = `/api/article/?search=${this.searchkey}`
         // alert( `/api/article/?search=${this.state.searchkey}`);
          axios.get(`${API_URL}?search=${this.state.searchkey}`).then((response) => {
            //  response.header("Access-Control-Allow-Origin", "*");
            //  response.header("Access-Control-Allow-Headers", "X-Requested-With");
            this.setState({
              books: response.data
            })
          });
          
          
        }else
        {window.location.reload(true);
       alert("thh")
       
          
        }
      }
    _refreshBooks() {
      axios.get(`${API_URL}`).then((response) => {
        //  response.header("Access-Control-Allow-Origin", "*");
        //  response.header("Access-Control-Allow-Headers", "X-Requested-With");
        this.setState({
          books: response.data
        })
      });
    }
    
    render() {
    
      let books = this.state.books.map((book) => {
        return (
          <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td><a style={{color:"blue"}} onClick = {this.editBook.bind(this, book.id, book.title, book.desc, book.year)}>{book.title}</a></td>
            <td>{book.desc}</td>
            <td>{book.year}</td>
            <td>
              <Button color="success" size="sm" className="mr-2" onClick = {this.editBook.bind(this, book.id, book.title, book.desc, book.year)}>Edit</Button>
              <Button color="danger" size="sm" onClick={this.deleteBook.bind(this, book.id)} >Delete</Button>
            </td>
          </tr>
        )
      });
  
      return (
        <div className="App container">
          <Example  style={{marginLeft: 0}} />
         
        <center><div class="row">
    
        <h4 style={{marginTop: 25,}}>List of Customers</h4>&emsp;
        <Button  color="primary"  style={{marginTop: 25}} onClick={this.toggleNewBookModal.bind(this)}>Add Book</Button>
           
            <input
            input class="form-control mr-sm-2" 
           style={{marginLeft: 'auto',marginTop: 25, width:200}}
          placeholder="Search for the .."
          ref={input => this.search = input}
          onChange={this.handleInputChanger}
          onkeypress="return event.keyCode!=13"
        />
        
        <Button id="btn26" class="btn btn-outline-success my-2 my-sm-0"   color="primary" style={{marginTop: 25}} onClick={this.UNSAFE_componentWillMount2.bind(this)}>Search</Button>
        </div></center> <Titles  name={this.state.mymessage} />
          
        
  
        <Modal isOpen={this.state.newBookModal} toggle={this.toggleNewBookModal.bind(this)}>
          <ModalHeader toggle={this.toggleNewBookModal.bind(this)}>Add a new book</ModalHeader>
          <ModalBody>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input id="title" value={this.state.newBookData.title} onChange={(e) => {
              let { newBookData } = this.state;

              newBookData.title = e.target.value;

              this.setState({ newBookData });
            }} />
          </FormGroup>
          <FormGroup>
            <Label for="desc">Description</Label>
            <Input id="desc" value={this.state.newBookData.desc} onChange={(e) => {
              let { newBookData } = this.state;

              newBookData.desc = e.target.value;

              this.setState({ newBookData });
            }} />
          </FormGroup>
          <FormGroup>
            <Label for="year">Year</Label>
            <Input id="year" value={this.state.newBookData.year} onChange={(e) => {
              let { newBookData } = this.state;

              newBookData.year = e.target.value;

              this.setState({ newBookData });
            }} />
          </FormGroup>
  
          </ModalBody>
          <ModalFooter>
            <ModalFooter>
                <Button color="primary" onClick={this.addBook.bind(this)}>Add Book</Button>{' '}
                <Button color="secondary" onClick={this.toggleNewBookModal.bind(this)}>Cancel</Button>
            </ModalFooter>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.editBookModal} toggle={this.toggleEditBookModal.bind(this)}>
         <ModalHeader toggle={this.toggleEditBookModal.bind(this)}>Edit a new book</ModalHeader>
         <ModalBody>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input id="title" value={this.state.editBookData.title} onChange={(e) => {
              let { editBookData } = this.state;

              editBookData.title = e.target.value;

              this.setState({ editBookData });
            }} />
          </FormGroup>
          <FormGroup>
            <Label for="desc">Description</Label>
            <Input id="desc" value={this.state.editBookData.desc} onChange={(e) => {
              let { editBookData } = this.state;

              editBookData.desc = e.target.value;

              this.setState({ editBookData });
            }} />
          </FormGroup>
          <FormGroup>
            <Label for="year">Year</Label>
            <Input id="year" value={this.state.editBookData.year} onChange={(e) => {
              let { editBookData } = this.state;

              editBookData.year = e.target.value;

              this.setState({ editBookData });
            }} />
          </FormGroup>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.updateBook.bind(this)}>Update Book</Button>{' '}
          <Button color="secondary" onClick={this.toggleEditBookModal.bind(this)}>Cancel</Button>
        </ModalFooter>
      </Modal>


  
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Desc</th>
                <th>Year</th>
                <th>Action</th>
              </tr>
            </thead>
  
            <tbody>
              {books}
              
            </tbody>
            
          </Table>
          
          <center><Footer /></center>
        </div>

      );
      
  }
}

export default App;

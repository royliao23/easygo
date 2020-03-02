import React, { Component } from 'react';
import axios from 'axios';
import {  Input, FormGroup, Label, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class App extends Component {
  state = {
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

    addBook() {
     
      axios.post('http://royliao.pythonanywhere.com/snippets/',  this.state.newBookData,this.state.headerInfo).then((response) => {
        let { books } = this.state;
  
        books.push(response.data);
  
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
      });
    }

    updateBook() {
      let { title, desc, year } = this.state.editBookData;
  
      axios.put('http://royliao.pythonanywhere.com/snippets/' + this.state.editBookData.id+'/', {
        title, desc, year
      }, this.state.headerInfo).then((response) => {
        this._refreshBooks();
  
        this.setState({
          editBookModal: false, editBookData: { id: '', title: '', desc: '', year:'' }
        })
      });
    }

    deleteBook(id) {
      axios.delete('http://royliao.pythonanywhere.com/snippets/' + id+'/').then((response) => {
        this._refreshBooks();
      });
    }

    UNSAFE_componentWillMount() {
      axios.get('http://royliao.pythonanywhere.com/snippets/').then((response) => {
      //  response.header("Access-Control-Allow-Origin", "*");
      //  response.header("Access-Control-Allow-Headers", "X-Requested-With");
      this.setState({
        books: response.data
      })
    });
    }

    _refreshBooks() {
      axios.get('http://royliao.pythonanywhere.com/snippets/').then((response) => {
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
  
        <h1>Books App</h1>
  
        <Button className="my-3" color="primary" onClick={this.toggleNewBookModal.bind(this)}>Add Book</Button>
  
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
        </div>
      );
      
  }
}

export default App;

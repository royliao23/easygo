import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  state = {
    title: '',
    desc: '',
    year:'',
    image: null
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0]
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(this.state);
    let form_data = new FormData();
    
    form_data.append('file', this.state.image, this.state.image.name);
    form_data.append('title', this.state.title);
    form_data.append('desc', this.state.desc);
    form_data.append('year', this.state.year);
    let url = 'https://royliao.pythonanywhere.com/api/article/';
    let headers = {'content-type': 'multipart/form-data'};
    
    const head = 'Token '+localStorage.getItem('authcode');
    
    axios.post(url, form_data,{
      
      headers: {
        'content-type': 'multipart/form-data',
        'Authorization': head,
      // "Content-Type":"multipart/form-data"
      } 
    })
        .then(res => {
          console.log(res.data);
          this.setState({ image:'' });
          this.setState({ title:'' });
          this.setState({ desc:'' });
          this.setState({ year:'' });
        })
        .catch(err => console.log(err))
  };

  render() {
    return (
      <div className="App">

        <form onSubmit={this.handleSubmit}>
          <p>
            <input type="text" placeholder='Title' id='title' value={this.state.title} onChange={this.handleChange} required/>
          </p>
          <p>
            <input type="text" placeholder='desc' id='desc' value={this.state.desc} onChange={this.handleChange} required/>

          </p>
          <p>
            <input type="text" placeholder='year' id='year' value={this.state.year} onChange={this.handleChange} required/>

          </p>
          <p>
            <input type="file"
                   id="image"
                   accept="image/png, image/jpeg"  onChange={this.handleImageChange} />
          </p>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default App;
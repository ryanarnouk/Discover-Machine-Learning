import React, { Component } from 'react';
import axios from 'axios';

class NotHotdog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: ""
    }
  }

  handleChange = (event) => {
    this.setState({ imageUrl: event.target.value})
    console.log(this.state.imageUrl);

  }

  upload = () => {
    axios.post('http://localhost:3001/upload', this.state.imageUrl, {
     headers: {
       'Content-Type': 'application/x-www-form-urlencoded'
     },
    }).then((res) => {
      console.log(res);
    }).catch((error) => {
      console.log(error);
    });
  }

  render() { 
    return (  
      <div style={{marginLeft: '30%'}}>
        <h1>Hotdog classifier</h1>
        <form onSubmit={this.upload} autocomplete="off">
          <input id="url-input" type="text" placeholder="Image Url" name="imageUrl" value={this.state.imageUrl} onChange={this.handleChange} required></input>

          <div>
            <button id="submit-btn" type="submit">
              Check!
            </button>
          </div>
        </form>
      </div>
    );
  }
}
 
export default NotHotdog;
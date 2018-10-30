////const React = require('react');
////const ReactDOM = require('react-dom');
////require('react-dom');
//import React from 'react';
//
//class PostContainer extends React.Component {
//    constructor(props) {
//        super(props);
//        this.state = {
//            content: "",
//            post: ""
//        }
//        this.handleChange = this.handleChange.bind(this)
//        this.handlePost = this.handlePost.bind(this)
//    }
//
//    handleChange(event) {
//        this.setState({
//            content: event.target.value
//    });
//  }
//
//  handlePost(event) {
//    event.preventDefault()
//    // really wanted to call it post_post
//    fetch('https://localhost:8080/',{
//        method: "POST",
//        body: JSON.stringify(this.state.content),
//        headers: {
//          'Accept': 'application/json',
//          'Content-Type': 'application/json'
//        },
//      }).then(response => {
//        response.json().then(data =>{
//          console.log("Post successful" + data);
//        })
//    })
//  }
//
//  render () {
//      return
//      <div>
//        <form onSubmit={this.handlePost}>
//            <input value={this.state.content} onChange={this.handleChange} />
//          <button type='submit'>Submit!</button>
//        </form>
//        <h1>You posted: {this.state.post}</h1>
//      </div>
//  }
//
//}
//
//export default PostContainer;

const React = require('react');
const ReactDOM = require('react-dom');

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
        componentWillMount() {
    // change code below this line
      {console.log(this.state.content)}
    // change code above this line
  }
  handleChange(event) {
    this.setState({
      content: event.target.value
    });
  }
  handleSubmit(event) {
    // change code below this line
    event.preventDefault()
    fetch('/api/posts',{
        method: "POST",
        body: JSON.stringify(this.state.content),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(response => {
        response.json().then(data =>{
          console.log("Post successful" + JSON.stringify(data) + "This is saved in this.state.content       " + this.state.content);
        })
    })

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          { /* change code below this line */ }
            <input value={this.state.input} onChange={this.handleChange}/>
          { /* change code above this line */ }
          <button type='submit'>Submit!</button>
        </form>
        { /* change code below this line */ }
          <h1>{this.state.content}</h1>
        { /* change code above this line */ }
      </div>
    );
  }
};

export default MyForm;
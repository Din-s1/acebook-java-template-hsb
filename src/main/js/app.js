 const React = require('react');
 const ReactDOM = require('react-dom');


import PostsBuilder from './posts/postsBuilder'
import PostContainer from './posts/post_frontend'
//import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom"
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class App extends React.Component {

  render() {
    return (
     <div>
      <h1>Welcome to Acebook</h1>
      <ul className="header">
        <li><a href="/">Home</a></li>
        <li><a href="/stuff">Stuff</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div className="content">

      </div>
      <PostsBuilder />


    </div>

    );
  }
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)

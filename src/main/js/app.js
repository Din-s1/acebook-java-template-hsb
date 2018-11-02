 const React = require('react');
 const ReactDOM = require('react-dom');
 const client = require('./client');


import PostsBuilder from './posts/postsBuilder'
import CreatePost from './posts/createpost'
import Post from './posts/post'
import Posts from './posts/posts'
import Comment from './posts/comment'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom"

const config = {
  issuer: 'https://dev-712670.oktapreview.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '0oah4dqergYWODcu40h7'
}

class App extends React.Component {

  render() {
    return (
      <PostsBuilder />)
    return (
      <Posts />)
    return (
      <Post />)
    return (
       <CreatePost />)
      return(
       <Router>
              <Security issuer={config.issuer}
                        client_id={config.client_id}
                        redirect_uri={config.redirect_uri}
              >
                <Route path='/' exact={true} component={Home}/>
                <Route path='/implicit/callback' component={ImplicitCallback}/>
              </Security>
            </Router>

    )
  }
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)

import React from 'react';
import Posts from './posts'
import PostContainer from './post_frontend'
const client = require('../client');

class PostsBuilder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {posts: []};
     }

  componentDidMount() {
    client({method: 'GET', path: '/api/posts'}).then(response => {
      this.setState({posts: response.entity._embedded.posts});
    });
  }

	render() {
		return (
      <div>
      <Posts posts={this.state.posts}/>
      <PostContainer />
      </div>
		)
	}
}

export default PostsBuilder;

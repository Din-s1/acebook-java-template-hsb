import React from 'react';
import Posts from './posts'
import CreatePost from './createpost'

const client = require('../client');

class PostsBuilder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {posts: []};
    this.setNewPost = this.setNewPost.bind(this);
     }

  componentDidMount() {
    this.setNewPost()

  }

  setNewPost(){
//    let posts = postRepository.findAll();
    //console.log(posts);

    client({method: 'GET', path: '/acebook/posts'}).then(response => {
            console.log(response)
          this.setState({posts: response.entity});


//    client({method: 'GET', path: '/api/posts'}).then(response => {
//      this.setState({posts: response.entity._embedded.posts.reverse});

//    this.setState({posts: postRepository.findAll()});
      const posts = this.state.posts
      let newPostList = posts.reverse()

      this.setState({
      posts: newPostList.sort((a,b) => a.createdAt < b.createdAt )
      })

    });


  }

	render() {
		return (
      <div>
        <Posts posts={this.state.posts} setpost = {this.setNewPost}/>
        <CreatePost setpost = {this.setNewPost}/>
      </div>
      
		)
	}
}

export default PostsBuilder;

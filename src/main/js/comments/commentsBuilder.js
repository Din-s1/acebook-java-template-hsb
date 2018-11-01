import React from 'react';
import Comments from './comments'


const client = require('../client');

class CommentsBuilder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {comments: []};
    this.setNewComment = this.setNewComment.bind(this);
     }

  componentDidMount() {
    this.setNewComment()

  }

  setNewComment(){
    //let posts = postRepository.findAll();
    console.log(this.props.post);

    client({method: 'GET', path: '/acebook/posts/' + this.props.post.post_id +'/comments'}).then(response => {
            console.log(response)
          this.setState({comments: response.entity});


//    client({method: 'GET', path: '/api/posts'}).then(response => {
//      this.setState({posts: response.entity._embedded.posts.reverse});
//
//    this.setState({posts: postRepository.findAll()});


  });


  }

	render() {
		return (
      <div>
        <Comments comments={this.state.comments} setcomment = {this.setNewComment}/>
      </div>

		)
	}
}

export default CommentsBuilder;

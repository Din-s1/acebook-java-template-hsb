//import React from 'react';
//import Comment from './comment'
//
//class Comments extends React.Component {
//  constructor(props) {
//    super(props);
//    this.getComments = this.getComments.bind(this);
//  }
//
//	render() {
//		return (
//
//      <article className='comments-main'>
//      <h1 className='comments-title'>Comments</h1>
//        <div className='comments-items'>
//            {this.getComments()}
//        </div>
//      </article>
//		)
//	}
//
//  getComments() {
//    return this.props.comments.map(comment =>
//			<Comment key={comment} comment={comment} setcomment = {this.props.setcomment}/>
//		);
//  }
//}
//
//export default Comments;

import React from 'react';
import Comment from './comment'
import CommentsBuilder from '../comments/commentsBuilder'


class Post extends React.Component {
    constructor(props) {
    super(props);
    console.log(this.props.post)
    }

    render(){
    let date = new Date(this.props.post.createdAt).toString();
    return(
        <div className='post-main'>
            <div className='post-content'>
                        {this.props.post.content}
            </div>
            <div>{date}</div>
            <div><CommentsBuilder post={this.props.post} /></div>
            <div><Comment post={this.props.post} setpost = {this.props.setpost}/></div>
        </div>
        )
    }
}

export default Post;

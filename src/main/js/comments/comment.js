import React from 'react';


class Comment extends React.Component {
    constructor(props) {
    super(props);
    console.log(this.props.comment)
    }

    render(){
    let date = new Date(this.props.comment.createdAt).toString();
    return(
        <div className='comment-main'>
            <div className='comment-content'>
                        {this.props.comment.comment_content}
            </div>
            <div>{date}</div>
            //<div><Comment post={this.props.comment} setcomment = {this.props.setcomment}/></div>
        </div>
        )
    }
}

export default Comment;

import React from 'react';
const client = require('../client');

class Comment extends React.Component {
  constructor(props) {
    super(props);
//    this.url =  this.props.post..post.href
    this.id =this.props.post.post_id

//    this.id =  this.url.charAt(this.url.length-1);
    console.log(this.id)

    this.submit = this.submit.bind(this)

  }

  submit(){
  let that = this;
        var newComment = document.getElementById("newComment").value;
//        fetch('api/comments', {
//          method: "POST",
//          body: JSON.stringify(newComment),
//          headers: {
//            'Accept': 'application/json',
//            'Content-Type': 'application/json'
//          },
//        }).then(response => {
//                console.log(this.props)
//          response.json().then(data => {
//            that.props.setpost()
//            document.getElementById("user-comment").append(newComment);
//            console.log("Comment successful" + JSON.stringify(data));
//          })
//        })

        fetch('/acebook/posts +this.props.post_id +comments', {
                  method: "POST",
                  body: JSON.stringify(newComment),
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                }).then(response => {
                        console.log(this.props)
                  response.json().then(data => {
                    that.props.setpost()
                    document.getElementById("user-comment").append(newComment);
                    console.log("Comment successful" + JSON.stringify(data));
                  })
                })

   }

  render() {
    return (

      <div className="comment-main">
        <div id="user-comment"></div>
        <textarea id="newComment" placeholder="Enter your comment here"></textarea>
        <button onClick={() => this.submit()}>post comment</button>
      </div>
    )
  }
  
}

export default Comment;

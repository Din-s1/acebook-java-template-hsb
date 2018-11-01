import React from 'react';
const client = require('../client');

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.id =this.props.post.post_id
    console.log(this.id)
    this.submit = this.submit.bind(this)

  }

  componentDidUpdate() {
    this.props.setpost()
  }

  submit(){
  let that = this;
        var newComment = document.getElementById("newComment").value;
        console.log(that.props.post.post_id)

//        fetch('/acebook/posts/' + that.props.post.post_id + '/comments', {
//                          console.log("i am inside the comments fetch function")
//                          method: "POST",
//                          body: JSON.stringify(newComment),
//                          headers: {
//                            'Accept': 'application/json',
//                            'Content-Type': 'application/json'
//                          },
//                        }).then(() => {
//                          console.log("************")
//                            that.props.setpost()
//                            document.getElementById("user-comment").append(newComment);
//                            console.log("**************")
//                            console.log("Comment successful" + JSON.stringify(data));
//                          });
//                        })

        fetch('/acebook/posts/' + that.props.post.post_id + '/comments', {
                  method: "POST",
                  body: JSON.stringify(newComment),
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                }).then(response => {
                  response.json().then(data => {
                  console.log("************")
                    that.props.setpost()
                    document.getElementById("user-comment").append(newComment);
                    console.log("**************")
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

import React, { Component } from "react";
import { Link } from "react-router-dom";

import Comment from "./Comment";

class Comments extends Component {
  componentDidMount = () => {
    const { postId } = this.props.match.params;

    this.props.getComments(postId);
  };

  render() {
    const { comments } = this.props;
    return (
      <div>
        <Link
          to="/"
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          Back to Posts
        </Link>

        <div className="grid grid-cols-1 gap-3">
          {comments.map((comment, i) => {
            return <Comment key={i.toString()} title={comment.text} />;
          })}
        </div>
      </div>
    );
  }
}

export default Comments;

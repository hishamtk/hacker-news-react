import React, { Component } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Layouts/Spinner";

import Comment from "./Comment";

class Comments extends Component {
  componentDidMount = () => {
    const { postId } = this.props.match.params;

    this.props.getComments(postId);
  };

  render() {
    const { comments, loading } = this.props;
    return (
      <div>
        <Link
          to="/hackerNews"
          className="bg-gray-300 m-4 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          Back to Posts
        </Link>
        {loading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1 gap-3 mb-20">
            {comments.map((comment, i) => {
              if (comment.text === undefined) {
                return false;
              }
              return (
                <Comment
                  key={i.toString()}
                  title={comment.text}
                  user={comment.by}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Comments;

import React from "react";
import Post from "./Post";

import Spinner from "../Layouts/Spinner";

function Posts({ postsArray, loading }) {
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-20">
      {postsArray.map((post) => {
        return (
          <Post
            key={post.id.toString()}
            title={post.title}
            author={post.by}
            id={post.id}
          />
        );
      })}
    </div>
  );
}

export default Posts;

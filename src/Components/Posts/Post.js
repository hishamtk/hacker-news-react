import React from "react";
import { Link } from "react-router-dom";

function Post({ title, author, id }) {
  return (
    <div className="flex flex-col m-2 border border-indigo-300 rounded p-2 justify-between shadow-lg">
      <div>
        <h1 className="font-semibold text-xl">{title}</h1>
      </div>
      <div>
        <p>By : {author}</p>
      </div>
      <div>
        <Link
          className="mt-2 inline-block px-5 py-3 rounded-lg bg-red-500 bg-opacity-75 text-white uppercase tracking-widest font-semibold text-md"
          to={`/hackerNews/post/${id}`}
        >
          Comments
        </Link>
      </div>
    </div>
  );
}

export default Post;

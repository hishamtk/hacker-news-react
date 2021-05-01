import React from "react";


function Comment({ title }) {
  return (
    <div className="flex flex-col m-5 border border-indigo-300 rounded p-2 justify-between shadow-lg">
      <div>
        <p className="text-md">{title}</p>
      </div>
    </div>
  );
}

export default Comment;

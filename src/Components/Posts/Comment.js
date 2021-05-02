import React from "react";
import parse from "html-react-parser";

function Comment({ title, user }) {
  const text = `<p>${title}</p>`;
  return (
    <div className="flex flex-col m-2 border border-indigo-300 rounded p-2 justify-between shadow-lg">
      <div>
        <p className="text-md">{parse(text)}</p>
      </div>
      <div className="py-4">
        <p className="font-semibold">
          By :{" "}
          <a className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            href={`https://news.ycombinator.com/user?id=${user}`}
            target="_blank"
            rel="noreferrer"
          >
            {user}
          </a>
        </p>
      </div>
    </div>
  );
}

export default Comment;

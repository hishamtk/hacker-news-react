import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-800 w-full mx-auto rounded m-12">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 ml-8">
              <img
                className="h-8 w-8"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Y_Combinator_logo.svg/1200px-Y_Combinator_logo.svg.png"
                alt="Workflow"
              />
            </div>

            <div className="ml-6 flex items-baseline">
              <p className="text-white px-3 py-2 rounded-md text-3xl font-medium">
                Hacker News
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

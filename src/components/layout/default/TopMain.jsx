import React from "react";

export default function TopMain() {
  return (
    <div className="relative shadow-md bg-white flex-shrink-0">
      <div className="flex justify-between items-center h-16 px-12">
        <div>
          <div className="relative w-64">
            <div className="relative z-50">
              <input
                type="text"
                placeholder="Press / to search"
                className="block w-full py-2 pl-12 pr-4 bg-gray-200 rounded-full border border-transparent focus:bg-white focus:border-gray-300 focus:outline-none"
              />
              <div className="flex items-center absolute left-0 inset-y-0 pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 fill-current text-gray-600"
                >
                  <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="ml-6">
            <div className="relative">
              <button type="button" className="block w-full focus:outline-none">
                <span className="flex items-center">
                  <img
                    src="https://www.gravatar.com/avatar/568ca6753627d99ac1d88aa9c46852f0?d=https%3A%2F%2Fui-avatars.com%2Fapi%2FHussaini"
                    className="h-8 w-8 rounded-full"
                  />
                  <span className="ml-3">Hussaini</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 ml-2 text-gray-600"
                  >
                    <path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

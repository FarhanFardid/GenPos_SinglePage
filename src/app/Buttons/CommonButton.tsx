import React from "react";

interface AddButtonProps {
  path: string;
  text: string;
}

const CommonButton: React.FC<AddButtonProps> = ({ text, path }) => {
  return (
    <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="w-5 h-5 mr-2"
        fill="currentColor"
      >
        <path d={path} />
      </svg>
      {text}
    </button>
  );
};

export default CommonButton;

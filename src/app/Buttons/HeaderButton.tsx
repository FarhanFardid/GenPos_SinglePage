import React from "react";

interface HeaderButtonProps {
  path: string;
}
const HeaderButton: React.FC<HeaderButtonProps> = ({ path }) => {
  return (
    <button className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-100 text-black">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 512"
        className="h-6 w-6"
        fill="black"
      >
        <path d={path} />
      </svg>
    </button>
  );
};

export default HeaderButton;

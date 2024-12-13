import React from "react";

interface ListItemProps {
  path: string;
  text: string;
  drop: string;
}
const SidebarListItem: React.FC<ListItemProps> = ({ text, path, drop }) => {
  if (drop === 'false') {
    return (
      <li className="text-base md:text-lg font-medium my-2 flex flex-row items-center ">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-12 h-12 flex-shrink-0"
        >
          <path d={path} />
        </svg>{" "}
        <details className="flex-1">
          <summary>{text}</summary>
        </details>
      </li>
    );
  } else {
    return (
      <li className="text-base md:text-lg font-medium my-2 flex flex-row items-start ">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-12 h-12 flex-shrink-0"
          fill="blue"
        >
          <path d={path} />
        </svg>{" "}
        <details className="flex-1">
          <summary className="text-blue-600 cursor-pointer">{text}</summary>
          <ul className="list-disc marker:text-blue-500">
            <li>
              <a>Groups</a>
            </li>
            <li>
              <a className="text-blue-600">Companies</a>
            </li>
            <li>
              <a>Brands</a>
            </li>
            <li>
              <a>Outlets</a>
            </li>
            <li>
              <a>Warehouses</a>
            </li>
          </ul>
        </details>
      </li>
    );
  }
};

export default SidebarListItem;

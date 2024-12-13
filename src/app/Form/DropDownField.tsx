import React from "react";

interface DropdownFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; text: string }[];
}

const DropdownField: React.FC<DropdownFieldProps> = ({
  label,
  name,
  value,
  onChange,
  options,
}) => {
  return (
    <div className="flex flex-col w-full md:w-1/4 p-2">
      <label htmlFor={name} className="mb-1 font-semibold text-gray-700">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownField;

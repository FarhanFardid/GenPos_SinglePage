import React from "react";

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  validationMessage?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  validationMessage,
}) => {
  return (
    <div className="flex flex-col w-full md:w-1/4 p-2">
      <label htmlFor={name} className="mb-1 font-semibold text-gray-700">
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {validationMessage && (
        <span className="text-sm text-red-500">{validationMessage}</span>
      )}
    </div>
  );
};

export default InputField;

import React from "react";

const InputFiled = ({
  label,
  type,
  placeholder,
  id,
  value,
  onChange,
  error,
  isSubmitted,
}) => {
  return (
    <div className="mb-3">
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-md px-4 py-2 w-full h-10 rounded-tl-lg"
        placeholderClassName="text-base font-normal text-gray-400"
      />
      {!isSubmitted && error && (
        <p className="text-red-500 ml-2 text-xs">{error}</p>
      )}
    </div>
  );
};

export const MemoizedCustomInputFiled = React.memo(InputFiled);

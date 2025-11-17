import React from "react";
import { BiSearch } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";

type TextInputProps = {
  value?: string;
  className?: string;
  onChange?: (value: string) => void;
  onSend?: () => void;
  placeholder?: string;
  type?: string;
  mode?: "chat" | "search";
};

export function Input({
  value,
  className = "",
  onChange,
  onSend,
  placeholder = "Digite algo...",
  type = "text",
  mode = "chat", // "chat" ou "search"
}: TextInputProps) {
  interface HandleKeyDownEvent extends React.KeyboardEvent<HTMLInputElement> {}

  const handleKeyDown = (e: HandleKeyDownEvent): void => {
    if (e.key === "Enter" && mode === "chat" && onSend) {
      onSend();
    }
  };

  return (
    <div className="flex items-center  dark:bg-secodaryBackground rounded-2xl px-3 py-2 w-full">
      {mode === "search" && <BiSearch className="w-5 h-5 text-gray-500 mr-2" />}

      <input
        type={type}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className={` ${className}`}
      />

      {mode === "chat" && onSend && (
        <button
          onClick={onSend}
          className="ml-2 p-2  hover:bg-hoverSecondaryBackground text-white rounded-full transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <IoSearch className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}

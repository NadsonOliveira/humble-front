import React from "react";
import { BiSearch, BiSend } from "react-icons/bi";

type TextInputProps = {
  value: string;
  onChange: (value: string) => void;
  onSend?: () => void;
  placeholder?: string;
  type?: string;
  mode?: "chat" | "search";
};

export function TextInput({
  value,
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
    <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-2xl px-3 py-2 shadow-sm w-full">
      {mode === "search" && (
        <BiSearch className="w-5 h-5 text-gray-500 mr-2" />
      )}

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="flex-1 bg-transparent focus:outline-none text-gray-800 dark:text-gray-100 placeholder-gray-400"
      />

      {mode === "chat" && onSend && (
        <button
          onClick={onSend}
          className="ml-2 p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors"
        >
          <BiSend className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}

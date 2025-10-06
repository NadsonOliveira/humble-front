"use client";
import { useState } from "react";
import { TextInput } from "./textInput";

export function Header() {
   const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() === "") return;
    console.log("Mensagem enviada:", message);
    setMessage("");
  };
  return (
    <header className="  w-full h-16 bg-background text-white flex items-center px-4 border-b border-secodaryBackground">
      <div>
        <div className="mt-2">
          <div className="flex items-center rounded-md  pl-3 outline-1 -outline-offset-1 outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
            <TextInput
              value={message}
              onChange={setMessage}
              onSend={handleSend}
              placeholder="Digite uma mensagem..."
              mode="chat"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

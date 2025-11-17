"use client";
import { useState } from "react";
import { Input } from "./input";
import { Button } from "./button";

export function Header() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() === "") return;
    console.log("Mensagem enviada:", message);
    setMessage("");
  };
  return (
    <header className="  w-full h-16 bg-background text-white flex items-center px-4 border-b border-secodaryBackground flex flex-row justify-between ">
      <div className=" ml-150">
        <div>
          <Input
            value={message}
            onChange={setMessage}
            onSend={handleSend}
            placeholder="Digite uma mensagem..."
            mode="chat"
            className="w-96 flex direction-row"
          />
        </div>
      </div>
      <div>
        <Button
          variant="primary"
          className="mr-4 w-50 h-10 bg-secodaryBackground text-white rounded-lg hover:bg-hoverSecondaryBackground transition-colors cursor-pointer"
        >
          Criar conta gratuita
        </Button>
        <Button
          onClick={() => alert("Perigo!")}
          variant="primary"
          className="mr-4 w-28 h-10 bg-primary text-white rounded-lg hover:bg-secondaryPrimary transition-colors cursor-pointer"
        >
          Entrar
        </Button>
      </div>
    </header>
  );
}

"use client";

import { useState } from "react";
import { Input } from "./input";
import { Button } from "./button";
import { useSession, signOut } from "next-auth/react";
import { Avatar } from "./avatar";

export function Header() {
  const [message, setMessage] = useState("");
  const { data: session } = useSession();

  const handleSend = () => {
    if (message.trim() === "") return;
    console.log("Mensagem enviada:", message);
    setMessage("");
  };

  return (
    <header className="w-full h-16 bg-background text-white items-center px-4 border-b border-secodaryBackground flex flex-row justify-between">
      <div className="ml-150">
        <Input
          value={message}
          onChange={setMessage}
          onSend={handleSend}
          placeholder="Digite uma mensagem..."
          mode="chat"
          className="w-96 flex direction-row"
        />
      </div>

      <div className="flex items-center gap-4">
        {session?.user ? (
          <div className="flex items-center gap-3">
            <Avatar
              src={session.user.image || "/default-avatar.png"}
              alt="Perfil"
              className="w-10 h-10 rounded-full cursor-pointer border border-gray-500"
              ahref="/profile"
            />
            <Button
              variant="primary"
              onClick={() => signOut()}
              className="w-28 h-10 bg-secodaryBackground text-white rounded-lg hover:bg-hoverSecondaryBackground transition-colors cursor-pointer"
            >
              Sair
            </Button>
          </div>
        ) : (
          <>
            <Button
              variant="primary"
              className="mr-4 w-50 h-10 bg-secodaryBackground text-white rounded-lg hover:bg-hoverSecondaryBackground transition-colors cursor-pointer"
            >
              Criar conta gratuita
            </Button>

            <a href="/auth/login">
              <Button
                variant="primary"
                className="mr-4 w-28 h-10 bg-primary text-white rounded-lg hover:bg-secondaryPrimary transition-colors cursor-pointer"
              >
                Entrar
              </Button>
            </a>
          </>
        )}
      </div>
    </header>
  );
}

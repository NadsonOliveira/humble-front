"use client";

import { useState } from "react";
import { Button } from "./button";
import { LuImageMinus } from "react-icons/lu";
import { RiMusicAiFill } from "react-icons/ri";
import { useSession } from "next-auth/react";
import { Avatar } from "./avatar";

type Post = {
  text: string;
  user: {
    name: string;
    image: string;
  };
};

export default function PostComponent() {
  const { data: session } = useSession();
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);

  function handlePost() {
    if (!session) return;
    if (content.trim() === "") return;

    const newPost = {
      text: content,
      user: {
        name: session.user?.name || "Usuário",
        image: session.user?.image || "/default.png",
      },
    };

    setPosts((prev) => [newPost, ...prev]);
    setContent("");
  }

  const IsDisabled = !session || content.trim() === "";

  return (
    <div className="max-w-xl mx-100 p-10 justify-center">
      {/* Caixa de criação de postagem */}
      <div className="w-200 text-white border border-gray-300 p-4 rounded-2xl shadow-md">
        {/* 🔥 Mensagem NO TOPO */}
        {!session && <p className="text-red-400 mb-3">Faça login para realizar uma postagem</p>}
        {session && (
          <div className="flex flex-row gap-2 items-center mb-3">
            <Avatar
              src={
                "https://yt3.ggpht.com/UZFe6A_6mpaIx9qvM-edK-bN3bBRCN40G_v8Jsjw6QcF0LE7-6D-RiP3FYNv3haabRv5bpaN=s88-c-k-c0x00ffffff-no-rj"
              }
              alt={session.user?.name || "Usuário"}
              className="text-white"
            />
            <p className=" font-light">{session?.user?.name}</p>
          </div>
        )}
        <textarea
          value={session ? content : ""}
          onChange={(e) => setContent(e.target.value)}
          placeholder={session ? "Escreva algo… ou deixe a música falar por você." : ""}
          className={`w-full resize-none border-none focus:ring-0 outline-none text-lg text-white ${
            !session ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!session}
          rows={3}
        />

        <div className="flex items-center justify-between mt-4">
          {/* Ícones */}
          <div className="flex items-center space-x-4">
            <button
              className="text-primary hover:text-secondaryPrimary transition cursor-pointer"
              disabled={!session}
            >
              <LuImageMinus size={22} />
            </button>

            <button
              className="text-primary hover:text-secondaryPrimary transition cursor-pointer"
              disabled={!session}
            >
              <RiMusicAiFill size={22} />
            </button>
          </div>

          {/* Botão Postar */}
          <Button
            onClick={handlePost}
            variant="primary"
            disabled={IsDisabled}
            className="w-28 h-10 bg-primary text-white rounded-lg hover:bg-secondaryPrimary transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Postar
          </Button>
        </div>
      </div>

      {/* Lista de postagens */}
      <div className="mt-6 space-y-4">
        {session &&
          posts.map((post, index) => (
            <div key={index} className=" w-200 p-4 rounded-2xl shadow-sm border border-gray-300">
              <div className="flex flex-row gap-2 items-center mb-3">
                <Avatar
                  src={
                    "https://yt3.ggpht.com/UZFe6A_6mpaIx9qvM-edK-bN3bBRCN40G_v8Jsjw6QcF0LE7-6D-RiP3FYNv3haabRv5bpaN=s88-c-k-c0x00ffffff-no-rj"
                  }
                  alt={session.user?.name || "Usuário"}
                />
                <p className=" text-white font-light">{session?.user?.name}</p>
              </div>
              <p className="text-white text-base">{post.text}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

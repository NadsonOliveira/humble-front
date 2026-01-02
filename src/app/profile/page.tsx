"use client";

import { Button } from "@/components/button";
import { Modal } from "@/components/modal";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function ProfilePage() {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <div>
      <div className="flex justify-center py-10">
        <div className="w-400 h-80 ">
          <img
            src="https://images.alphacoders.com/106/thumb-1920-1064408.jpg"
            alt="Profile Banner"
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-400  p-4 flex items-center gap-6 rounded-lg">
          <img
            src={session?.user?.image || "/default-avatar.png"}
            alt="Profile Picture"
            className="w-40 h-40 object-cover rounded-full border-4"
          />
          <div className="flex flex-col text-white ">
            <p className="text-2xl font-extrabold">{session?.user?.name}</p>
            <div className="flex flex-row gap-2 ">
              <span className="flex flex-row items-center gap-1">
                200<p className="text-gray-400">Seguindo</p>
              </span>
              <span className="flex flex-row items-center gap-1">
                200<p className="text-gray-400 gap-1">Seguidores</p>
              </span>
            </div>
            <div className="flex mt-4">
              <Button
                variant="primary"
                className="mr-4 w-50 h-10 bg-secodaryBackground text-white rounded-lg hover:bg-hoverSecondaryBackground transition-colors cursor-pointer"
                onClick={() => setOpen(true)}
              >
                Informações do Perfil
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={open} onClose={() => setOpen(false)} title="Biografia">
        <p className="text-gray-700">Este é o conteúdo do modal feito com Tailwind.</p>
      </Modal>
    </div>
  );
}

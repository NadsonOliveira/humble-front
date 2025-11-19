"use client";

import { Button } from "@/components/button";
import { Modal } from "@/components/Modal";
import { useState } from "react";

export default function ProfilePage() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="flex justify-center py-10">
        <div className="w-400 h-80 ">
          <img
            src="https://yt3.googleusercontent.com/3a0laUBYTtpwSSHjzylS_OD5rRszVzL0xU_idrpXM7OPAAFZChmDnYCPW6P_q8rqwM2srQLWa9g=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
            alt="Profile Banner"
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-400  p-4 flex items-center gap-6 rounded-lg">
          <img
            src="https://pbs.twimg.com/profile_images/1872382231416549376/MbqSnZcj_400x400.jpg"
            alt="Profile Picture"
            className="w-40 h-40 object-cover rounded-full border-4"
          />
          <div className="flex flex-col text-white ">
            <p className="text-2xl font-extrabold">Nadson de Oliveira</p>
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

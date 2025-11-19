import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Fundo escuro */}
      <div onClick={onClose} />

      {/* Caixa do modal */}
      <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md p-6 z-10 animate-fade-in">
        {/* Header */}
        {title && <h2 className="text-xl font-semibold mb-4 text-gray-700">{title}</h2>}

        {/* Conteúdo */}
        <div>{children}</div>

        {/* Botão fechar */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
}

import { useState } from "react";
import { IoSendOutline } from "react-icons/io5";
import { RiChatAiLine } from "react-icons/ri";

type Message = {
  role: "user" | "ai";
  content: string;
};

const musicTags = [
  "Criar letra",
  "Analisar música",
  "Gerar beat",
  "Sugestão de acorde",
  "Vibe triste 😢",
  "Vibe animada 🔥",
  "BPM ideal",
  "Estilo do artista",
];

export function Chatbots() {
  const [open, setOpen] = useState(false);
  const [started, setStarted] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [chatHistory, setChatHistory] = useState<Message[][]>([]);

  function sendMessage(text?: string) {
    const content = text ?? input;
    if (!content.trim()) return;

    setStarted(true);
    setMessages((prev) => [...prev, { role: "user", content }]);
    setInput("");

    // Mock IA
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content: "🎧 Entendi! Me diga mais sobre o estilo, BPM ou artista de referência.",
        },
      ]);
    }, 600);
  }

  function handleNewChat() {
    if (messages.length > 0) {
      setChatHistory((prev) => [messages, ...prev]);
    }

    setMessages([]);
    setStarted(false);
    setShowHistory(false);
  }

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] h-[500px] bg-black text-white rounded-3xl shadow-2xl flex flex-col border border-white/10">
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
            {/* Título */}
            <span className="font-medium">Music AI</span>

            {/* Ações */}
            {started && (
              <div className="flex items-center gap-2">
                {/* Histórico */}
                <button
                  onClick={() => setShowHistory(true)}
                  className="p-2 rounded-full hover:bg-white/10 transition"
                  title="Histórico"
                >
                  🕘
                </button>

                {/* Novo chat */}
                <button
                  onClick={handleNewChat}
                  className="p-2 rounded-full hover:bg-white/10 transition"
                  title="Novo chat"
                >
                  <RiChatAiLine />
                </button>

                {/* Fechar */}
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-full hover:bg-white/10 transition text-white/60 hover:text-white"
                  title="Fechar"
                >
                  ✕
                </button>
              </div>
            )}

            {!started && (
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 transition text-white/60 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-5 py-4">
            {!started ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <h1 className="text-xl font-semibold mb-6">O que você quer criar hoje?</h1>

                {/* Input inicial */}
                <div className="w-full bg-white/10 rounded-2xl px-4 py-3 flex items-center gap-2">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="Ex: criar uma letra estilo Drake..."
                    className="flex-1 bg-transparent outline-none placeholder-white/40"
                  />
                  <button onClick={() => sendMessage()} className="cursor-pointer">
                    <IoSendOutline />
                  </button>
                </div>

                {/* Tags musicais */}
                <div className="flex gap-2 mt-5 flex-wrap justify-center">
                  {musicTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => sendMessage(tag)}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`max-w-[80%] text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "ml-auto bg-white/10 rounded-2xl px-4 py-2"
                        : "bg-white/5 rounded-2xl px-4 py-2"
                    }`}
                  >
                    {msg.content}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Input fixo */}
          {started && (
            <div className="p-4 border-t border-white/10">
              <div className="bg-white/10 rounded-2xl px-4 py-3 flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Continuar criando..."
                  className="flex-1 bg-transparent outline-none placeholder-white/40"
                />
                <button onClick={() => sendMessage()} className="cursor-pointer">
                  {" "}
                  <IoSendOutline />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="cursor-pointer fixed bottom-50 right-6 z-40 w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-xl border border-white/10 hover:scale-105 transition"
      >
        🔥
      </button>
    </>
  );
}

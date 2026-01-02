import { useState } from "react";
import { CiPause1 } from "react-icons/ci";
import { FiPlayCircle } from "react-icons/fi";
import { TbPlayerSkipBack, TbPlayerSkipForward } from "react-icons/tb";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 w-full h-24 bg-black border-t border-white/10 px-6 flex items-center justify-between z-50">
      {/* INFO DA MÚSICA */}
      <div className="flex items-center gap-4 w-1/3">
        <img
          src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
          alt="Capa"
          className="w-14 h-14 rounded-md object-cover"
        />

        <div className="overflow-hidden">
          <p className="text-white text-sm truncate">Minha Trilha Sonora</p>
          <p className="text-white/60 text-xs truncate">MC Cabelinho, BK</p>
        </div>
      </div>

      {/* CONTROLES */}
      <div className="flex flex-col items-center gap-2 w-1/3">
        <div className="flex items-center gap-6">
          <button className="text-white/70 hover:text-white text-lg">
            <TbPlayerSkipBack />
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 rounded-full text-white/70 hover:text-white 
             flex items-center justify-center 
             text-2xl hover:scale-105 transition cursor-pointer"
          >
            {isPlaying ? <CiPause1 /> : <FiPlayCircle />}
          </button>

          <button className="text-white/70 hover:text-white text-lg">
            <TbPlayerSkipForward />{" "}
          </button>
        </div>

        {/* PROGRESSO */}
        <div className="flex items-center gap-2 w-full text-xs text-white/60">
          <span>1:12</span>
          <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
            <div className="w-1/3 h-full bg-white" />
          </div>
          <span>3:45</span>
        </div>
      </div>

      {/* AÇÕES */}
      <div className="flex items-center gap-4 justify-end w-1/3 text-white/70">
        <button className="hover:text-white">🔊</button>
        <button className="hover:text-white">♡</button>
        <button className="hover:text-white">☰</button>
      </div>
    </div>
  );
}

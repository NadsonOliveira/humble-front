import { useState } from "react";

const slides = [
  {
    title: "Minha Trilha Sonora",
    subtitle: "Baseada em MC Cabelinho, BK, Filipe Ret e muito mais...",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
  },
  {
    title: "Rap Nacional",
    subtitle: "Os maiores nomes do rap brasileiro",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
  },
  {
    title: "Indie & Alternativo",
    subtitle: "Descubra novos sons",
    image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
  },
];

export function Slider() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const next = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative w-full h-[420px] overflow-hidden bg-black">
      {/* SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* IMAGEM */}
          <img src={slide.image} className="absolute right-0 top-0 h-full w-[65%] object-cover" />

          {/* GRADIENTE */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

          {/* CONTEÚDO */}
          <div className="relative z-20 h-full flex flex-col justify-center px-16 max-w-[600px]">
            <span className="text-primary text-sm font-semibold mb-2">ESTAÇÃO</span>

            <h1 className="text-white text-5xl font-bold leading-tight">{slide.title}</h1>

            <p className="text-white/80 mt-4">{slide.subtitle}</p>

            <button className="mt-6 w-fit px-6 py-3 rounded-full cursor-pointer bg-primary text-black font-semibold hover:bg-secondaryPrimary transition">
              Reproduzir
            </button>
          </div>
        </div>
      ))}

      {/* CONTROLES */}
      <div className="absolute bottom-6 right-10 z-30 flex gap-4">
        <button onClick={prev} className="text-white/70 hover:text-white text-xl cursor-pointer">
          ‹
        </button>
        <button onClick={next} className="text-white/70 hover:text-white text-xl cursor-pointer">
          ›
        </button>
      </div>
    </div>
  );
}

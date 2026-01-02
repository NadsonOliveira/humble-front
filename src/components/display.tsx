interface DisplayItem {
  title: string;
  image: string;
}

interface DisplaySectionProps {
  title: string;
  items: DisplayItem[];
}

export function Display({ title, items }: DisplaySectionProps) {
  return (
    <section className="w-full px-10 mt-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-xl font-semibold">{title}</h2>

        <button className="text-sm text-white/70 hover:text-white transition">Ver tudo</button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {items.map((item, index) => (
          <div key={index} className="group cursor-pointer">
            {/* Card */}
            <div className="relative aspect-square rounded-lg overflow-hidden bg-neutral-800">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Título */}
            <p className="mt-2 text-sm text-white truncate">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from "react";
import { FaCompass, FaHouse } from "react-icons/fa6";

export function Sidebar() {
  return (
    <aside className="h-screen w-64 bg-background text-white flex flex-col border-r-1 border-secodaryBackground">
      <a href="/" className="cursor-pointer">
        <div className="flex items-center space-x-2 mb-8 mt-4 ml-5">
          <span className="text-3xl ">🔥</span>
          <h1 className="text-primary text-3xl  font-bold">Humble</h1>
        </div>
      </a>
      <nav className="flex-1 p-2 space-y-2">
        <a
          href="#"
          className=" items-center space-x-2 block px-3 py-2 rounded-md hover:bg-secodaryBackground transition "
        >
          <div className="flex items-center ml-5">
            <FaHouse color="#FFB100" />
            <span className="flex ml-2.5  font-serrat">Inicio</span>
          </div>
        </a>
        <a
          href="#"
          className=" items-center space-x-2 block px-3 py-2 rounded-md hover:bg-secodaryBackground transition "
        >
          <div className="flex items-center ml-5">
            <FaCompass color="#FFB100" />
            <span className="flex ml-2.5  font-serrat">Explorar</span>
          </div>
        </a>
      </nav>
    </aside>
  );
}

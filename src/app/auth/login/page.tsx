"use client";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import Image from "next/image";
import { useState } from "react";
import { FaApple } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex items-center items-center justify-center h-screen w-screen bg-black">
      <div className="flex flex-col items-center justify-center w-150 h-150 p-35 rounded-2xl text-white shadow-lg">
        {/* Logo */}
        {/* <div className="flex items-center space-x-2 mb-30 mr-3">
          <span className="text-3xl ">🔥</span>
          <h1 className="text-primary text-3xl font-bold font-bold">Humble</h1>
        </div> */}

        <h1 className="text-white text-xl font-semibold mb-6">Entrar</h1>

        <Input
          type="email"
          placeholder="Insira seu e-mail"
          value={email}
          // onChange={(e) => setEmail(e.value)}
          className=" flex py-3 px-2 h-5  w-100  mr-3 mb-3 "
        />

        <Button className="w-full bg-neutral-800 text-white font-medium py-3 rounded-xl hover:bg-neutral-700 transition mb-4 mt-4">
          Continuar
        </Button>

        <div className="flex items-center w-full my-4">
          <div className="flex-grow h-px bg-neutral-700" />
          <span className="px-3 text-gray-400 text-sm">ou</span>
          <div className="flex-grow h-px bg-neutral-700" />
        </div>

        <Button className="flex items-center justify-center w-full  bg-white text-background font-medium py-3 rounded-xl mb-3 hover:bg-gray-100 transition cursor-pointer">
          <FcGoogle className="w-5 h-5 mr-2" />
          Continuar com Google
        </Button>

        <Button className="flex items-center justify-center w-full bg-white text-black font-medium py-3 rounded-xl hover:bg-gray-100 transition cursor-pointer">
          <FaApple className="w-5 h-5 mr-2" />
          Continuar com o Apple
        </Button>
      </div>
    </div>
  );
}

"use client";

import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import "../style/globals.css";
import { usePathname } from "next/navigation";
import { Providers } from "./providers";
import PostComponent from "@/components/postItem";
import { Slider } from "@/components/slider";
import { Display } from "@/components/display";
import { MusicPlayer } from "@/components/MusicPlayer";
import { Chatbots } from "@/components/chatbots";

const trendingItems = [
  {
    title: "Top Hits Brasil",
    image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
  },
  {
    title: "Rock Clássico",
    image: "https://images.unsplash.com/photo-1464375117522-1311d6a5c3b2",
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isLoginPage = pathname.startsWith("/auth/login");
  const perfilPage = pathname.startsWith("/profile");
  return (
    <html lang="en">
      <body className="flex antialiased bg-background min-h-screen">
        <Providers>
          {/* Sidebar apenas se não estiver na página de login */}
          {!isLoginPage && <Sidebar />}

          <div className="flex flex-col flex-1">
            {/* Header apenas se não estiver na página de login */}
            {!isLoginPage && <Header />}

            {/* PostComponent apenas dentro do sistema (não no login) */}
            {/* {!isLoginPage && <PostComponent />} */}
            {!isLoginPage && !perfilPage && <Slider />}
            {!isLoginPage && <Chatbots />}
            {!isLoginPage && !perfilPage && <Display title="Tendências" items={trendingItems} />}
            {!isLoginPage && !perfilPage && <MusicPlayer />}
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}

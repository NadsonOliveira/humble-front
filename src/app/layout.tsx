"use client";

import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import "../style/globals.css";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isLoginPage = pathname.startsWith("/auth/login");

  return (
    <html lang="en">
      <body className="flex antialiased bg-background min-h-screen">
        {!isLoginPage && <Sidebar />}

        <div className="flex flex-col flex-1">
          {!isLoginPage && <Header />}

          {children}
        </div>
      </body>
    </html>
  );
}

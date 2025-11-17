"use client";

import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import "../style/globals.css";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith("/auth");

  return (
    <html lang="en">
      <body className={`flex antialiased bg-background`}>
        {!isAuthPage && <Sidebar />}
        {!isAuthPage && <Header />}
        {children}
      </body>
    </html>
  );
}

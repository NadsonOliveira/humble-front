import {Sidebar} from "@/component/sidebar";
import "./globals.css";
import {Header} from "@/component/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex antialiased bg-background`}

      >
        <Sidebar/>
        <Header/>
        {children}
      </body>
    </html>
  );
}

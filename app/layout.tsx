// app/layout.tsx
import Sidebar from "@/components/layouts/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/layouts/Header";

export const metadata: Metadata = {
  title: "Mario Francisco — Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen">
        <Header />
        <div className="flex">
          <div className="xl:block hidden">
            <Sidebar />
          </div>
          <main className="xl:ml-[220px] flex-1 overflow-y-auto p-4 h-[calc(100vh-4rem)]">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

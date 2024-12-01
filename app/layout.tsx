import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import React, { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UCS Myeik | Software Club",
  description: "For Software Club",
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <ClerkProvider appearance={{ baseTheme: 'dark', variables: {
      colorPrimary: "blue",
      colorText: "#14aceb",
      fontSize: "16px"
    } }}>
      <html lang="en">
        <body className={inter.className}>
          <div className="mx-4 m-auto">
            <Header />
            <section className="flex gap-4 min-h-[500px] flex-col lg:flex-row">
              <Sidebar />
              <main className="border-l border-slate-300 px-4 flex-grow">
                {children}
              </main>
            </section>
            <footer className="text-center py-4 text-slate-400 mt-4 border-t border-slate-300">
              <small className="text-xs">UCS Myeik |&copy; Copyright 2024</small>
            </footer>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;

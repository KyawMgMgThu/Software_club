import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';
import { Inter } from "next/font/google";
import "./globals.css";
import React, { ReactNode } from "react";
import Header from '@/components/Header';
import Link from 'next/link';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PU Myeik | Software Club",
  description: "For Software Club",
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
      <html lang="en">
        <body className={inter.className}>
          <div className="mx-4 m-auto">
            <Header />
            <section className="flex gap-4 min-h-[500px] flex-col lg:flex-row">
            
              <main className=" px-4 flex-grow">
                {children}
              </main>
            </section>
            <footer className="border-t bg-">
              <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row"><Link href="/">
              <small className="text-xs">PU Myeik | Software Club &copy; Copyright 2024. All Rights reserved.</small>
              </Link></div>
            </footer>
          </div>
        </body>
      </html>
  );
};

export default RootLayout;

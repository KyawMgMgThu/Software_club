import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <nav className="flex justify-between items-center border rounded border-slate-300 px-4 py-2 my-4">
      <h1 className="font-bold text-lg gap-2 lg:gap-4">
        <Link href="/">UCS Myeik | Software Club</Link>
      </h1>
      <div className="flex items-center gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Header;

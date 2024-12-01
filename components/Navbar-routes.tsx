"use client";

import { UserButton } from "@clerk/nextjs";
import { Link, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

export const NavbarRoutes = () => {
    const pathname = usePathname();

    const isAdminPage = pathname?.startsWith("/admin");
    const isStudentPage = pathname?.startsWith("/");

    return (
        <>
            <div className="flex gap-x-2 ml-auto">
                {isAdminPage || isStudentPage ? ( <Link href={"/"}>
                 <Button variant={"outline"} size={"sm"} className="border-purple-700/20">
                    <LogOut />
                    Exit
                 </Button>
                </Link>) :( 
                    <Link href={"/admin/home"}>
                    <Button variant={"outline"} size={"sm"} className="border-purple-700/20">
                       Admin Mode
                    </Button>
                   </Link>
            
            
            )}

                <UserButton afterSignOutUrl="/" />
            </div>
        </>
    )
}
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Image from "next/image";
import { Separator } from "./ui/separator";
import NavItems from "./NavItems";

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src="/assets/icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-5 bg-gray-900 md:hidden">
          <SheetHeader>
            <SheetTitle className="text-white">
              PU Myeik | Software Club
            </SheetTitle>
            <SheetDescription className="text-gray-400">
              Navigate through our application.
            </SheetDescription>
          </SheetHeader>
          <Separator className="border-green-50" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;

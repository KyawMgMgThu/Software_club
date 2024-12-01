import Link from "next/link";
import { Button } from "@/components/ui/button";
import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-full lg:w-[220px] flex flex-col gap-1">
      <Button className="justify-start" variant="outline" asChild>
        <Link href="/">Home</Link>
      </Button>
      <Button className="justify-start" variant="outline" asChild>
        <Link href="/annoucement/3">Announcement</Link>
      </Button>
    </aside>
  );
};

export default Sidebar;

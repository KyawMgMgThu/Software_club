import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Button variant="primary">Button</Button>
      <Link href={"/"} className={buttonVariants({ variant: "outline" })}>
        Click Here
      </Link>

      {/* Use Link with Button for navigation */}
      <Link href="/login">
        <Button variant="default">Login</Button>
      </Link>
    </div>
  );
}

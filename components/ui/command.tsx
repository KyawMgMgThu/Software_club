"use client";

import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { cn } from "@/lib/utils";

export function Command({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      className={cn(
        "rounded-lg border bg-popover text-popover-foreground shadow-md",
        className
      )}
      {...props}
    />
  );
}

Command.displayName = CommandPrimitive.displayName;

export {
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandList,
  CommandInput,
  CommandEmpty,
} from "cmdk";

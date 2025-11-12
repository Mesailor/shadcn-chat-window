"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function ChatWindowHeader({
  children,
  className,
  ...props
}: { children?: React.ReactNode } & React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "sticky top-0 z-10 p-2 bg-background flex items-center gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function ChatWindowHeaderStart({
  children,
  className,
  ...props
}: { children?: React.ReactNode } & React.ComponentProps<"div">) {
  return (
    <div className={cn("flex items-center gap-2", className)} {...props}>
      {children}
    </div>
  );
}

export function ChatWindowHeaderMain({
  children,
  className,
  ...props
}: { children?: React.ReactNode } & React.ComponentProps<"div">) {
  return (
    <div className={cn("flex-1 flex items-center gap-2", className)} {...props}>
      {children}
    </div>
  );
}

export function ChatWindowHeaderEnd({
  children,
  className,
  ...props
}: { children?: React.ReactNode } & React.ComponentProps<"div">) {
  return (
    <div className={cn("flex items-center gap-2", className)} {...props}>
      {children}
    </div>
  );
}

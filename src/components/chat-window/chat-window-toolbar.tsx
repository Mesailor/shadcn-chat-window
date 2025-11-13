"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "../ui/textarea";

export function ChatWindowToolbar({
  children,
  className,
  ...props
}: {
  children?: React.ReactNode;
} & React.ComponentProps<"div">) {
  return (
    <div
      className={cn("sticky bottom-0 p-2 pt-0 bg-background", className)}
      {...props}
    >
      <div
        className={cn(
          "border rounded-md py-2 px-3",
          "grid grid-cols-[max-content_auto_max-content] gap-x-2"
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function ChatWindowToolbarAddonStart({
  children,
  className,
  ...props
}: {
  children?: React.ReactNode;
} & React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "h-10 row-start-1 col-start-1 flex items-center gap-1.5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function ChatWindowToolbarTextarea({
  className,
  ...props
}: React.ComponentProps<typeof Textarea>) {
  return (
    <div className="row-span-2 flex-1 grid">
      <Textarea
        id="toolbar-input"
        placeholder="Type your message..."
        className={cn(
          "h-fit min-h-10 max-h-30 px-1 @md/chat-window:text-base",
          "border-none shadow-none focus-visible:border-none focus-visible:ring-0 placeholder:whitespace-nowrap resize-none",
          className
        )}
        rows={1}
        {...props}
      />
    </div>
  );
}

export function ChatWindowToolbarAddonEnd({
  children,
  className,
  ...props
}: {
  children?: React.ReactNode;
} & React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "h-10 row-start-1 col-start-3 flex items-center gap-1 @md/chat-window:gap-1.5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

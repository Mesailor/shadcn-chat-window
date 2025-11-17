import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function AdditionalMessage({
  content,
  timestamp,
}: {
  content: ReactNode;
  timestamp: number;
}) {
  return (
    <div className="group/same-user-message shrink-0 flex gap-2 hover:bg-accent rounded-md px-2 py-0.5">
      <div
        className={cn(
          "shrink-0 w-10 @md/chat-window:w-12 text-[8px] @md/chat-window:text-[10px] text-muted-foreground text-right leading-6",
          "group-hover/same-user-message:visible invisible"
        )}
      >
        {/* 16:08 */}
        {new Intl.DateTimeFormat("en-US", {
          timeStyle: "short",
        }).format(timestamp)}
      </div>
      <span className="text-sm @md/chat-window:text-base">{content}</span>
    </div>
  );
}

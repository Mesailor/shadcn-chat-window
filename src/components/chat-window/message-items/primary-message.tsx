import { ReactNode } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export function PrimaryMessage({
  avatarSrc,
  avatarAlt,
  avatarFallback,
  senderName,
  content,
  timestamp,

  className,
}: {
  avatarSrc?: string;
  avatarAlt?: string;
  avatarFallback?: string;
  senderName: string;
  content: ReactNode;
  timestamp: number;

  className?: string;
}) {
  return (
    <div
      className={cn(
        "shrink-0 flex gap-2 hover:bg-accent rounded-md px-2",
        className
      )}
    >
      <div className="w-10 @md/chat-window:w-12 mt-1 shrink-0">
        <Avatar className="rounded-full size-8 @md/chat-window:size-10 mx-auto">
          <AvatarImage src={avatarSrc} alt={avatarAlt} />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col">
        <div className="flex items-baseline gap-2">
          <p className="font-medium text-sm @md/chat-window:text-base">
            {senderName}
          </p>
          <p className="text-xs text-muted-foreground">
            {/* 07.09.2020, 16:28 */}
            {new Intl.DateTimeFormat("en-US", {
              dateStyle: "medium",
              timeStyle: "short",
            }).format(timestamp)}
          </p>
        </div>
        <p className="text-sm @md/chat-window:text-base">{content}</p>
      </div>
    </div>
  );
}

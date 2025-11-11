import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";
import { Fragment, ReactNode } from "react";
import { MESSAGES } from "@/data/messages";

export function ChatWindowMessages() {
  return (
    <div className="flex-1 flex flex-col-reverse overflow-auto p-2">
      {MESSAGES.map((msg, i, msgs) => {
        // If date changed, show date item
        if (
          new Date(msg.timestamp).toDateString() !==
          new Date(msgs[i + 1]?.timestamp).toDateString()
        ) {
          return (
            <Fragment key={msg.id}>
              <PrimaryMessage
                avatarSrc={msg.sender.avatarUrl}
                avatarAlt={msg.sender.username}
                avatarFallback={msg.sender.name.slice(0, 2)}
                senderName={msg.sender.name}
                content={msg.content}
                timestamp={msg.timestamp}
              />
              <DateItem timestamp={msg.timestamp} className="my-4" />
            </Fragment>
          );
        }

        // If next item is same user, show additional
        if (msg.sender.id === msgs[i + 1]?.sender.id) {
          return (
            <AdditionalMessage
              key={msg.id}
              content={msg.content}
              timestamp={msg.timestamp}
            />
          );
        }
        // Else, show primary
        else {
          return (
            <PrimaryMessage
              className="mt-4"
              key={msg.id}
              avatarSrc={msg.sender.avatarUrl}
              avatarAlt={msg.sender.username}
              avatarFallback={msg.sender.name.slice(0, 2)}
              senderName={msg.sender.name}
              content={msg.content}
              timestamp={msg.timestamp}
            />
          );
        }
      })}
    </div>
  );
}

function PrimaryMessage({
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

function AdditionalMessage({
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

function DateItem({
  timestamp,
  className,
}: {
  timestamp: number;
  className?: string;
}) {
  return (
    <div className={cn("px-2 flex items-center gap-1", className)}>
      <Separator className="flex-1" />
      <span className="text-muted-foreground text-xs font-semibold min-w-max">
        {/* 31 October 2025 */}
        {new Intl.DateTimeFormat("en-US", {
          dateStyle: "long",
        }).format(timestamp)}
      </span>
      <Separator className="flex-1" />
    </div>
  );
}

import { cn } from "@/lib/utils";

export function ChatEvent({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex gap-2 px-2", className)} {...props}>
      {children}
    </div>
  );
}

export function ChatEventAddon({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("w-10 @md/chat:w-12 mt-1 shrink-0", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function ChatEventBody({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex-1 flex flex-col", className)} {...props}>
      {children}
    </div>
  );
}

export function ChatEventContent({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("text-sm @md/chat:text-base", className)} {...props}>
      {children}
    </div>
  );
}

export function ChatEventTitle({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("font-medium text-sm @md/chat:text-base", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function ChatEventDescription({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("text-xs text-muted-foreground", className)} {...props}>
      {children}
    </div>
  );
}

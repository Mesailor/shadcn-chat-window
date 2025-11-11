import {
  CalendarDaysIcon,
  GiftIcon,
  PlusIcon,
  SquareChevronRightIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";

export function ChatWindowInput() {
  return (
    <div className="sticky bottom-0 p-2 pt-0 bg-background">
      <div
        className={cn(
          "bg-background border rounded-md py-2 px-3",
          "grid grid-cols-[max-content_auto_max-content] gap-x-2"
        )}
      >
        <div className="h-10 row-start-1 col-start-1 flex items-center gap-1.5">
          <Button variant="ghost" className="size-8 @md/chat-window:size-9">
            <PlusIcon className="size-5 @md/chat-window:size-6 stroke-[1.7px]" />
          </Button>
        </div>

        <div className="row-span-2 flex-1 grid">
          <Textarea
            id="toolbar-input"
            placeholder="Type your message..."
            className="h-fit min-h-10 max-h-30 px-1 resize-none @md/chat-window:text-base border-none shadow-none focus-visible:border-none focus-visible:ring-0 placeholder:whitespace-nowrap"
            rows={1}
          />
        </div>

        <div className="h-10 row-start-1 col-start-3 flex items-center gap-1 @md/chat-window:gap-1.5">
          <Button variant="ghost" className="size-8 @md/chat-window:size-9">
            <GiftIcon className="size-4 @md/chat-window:size-5 stroke-[1.7px]" />
          </Button>
          <Button variant="ghost" className="size-8 @md/chat-window:size-9">
            <CalendarDaysIcon className="size-4 @md/chat-window:size-5 stroke-[1.7px]" />
          </Button>
          <Button variant="ghost" className="size-8 @md/chat-window:size-9">
            <SquareChevronRightIcon className="size-4 @md/chat-window:size-5 stroke-[1.7px]" />
          </Button>
        </div>
      </div>
    </div>
  );
}

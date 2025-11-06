import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  MoreHorizontalIcon,
  PhoneIcon,
  SearchIcon,
  VideoIcon,
} from "lucide-react";

export function ChatWindowHeader() {
  return (
    <div
      className={cn(
        "sticky top-0 border-b bg-background z-10 p-2",
        "flex items-center gap-4"
      )}
    >
      <div className="flex items-center gap-2">
        <Avatar className="rounded-full size-6">
          <AvatarImage
            src="https://github.com/evilrabbit.png"
            alt="@evilrabbit"
          />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium">Evil Rabbit</span>
        </div>
      </div>
      <div className="flex-1 flex items-center gap-2">
        <span className="text-sm font-semibold">AKA</span>
        <span className="text-sm font-medium">Chocolate Bunny</span>
      </div>
      <div className="flex items-center gap-1.5">
        {/* Additional header actions can be added here */}
        <InputGroup className="sm:flex hidden">
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup>
        <Button variant="ghost" className="size-8 sm:inline-flex hidden">
          <PhoneIcon />
        </Button>
        <Button variant="ghost" className="size-8 sm:inline-flex hidden">
          <VideoIcon />
        </Button>
        <Button variant="ghost" className="size-8">
          <MoreHorizontalIcon />
        </Button>
      </div>
    </div>
  );
}

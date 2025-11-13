import {
  CalendarDaysIcon,
  GiftIcon,
  MoreHorizontalIcon,
  PhoneIcon,
  PlusIcon,
  SearchIcon,
  SquareChevronRightIcon,
  VideoIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { ChatWindow } from "./chat-window";
import {
  ChatWindowHeader,
  ChatWindowHeaderMain,
  ChatWindowHeaderEnd,
  ChatWindowHeaderStart,
} from "./chat-window-header";
import {
  ChatWindowToolbar,
  ChatWindowToolbarAddonEnd,
  ChatWindowToolbarAddonStart,
  ChatWindowToolbarTextarea,
} from "./chat-window-toolbar";
import { ChatWindowMessages } from "./chat-window-messages";
import { Button } from "../ui/button";

export function ChatWindowExampleComponent() {
  return (
    <ChatWindow>
      <ChatWindowHeader className="border-b">
        <ChatWindowHeaderStart>
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
        </ChatWindowHeaderStart>
        <ChatWindowHeaderMain>
          <span className="text-sm font-semibold">AKA</span>
          <span className="text-sm font-medium">Chocolate Bunny</span>
        </ChatWindowHeaderMain>
        <ChatWindowHeaderEnd>
          <InputGroup className="@2xl/chat-window:flex hidden">
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <Button
            variant="ghost"
            className="size-8 @2xl/chat-window:inline-flex hidden"
          >
            <PhoneIcon />
          </Button>
          <Button
            variant="ghost"
            className="size-8 @2xl/chat-window:inline-flex hidden"
          >
            <VideoIcon />
          </Button>
          <Button variant="ghost" className="size-8">
            <MoreHorizontalIcon />
          </Button>
        </ChatWindowHeaderEnd>
      </ChatWindowHeader>

      <ChatWindowMessages />

      <ChatWindowToolbar>
        <ChatWindowToolbarAddonStart>
          <Button variant="ghost" className="size-8 @md/chat-window:size-9">
            <PlusIcon className="size-5 @md/chat-window:size-6 stroke-[1.7px]" />
          </Button>
        </ChatWindowToolbarAddonStart>
        <ChatWindowToolbarTextarea />
        <ChatWindowToolbarAddonEnd>
          <Button variant="ghost" className="size-8 @md/chat-window:size-9">
            <GiftIcon className="size-4 @md/chat-window:size-5 stroke-[1.7px]" />
          </Button>
          <Button variant="ghost" className="size-8 @md/chat-window:size-9">
            <CalendarDaysIcon className="size-4 @md/chat-window:size-5 stroke-[1.7px]" />
          </Button>
          <Button variant="ghost" className="size-8 @md/chat-window:size-9">
            <SquareChevronRightIcon className="size-4 @md/chat-window:size-5 stroke-[1.7px]" />
          </Button>
        </ChatWindowToolbarAddonEnd>
      </ChatWindowToolbar>
    </ChatWindow>
  );
}

import {
  MoreHorizontalIcon,
  PhoneIcon,
  SearchIcon,
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
import { ChatWindowInput } from "./chat-window-input";
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
      <ChatWindowInput />
    </ChatWindow>
  );
}

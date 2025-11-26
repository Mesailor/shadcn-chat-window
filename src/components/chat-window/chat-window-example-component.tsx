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
import { Button } from "../ui/button";
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
import { ChatMessages } from "./chat-messages";
import { MESSAGES } from "@/data/messages";
import { Fragment } from "react/jsx-runtime";
import { PrimaryMessage } from "./message-items/primary-message";
import { DateItem } from "./message-items/date-item";
import { AdditionalMessage } from "./message-items/additional-message";

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

      <ChatMessages className="py-2">
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
      </ChatMessages>

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

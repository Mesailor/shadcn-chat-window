import SyntaxHighlighter from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/hljs";
import {
  ChatHeader,
  ChatHeaderEnd,
  ChatHeaderMain,
  ChatHeaderStart,
} from "../chat/chat-header";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import {
  MoreHorizontalIcon,
  PhoneIcon,
  SearchIcon,
  VideoIcon,
} from "lucide-react";
import { CopyButton } from "../common/copy-button";

export function UsageExampleSection() {
  return (
    <section className="py-8 w-full max-w-4xl px-6 space-y-6">
      <h2 className="text-2xl font-semibold border-b pb-2">Usage Example</h2>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Chat Header</h3>

        <ChatHeader className="border rounded-sm static mb-4">
          <ChatHeaderStart>
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
          </ChatHeaderStart>
          <ChatHeaderMain>
            <span className="text-sm font-semibold">AKA</span>
            <span className="text-sm font-medium">Chocolate Bunny</span>
          </ChatHeaderMain>
          <ChatHeaderEnd>
            <InputGroup className="md:flex hidden">
              <InputGroupInput placeholder="Search..." />
              <InputGroupAddon>
                <SearchIcon />
              </InputGroupAddon>
            </InputGroup>
            <Button variant="ghost" className="size-8 md:inline-flex hidden">
              <PhoneIcon />
            </Button>
            <Button variant="ghost" className="size-8 md:inline-flex hidden">
              <VideoIcon />
            </Button>
            <Button variant="ghost" className="size-8">
              <MoreHorizontalIcon />
            </Button>
          </ChatHeaderEnd>
        </ChatHeader>

        <div className="relative">
          <CopyButton
            className="absolute top-2 right-2 z-10"
            text={codeString}
          />
          <SyntaxHighlighter
            language="htmlbars"
            style={vs}
            customStyle={{
              borderRadius: "8px",
              backgroundColor: "var(--sidebar)",
            }}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    </section>
  );
}

const codeString = `
    <Chat>
      <ChatHeader className="border-b">
        <ChatHeaderStart>
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
        </ChatHeaderStart>
        <ChatHeaderMain>
          <span className="text-sm font-semibold">AKA</span>
          <span className="text-sm font-medium">Chocolate Bunny</span>
        </ChatHeaderMain>
        <ChatHeaderEnd>
          <InputGroup className="@2xl/chat:flex hidden">
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <Button
            variant="ghost"
            className="size-8 @2xl/chat:inline-flex hidden"
          >
            <PhoneIcon />
          </Button>
          <Button
            variant="ghost"
            className="size-8 @2xl/chat:inline-flex hidden"
          >
            <VideoIcon />
          </Button>
          <Button variant="ghost" className="size-8">
            <MoreHorizontalIcon />
          </Button>
        </ChatHeaderEnd>
      </ChatHeader>

      <ChatMessages>
        ...
      </ChatMessages>

      <ChatToolbar>
        ...
      </ChatToolbar>
    </Chat>
    `;

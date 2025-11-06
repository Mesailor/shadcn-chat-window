import { ChatWindowHeader } from "./chat-window/chat-window-header";
import { ChatWindowInput } from "./chat-window/chat-window-input";
import { ChatWindowMessages } from "./chat-window/chat-window-messages";

export function ChatWindowExampleComponent() {
  return (
    <div className="h-full max-h-screen overflow-none flex flex-col">
      <ChatWindowHeader />
      <ChatWindowMessages />
      <ChatWindowInput />
    </div>
  );
}

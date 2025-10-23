import { ChatWindowHeader } from "./chat-window/chat-window-header";
import { ChatWindowInput } from "./chat-window/chat-window-input";
import { ChatWindowMessages } from "./chat-window/chat-window-messages";

export function ChatWindowExampleComponent() {
  return (
    <div className="h-full max-h-screen overflow-auto overscroll-none flex flex-col justify-between">
      <ChatWindowHeader />
      <ChatWindowMessages />
      <ChatWindowInput />
    </div>
  );
}

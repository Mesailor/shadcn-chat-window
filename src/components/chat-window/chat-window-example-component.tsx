import { ChatWindow } from "./chat-window";
import { ChatWindowHeader } from "./chat-window-header";
import { ChatWindowInput } from "./chat-window-input";
import { ChatWindowMessages } from "./chat-window-messages";

export function ChatWindowExampleComponent() {
  return (
    <ChatWindow>
      <ChatWindowHeader />
      <ChatWindowMessages />
      <ChatWindowInput />
    </ChatWindow>
  );
}

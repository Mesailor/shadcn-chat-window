export function ChatWindow({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full overflow-hidden flex flex-col @container/chat-window">
      {children}
    </div>
  );
}

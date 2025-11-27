export function Chat({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full overflow-hidden flex flex-col @container/chat">
      {children}
    </div>
  );
}

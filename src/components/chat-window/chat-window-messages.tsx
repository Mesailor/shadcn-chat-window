import { Skeleton } from "../ui/skeleton";

export function ChatWindowMessages() {
  return (
    <div className="flex-1 flex flex-col gap-1">
      {Array.from({ length: 100 }, (_, i) => (
        <Skeleton key={i} className="h-5 w-full rounded-md" />
      ))}
    </div>
  );
}

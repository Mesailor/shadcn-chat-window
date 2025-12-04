import { EventUsageExample } from "./event-usage-example";
import { HeaderUsageExample } from "./header-usage-example";
import { MessagesUsageExample } from "./messages-usage-example";

export function UsageExampleSection() {
  return (
    <section className="py-8 w-full max-w-4xl px-6 space-y-6">
      <h2 className="text-2xl font-semibold border-b pb-2">Usage Example</h2>

      <HeaderUsageExample />
      <MessagesUsageExample />
      <EventUsageExample />
    </section>
  );
}

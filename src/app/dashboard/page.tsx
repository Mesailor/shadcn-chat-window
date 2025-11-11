import { AppSidebar } from "@/components/app-sidebar";
import { ChatWindowExampleComponent } from "@/components/chat-window/chat-window-example-component";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "350px",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        <ChatWindowExampleComponent />
      </SidebarInset>
    </SidebarProvider>
  );
}

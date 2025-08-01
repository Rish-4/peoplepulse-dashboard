import { SidebarProvider } from "@/components/ui/sidebar";
import { HRSidebar } from "./hr-sidebar";

export function DashboardLayout({ children }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <HRSidebar />
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
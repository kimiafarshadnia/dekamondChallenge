import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="w-full min-h-screen flex">
        <AppSidebar />

        <main className="flex-1 p-6 overflow-auto">
          <SidebarTrigger className="mb-4 md:hidden" />
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
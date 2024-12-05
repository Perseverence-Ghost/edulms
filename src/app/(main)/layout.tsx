import { StudentSidebar } from "~/components/Sidebar";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "~/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden">
        <StudentSidebar />
        <SidebarInset className="flex-1 overflow-auto">
          <header className="bg-muted/40 flex h-14 items-center gap-4 border-b px-6 lg:h-[60px]">
            <SidebarTrigger />
            <h1 className="text-lg font-semibold">Student Dashboard</h1>
          </header>
          <main className="w-full flex-1">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

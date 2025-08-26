"use client";
import { Home } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "./Button";
import { clearUser } from "@/lib/auth";
import { useRouter } from "next/navigation";

const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
];
export function AppSidebar() {
  const router = useRouter();
  const handleLogout = () => {
    clearUser();
    router.push("/");
  };
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup className="h-full flex flex-col justify-between">
          <div>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </div>
          <Button onClick={handleLogout}>Logout</Button>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

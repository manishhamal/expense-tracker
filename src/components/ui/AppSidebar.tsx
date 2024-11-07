import { PlusCircle, Home, Inbox, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

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

// Menu items with proper routes
const items = [
  {
    title: "Dashboard",
    path: "/",
    icon: Home,
  },
  {
    title: "Transaction",
    path: "/transactions",
    icon: Inbox,
  },
  {
    title: "NewTransaction",
    path: "/transactions/create",
    icon: PlusCircle,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-semibold text-xl text-gray-700">
            Expense Tracker
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="font-semibold mt-8">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="text-lg my-2"
                    isActive={location.pathname === item.path}
                  >
                    <Link to={item.path}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

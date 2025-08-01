import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Users,
  UserPlus,
  TrendingUp,
  Heart,
  Calendar,
  RotateCcw,
  GraduationCap,
  DollarSign,
  Shield,
  BarChart3,
  Home,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigationItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Workforce", url: "/workforce", icon: Users },
  { title: "Recruitment", url: "/recruitment", icon: UserPlus },
  { title: "Performance", url: "/performance", icon: TrendingUp },
  { title: "Engagement", url: "/engagement", icon: Heart },
  { title: "Attendance", url: "/attendance", icon: Calendar },
  { title: "Retention", url: "/retention", icon: RotateCcw },
  { title: "Learning & Development", url: "/learning", icon: GraduationCap },
  { title: "Compensation", url: "/compensation", icon: DollarSign },
  { title: "Compliance", url: "/compliance", icon: Shield },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
];

export function HRSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };

  return (
    <Sidebar className={cn(
      "border-r border-sidebar-border transition-all duration-300",
      collapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Users className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold text-sidebar-foreground">HR Dashboard</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className="text-sidebar-foreground hover:bg-sidebar-accent"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupLabel className={cn(
            "text-sidebar-foreground/70 text-xs uppercase tracking-wider",
            collapsed && "sr-only"
          )}>
            Main Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={cn(
                      "w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors",
                      isActive(item.url) && "bg-sidebar-primary text-sidebar-primary-foreground font-medium"
                    )}
                  >
                    <NavLink to={item.url} end={item.url === "/"}>
                      <item.icon className={cn("h-5 w-5", collapsed ? "mx-auto" : "mr-3")} />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
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
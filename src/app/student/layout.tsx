"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  BookOpen,
  Calendar,
  LayoutDashboard,
  LogOut,
  Trophy,
  Users,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Logo } from "@/components/shared/logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/theme-toggle";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { href: "/student/dashboard", icon: LayoutDashboard, label: "Timetable" },
    { href: "/student/lessons", icon: BookOpen, label: "Lessons" },
    { href: "/student/notifications", icon: Bell, label: "Notifications" },
    { href: "/student/achievements", icon: Trophy, label: "Achievements" },
    { href: "/student/leaderboard", icon: Users, label: "Leaderboard" },
  ];

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="flex items-center justify-between">
          <Logo />
          <ThemeToggle className="mr-2" />
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <Link href={item.href}>
                  <SidebarMenuButton
                    isActive={pathname.startsWith(item.href)}
                    tooltip={item.label}
                  >
                    <item.icon />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="border-t">
          <div className="flex items-center gap-3 p-2">
            <Avatar>
              <AvatarImage src="https://picsum.photos/seed/student/100/100" />
              <AvatarFallback>S</AvatarFallback>
            </Avatar>
            <div className="flex-1 overflow-hidden">
                <p className="truncate font-medium">Alex Doe</p>
                <p className="truncate text-sm text-muted-foreground">alex@example.com</p>
            </div>
            <Link href="/login">
              <SidebarMenuButton tooltip="Logout" className="ml-auto" size="icon">
                <LogOut />
              </SidebarMenuButton>
            </Link>
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-14 items-center gap-4 border-b bg-background/95 px-6 backdrop-blur-sm sticky top-0 z-30">
          <SidebarTrigger />
          <h1 className="text-xl font-semibold font-headline">Student Dashboard</h1>
        </header>
        <main className="flex-1 p-4 md:p-6 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}

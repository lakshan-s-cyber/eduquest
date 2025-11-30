
"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import {
  BookCopy,
  LayoutDashboard,
  LogOut,
  Settings,
  Book,
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
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import React from "react";

const navItems = [
  { href: "/staff/dashboard", icon: LayoutDashboard, label: "Timetable" },
  { href: "/staff/content", icon: BookCopy, label: "Assessments" },
  { href: "/staff/settings", icon: Settings, label: "Settings" },
];

const staffClasses = [
    { name: "I BE CSE A", subject: "C Programming" },
    { name: "I BE CSE B", subject: "BEEE" },
    { name: "I BE CSE C", subject: "Design Thinking" },
];


function StaffLayoutInternal({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const username = searchParams.get('username') || "Admin User";
  const useremail = `${username.toLowerCase().replace(' ', '.')}@eduquest.com`;

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
              <AvatarImage src="" />
              <AvatarFallback>{username.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 overflow-hidden">
                <p className="truncate font-medium">{username}</p>
                <p className="truncate text-sm text-muted-foreground">{useremail}</p>
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
          <div className="flex items-center gap-2">
            <Book className="h-5 w-5 text-muted-foreground" />
            <div className="flex items-center gap-2 flex-wrap">
                {staffClasses.map(c => (
                    <Badge key={c.name} variant="secondary" className="font-normal">{c.name} - {c.subject}</Badge>
                ))}
            </div>
          </div>
        </header>
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default function StaffLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <StaffLayoutInternal>{children}</StaffLayoutInternal>
        </React.Suspense>
    )
}


"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import {
  Bell,
  BookOpen,
  Calendar,
  FlaskConical,
  LayoutDashboard,
  LogOut,
  MessageSquare,
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
import { PlaceHolderImages } from "@/lib/placeholder-images";
import React from "react";
import { cn } from "@/lib/utils";


function StudentLayoutInternal({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const username = searchParams.get('username') || "Student";
  const useremail = `${username.toLowerCase().replace(' ', '.')}@example.com`

  const background = PlaceHolderImages.find(p => p.id === 'student-background');

  const navItems = [
    { href: "/student/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/student/lessons", icon: BookOpen, label: "Lessons" },
    { href: "/student/timetable", icon: Calendar, label: "Timetable" },
    { href: "/student/tools", icon: FlaskConical, label: "Tools" },
    { href: "/student/achievements", icon: Trophy, label: "Achievements" },
    { href: "/student/leaderboard", icon: Users, label: "Leaderboard" },
    { href: "/student/forum", icon: MessageSquare, label: "Forum" },
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
                <Link href={`${item.href}?username=${encodeURIComponent(username)}`}>
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
        <main className={cn(
            "relative flex-1 bg-secondary",
             // Don't show background image on the main dashboard
            !["/student/dashboard", "/student/timetable"].includes(pathname) && "p-4 md:p-6 overflow-hidden"
          )}>
          {background && !["/student/dashboard", "/student/timetable"].includes(pathname) && (
             <Image
              src={background.imageUrl}
              alt={background.description}
              fill
              className="object-cover -z-10 opacity-5"
              data-ai-hint={background.imageHint}
            />
          )}
          {!["/student/dashboard", "/student/timetable"].includes(pathname) && <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />}
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default function StudentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <StudentLayoutInternal>{children}</StudentLayoutInternal>
        </React.Suspense>
    )
}

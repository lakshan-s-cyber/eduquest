
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Bell,
  Code2,
  Crown,
  FileText,
  PlaySquare,
} from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import {
  CircularProgress,
} from "@/components/ui/circular-progress";
import { cn } from "@/lib/utils";


const announcements = [
  {
    id: "ANNOUNCE-001",
    teacher: "Dr. Sathya Balaji",
    avatar: "",
    date: "2 days ago",
    text: "Reminder: The quiz on Pointers in C is due this Friday. Make sure to review the material.",
  },
  {
    id: "ANNOUNCE-002",
    teacher: "Admin",
    avatar: "",
    date: "4 days ago",
    text: "The platform will be under maintenance this Friday at 10 PM for scheduled updates.",
  }
]

const subjectProgress = [
    { subject: "C Programming", progress: 60, color: "bg-blue-500" },
    { subject: "Mathematics", progress: 80, color: "bg-green-500" },
    { subject: "BEEE", progress: 45, color: "bg-yellow-500" },
    { subject: "English", progress: 75, color: "bg-purple-500" },
];

const leaderboard = [
    { rank: 1, name: "Lakshan S", avatar: "" },
    { rank: 2, name: "Madhumitha S", avatar: "" },
    { rank: 3, name: "Manuvarsha E", avatar: "" },
];

const tools = [
    { name: "Compiler", icon: <Code2 className="h-6 w-6 text-primary" />, href: "#" },
    { name: "Visualizer", icon: <PlaySquare className="h-6 w-6 text-primary" />, href: "/student/tools/falstad" },
    { name: "Practice", icon: <FileText className="h-6 w-6 text-primary" />, href: "/student/lessons" },
];

const timetable = [
    { day: "Mon", subject: "C Prog", color: "bg-blue-500" },
    { day: "Tue", subject: "D. Thinking", color: "bg-indigo-500" },
    { day: "Wed", subject: "BEEE", color: "bg-yellow-500" },
    { day: "Thu", subject: "English", color: "bg-purple-500" },
    { day: "Fri", subject: "Tamil", color: "bg-pink-500" },
];

function StudentDashboardInternal() {
  const searchParams = useSearchParams();
  const username = searchParams.get('username') || 'Student';

  return (
    <div className="grid gap-8 p-4 md:p-6 bg-secondary">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">Hello, {username}!</h1>
            <p className="text-muted-foreground">Welcome back to your learning dashboard.</p>
        </div>
        <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full">
                <Bell className="h-5 w-5"/>
                <span className="sr-only">Notifications</span>
            </Button>
            <Avatar className="h-12 w-12 border-2 border-background">
                <AvatarImage src="" alt={username}/>
                <AvatarFallback>{username.charAt(0)}</AvatarFallback>
            </Avatar>
        </div>
      </div>
      
      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
            {/* Performance Card */}
            <Card>
                <CardHeader>
                    <CardTitle>My Performance</CardTitle>
                    <CardDescription>An overview of your academic progress.</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="flex justify-center items-center">
                         <CircularProgress value={65} size="lg" />
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-semibold text-center md:text-left">Progress by Subject</h3>
                        {subjectProgress.map(s => (
                            <div key={s.subject}>
                                <div className="flex justify-between items-center mb-1">
                                    <p className="text-sm font-medium">{s.subject}</p>
                                    <p className="text-sm text-muted-foreground">{s.progress}%</p>
                                </div>
                                <Progress value={s.progress} className="h-2" indicatorClassName={s.color} />
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Announcements Card */}
            <Card>
                <CardHeader>
                    <CardTitle>Announcements</CardTitle>
                     <CardDescription>Updates from your teachers and the institution.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {announcements.map(item => (
                        <div key={item.id} className="flex items-start gap-4 p-4 rounded-lg bg-secondary">
                             <Avatar className="h-10 w-10 border">
                                <AvatarImage src={item.avatar} />
                                <AvatarFallback>{item.teacher.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <div className="flex justify-between items-center">
                                    <p className="font-semibold">{item.teacher}</p>
                                    <p className="text-xs text-muted-foreground">{item.date}</p>
                                </div>
                                <p className="text-sm text-muted-foreground">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
            {/* Timetable Card */}
            <Card>
                <CardHeader>
                    <CardTitle>My Timetable</CardTitle>
                    <CardDescription>Your schedule for this week.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {timetable.map(item => (
                        <div key={item.day} className="flex items-center gap-4">
                            <div className="font-semibold text-sm w-10">{item.day}</div>
                            <div className="flex items-center gap-2 flex-1">
                                <span className={cn("h-2 w-2 rounded-full", item.color)}></span>
                                <span className="text-sm text-muted-foreground">{item.subject}</span>
                            </div>
                            <Button variant="ghost" size="sm" asChild>
                                <Link href="/student/dashboard">View</Link>
                            </Button>
                        </div>
                    ))}
                </CardContent>
            </Card>

            {/* Leaderboard Card */}
            <Card>
                <CardHeader>
                    <CardTitle>Leaderboard</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                     {leaderboard.map(item => (
                        <div key={item.rank} className="flex items-center gap-4">
                           <div className="font-bold text-lg w-6 text-center">{item.rank === 1 ? <Crown className="h-5 w-5 text-yellow-500"/> : item.rank}</div>
                           <Avatar className="h-9 w-9">
                                <AvatarImage src={item.avatar} />
                                <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                           </Avatar>
                           <p className="font-medium text-sm flex-1">{item.name}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>

            {/* Tools Card */}
            <Card>
                <CardHeader>
                    <CardTitle>Quick Tools</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-around items-center">
                    {tools.map(tool => (
                        <Link href={tool.href} key={tool.name}>
                            <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                                {tool.icon}
                                <p className="text-xs font-medium">{tool.name}</p>
                            </div>
                        </Link>
                    ))}
                </CardContent>
            </Card>
        </div>

      </div>
    </div>
  );
}

export default function StudentDashboard() {
    return (
        <React.Suspense fallback={<div className="p-6">Loading...</div>}>
            <StudentDashboardInternal />
        </React.Suspense>
    );
}

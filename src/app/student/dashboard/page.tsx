
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  BookOpenCheck,
  BrainCircuit,
  FileText,
  FlaskConical,
  Rocket,
  Trophy,
} from "lucide-react";
import Link from "next/link";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { WeeklyTimetable, ScheduleItem } from "@/components/shared/weekly-timetable";
import { useSearchParams } from "next/navigation";
import React from "react";

const assignedWork = [
  {
    id: "c-pointers",
    title: "Pointers in C",
    category: "C Programming",
    points: 200,
    icon: <FileText className="h-8 w-8 text-primary" />,
    status: "Pending",
  },
  {
    id: "math-int-calc",
    title: "Integral Calculus",
    category: "Mathematics",
    points: 250,
    icon: <Rocket className="h-8 w-8 text-primary" />,
    status: "Due",
  },
  {
    id: "eee-lab",
    title: "Lab Report 1",
    category: "BEEE",
    points: 180,
    icon: <FlaskConical className="h-8 w-8 text-primary" />,
    status: "Due",
  },
];


const achievements = [
  { name: "First Steps", icon: <BookOpenCheck className="h-6 w-6" /> },
  { name: "Science Whiz", icon: <FlaskConical className="h-6 w-6" /> },
  { name: "Curious Mind", icon: <BrainCircuit className="h-6 w-6" /> },
];

const chartData = [
  { month: "January", lessons: 10 },
  { month: "February", lessons: 14 },
  { month: "March", lessons: 8 },
  { month: "April", lessons: 18 },
  { month: "May", lessons: 12 },
  { month: "June", lessons: 22 },
]

const chartConfig = {
  lessons: {
    label: "Lessons Completed",
    color: "hsl(var(--primary))",
  },
}

const studentSchedule: ScheduleItem[] = [
    { day: "Monday", time: "09:00 - 10:00", subject: "C Programming" },
    { day: "Monday", time: "10:00 - 11:00", subject: "Calculus" },
    { day: "Monday", time: "11:00 - 12:00", subject: "BEEE" },
    { day: "Monday", time: "12:00 - 01:00", subject: "Lunch" },
    { day: "Monday", time: "01:00 - 02:00", subject: "Free Period" },
    { day: "Monday", time: "02:00 - 03:00", subject: "Free Period" },
    { day: "Tuesday", time: "09:00 - 10:00", subject: "Free Period" },
    { day: "Tuesday", time: "10:00 - 11:00", subject: "Design Thinking" },
    { day: "Tuesday", time: "11:00 - 12:00", subject: "C Programming" },
    { day: "Tuesday", time: "12:00 - 01:00", subject: "Lunch" },
    { day: "Tuesday", time: "01:00 - 02:00", subject: "Calculus" },
    { day: "Tuesday", time: "02:00 - 03:00", subject: "Free Period" },
    { day: "Wednesday", time: "09:00 - 10:00", subject: "C Programming" },
    { day: "Wednesday", time: "10:00 - 11:00", subject: "Free Period" },
    { day: "Wednesday", time: "11:00 - 12:00", subject: "BEEE" },
    { day: "Wednesday", time: "12:00 - 01:00", subject: "Lunch" },
    { day: "Wednesday", time: "01:00 - 02:00", subject: "Free Period" },
    { day: "Wednesday", time: "02:00 - 03:00", subject: "Free Period" },
    { day: "Thursday", time: "09:00 - 10:00", subject: "Free Period" },
    { day: "Thursday", time: "10:00 - 11:00", subject: "English" },
    { day: "Thursday", time: "11:00 - 12:00", subject: "Free Period" },
    { day: "Thursday", time: "12:00 - 01:00", subject: "Lunch" },
    { day: "Thursday", time: "01:00 - 02:00", subject: "Calculus" },
    { day: "Thursday", time: "02:00 - 03:00", subject: "Free Period" },
    { day: "Friday", time: "09:00 - 10:00", subject: "Tamil" },
    { day: "Friday", time: "10:00 - 11:00", subject: "Free Period" },
    { day: "Friday", time: "11:00 - 12:00", subject: "English" },
    { day: "Friday", time: "12:00 - 01:00", subject: "Lunch" },
    { day: "Friday", time: "01:00 - 02:00", subject: "Free Period" },
    { day: "Friday", time: "02:00 - 03:00", subject: "Free Period" },
];

function StudentDashboardInternal() {
  const searchParams = useSearchParams();
  const username = searchParams.get('username') || 'Student';

  return (
    <div className="grid gap-6">
      <h1 className="font-headline text-3xl font-bold tracking-tight">
        Welcome back, {username}!
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Overall Progress</CardTitle>
            <CardDescription>You've completed 12 out of 50 lessons.</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={24} className="h-3" />
            <p className="mt-2 text-sm text-muted-foreground">24% completed</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Points Earned</CardTitle>
            <CardDescription>Keep it up!</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-primary">1,250</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Achievements</CardTitle>
            <CardDescription>Your unlocked badges.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            {achievements.map((ach) => (
              <div key={ach.name} className="flex flex-col items-center gap-2">
                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                    {ach.icon}
                </div>
                <p className="text-xs font-medium">{ach.name}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Continue Your Quest</CardTitle>
            <CardDescription>Pick up where you left off. Here are your pending assignments.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {assignedWork.map((work) => (
              <div
                key={work.title}
                className="flex items-center gap-4 rounded-lg border p-4 transition-all hover:bg-accent/50"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-secondary">
                  {work.icon}
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{work.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {work.category}
                  </p>
                </div>
                <Badge variant="outline" className="text-primary border-primary">{work.points} pts</Badge>
                <Button asChild size="sm">
                  <Link href={`/student/lessons/assignment/${work.id}`}>Start</Link>
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Progress</CardTitle>
              <CardDescription>Lessons completed per month.</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[250px] w-full">
                <BarChart accessibilityLayer data={chartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dot" />}
                  />
                  <Bar dataKey="lessons" fill="var(--color-lessons)" radius={8} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>
       <WeeklyTimetable 
            title="My Weekly Timetable"
            description="Your class schedule for the week."
            scheduleData={studentSchedule}
        />
    </div>
  );
}

export default function StudentDashboard() {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <StudentDashboardInternal />
        </React.Suspense>
    );
}


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
  Calculator,
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
import { ChatPanel } from "@/components/chat/chat-panel";
import { WeeklyTimetable, ScheduleItem } from "@/components/shared/weekly-timetable";

const lessons = [
  {
    title: "Introduction to Algebra",
    category: "Mathematics",
    points: 150,
    icon: <Calculator className="h-8 w-8 text-primary" />,
  },
  {
    title: "The Solar System",
    category: "Science",
    points: 200,
    icon: <Rocket className="h-8 w-8 text-primary" />,
  },
  {
    title: "Basics of Chemistry",
    category: "Science",
    points: 180,
    icon: <FlaskConical className="h-8 w-8 text-primary" />,
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
    { day: "Monday", time: "09:00 - 10:00", subject: "Mathematics" },
    { day: "Monday", time: "11:00 - 12:00", subject: "Science" },
    { day: "Tuesday", time: "10:00 - 11:00", subject: "History" },
    { day: "Wednesday", time: "09:00 - 10:00", subject: "Mathematics" },
    { day: "Wednesday", time: "11:00 - 12:00", subject: "Literature" },
    { day: "Thursday", time: "10:00 - 11:00", subject: "History" },
    { day: "Thursday", time: "01:00 - 02:00", subject: "Science" },
    { day: "Friday", time: "09:00 - 10:00", subject: "Literature" },
];

export default function StudentDashboard() {
  return (
    <div className="grid gap-6">
      <h1 className="font-headline text-3xl font-bold tracking-tight">
        Welcome back, Alex!
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
            <CardDescription>Pick up where you left off.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {lessons.map((lesson) => (
              <div
                key={lesson.title}
                className="flex items-center gap-4 rounded-lg border p-4 transition-all hover:bg-accent/50"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-secondary">
                  {lesson.icon}
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{lesson.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {lesson.category}
                  </p>
                </div>
                <Badge variant="outline" className="text-primary border-primary">{lesson.points} pts</Badge>
                <Button asChild size="sm">
                  <Link href="#">Start</Link>
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
        <div className="space-y-6">
          <Card>
            <CardHeader>
                <CardTitle>AI Assistant</CardTitle>
                <CardDescription>Ask me anything about your lessons!</CardDescription>
            </CardHeader>
            <CardContent>
                <ChatPanel />
            </CardContent>
          </Card>
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

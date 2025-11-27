
"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { WeeklyTimetable, ScheduleItem } from "@/components/shared/weekly-timetable";

const classesData = [
  {
    id: "class-1-be-cse-a",
    name: "I BE CSE A",
    students: [
      { name: "Avanthika", progress: 75, avatar: "https://picsum.photos/seed/student7/100/100" },
      { name: "Amenda", progress: 80, avatar: "https://picsum.photos/seed/student8/100/100" },
    ],
  },
  {
    id: "class-1-be-cse-b",
    name: "I BE CSE B",
    students: [
      { name: "Lakshan S", progress: 85, avatar: "https://picsum.photos/seed/student1/100/100" },
      { name: "Madhumitha S", progress: 92, avatar: "https://picsum.photos/seed/student2/100/100" },
      { name: "Manuvarsha E", progress: 88, avatar: "https://picsum.photos/seed/student3/100/100" },
      { name: "Mahadhi K", progress: 82, avatar: "https://picsum.photos/seed/student4/100/100" },
      { name: "Kabin S", progress: 94, avatar: "https://picsum.photos/seed/student5/100/100" },
      { name: "Jeeva S", progress: 89, avatar: "https://picsum.photos/seed/student6/100/100" },
    ],
  },
  {
    id: "class-1-be-cse-c",
    name: "I BE CSE C",
    students: [
      { name: "Pradhiksha", progress: 78, avatar: "https://picsum.photos/seed/student9/100/100" },
      { name: "Nakshathra", progress: 81, avatar: "https://picsum.photos/seed/student10/100/100" },
    ],
  },
  {
    id: "class-1-be-cse-d",
    name: "I BE CSE D",
    students: [
      { name: "Yazhini", progress: 80, avatar: "https://picsum.photos/seed/student11/100/100" },
      { name: "Shwetha", progress: 85, avatar: "https://picsum.photos/seed/student12/100/100" },
    ],
  },
];

const staffSchedule: ScheduleItem[] = [
    { day: "Monday", time: "09:00 - 10:00", subject: "C Programming", class: "I BE CSE A" },
    { day: "Monday", time: "10:00 - 11:00", subject: "Calculus", class: "I BE CSE B" },
    { day: "Monday", time: "11:00 - 12:00", subject: "BEEE", class: "I BE CSE B" },
    { day: "Tuesday", time: "10:00 - 11:00", subject: "Design Thinking", class: "I BE CSE C" },
    { day: "Wednesday", time: "09:00 - 10:00", subject: "C Programming", class: "I BE CSE A" },
    { day: "Wednesday", time: "11:00 - 12:00", subject: "BEEE", class: "I BE CSE B" },
    { day: "Wednesday", time: "02:00 - 03:00", subject: "Staff Meeting" },
    { day: "Thursday", time: "10:00 - 11:00", subject: "English", class: "I BE CSE C" },
    { day: "Thursday", time: "01:00 - 02:00", subject: "Calculus", class: "I BE CSE B" },
    { day: "Friday", time: "09:00 - 10:00", subject: "Tamil", class: "I BE CSE B" },
];

export default function StaffDashboard() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-6">
         <WeeklyTimetable 
            title="My Weekly Timetable"
            description="Your teaching schedule for the week."
            scheduleData={staffSchedule}
          />
        <Card>
          <CardHeader>
            <CardTitle>Student Progress</CardTitle>
            <CardDescription>
              Select a class to view student progress.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue={classesData[0].id}>
              <TabsList>
                {classesData.map((classInfo) => (
                  <TabsTrigger key={classInfo.id} value={classInfo.id}>
                    {classInfo.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              {classesData.map((classInfo) => (
                <TabsContent key={classInfo.id} value={classInfo.id}>
                  <Card>
                    <CardHeader>
                      <CardTitle>{classInfo.name} - Student List</CardTitle>
                      <CardDescription>
                        Overview of student academic performance.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Student Name</TableHead>
                            <TableHead className="w-[40%]">Progress</TableHead>
                            <TableHead className="text-right">Rate</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {classInfo.students.length > 0 ? (
                            classInfo.students.map((student) => (
                              <TableRow key={student.name}>
                                <TableCell>
                                  <div className="flex items-center gap-3">
                                    <Avatar className="h-9 w-9">
                                      <AvatarImage
                                        src={student.avatar}
                                        alt={student.name}
                                      />
                                      <AvatarFallback>
                                        {student.name.charAt(0)}
                                      </AvatarFallback>
                                    </Avatar>
                                    <span className="font-medium">{student.name}</span>
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <Progress value={student.progress} />
                                </TableCell>
                                <TableCell className="text-right font-semibold">
                                  {student.progress}%
                                </TableCell>
                              </TableRow>
                            ))
                          ) : (
                            <TableRow>
                              <TableCell colSpan={3} className="text-center text-muted-foreground">
                                No students in this class yet.
                              </TableCell>
                            </TableRow>
                          )}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

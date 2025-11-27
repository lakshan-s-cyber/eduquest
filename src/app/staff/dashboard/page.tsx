
"use client";

import React, { useState } from "react";
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
import { Calendar } from "@/components/ui/calendar";

const classesData = [
  {
    id: "class-10a",
    name: "Class 10 - Section A",
    students: [
      { name: "Liam Johnson", progress: 85, avatar: "https://picsum.photos/seed/student11/100/100" },
      { name: "Olivia Williams", progress: 92, avatar: "https://picsum.photos/seed/student12/100/100" },
      { name: "Noah Brown", progress: 78, avatar: "https://picsum.photos/seed/student13/100/100" },
      { name: "Emma Jones", progress: 95, avatar: "https://picsum.photos/seed/student14/100/100" },
    ],
  },
  {
    id: "class-10b",
    name: "Class 10 - Section B",
    students: [
      { name: "Ava Miller", progress: 88, avatar: "https://picsum.photos/seed/student15/100/100" },
      { name: "William Davis", progress: 82, avatar: "https://picsum.photos/seed/student16/100/100" },
      { name: "Sophia Garcia", progress: 91, avatar: "https://picsum.photos/seed/student17/100/100" },
      { name: "James Rodriguez", progress: 76, avatar: "https://picsum.photos/seed/student18/100/100" },
    ],
  },
  {
    id: "class-11a",
    name: "Class 11 - Section A",
    students: [
      { name: "Isabella Martinez", progress: 94, avatar: "https://picsum.photos/seed/student19/100/100" },
      { name: "Mason Hernandez", progress: 89, avatar: "https://picsum.photos/seed/student20/100/100" },
      { name: "Charlotte Lopez", progress: 93, avatar: "https://picsum.photos/seed/student21/100/100" },
    ],
  },
];

export default function StaffDashboard() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-headline text-3xl font-bold tracking-tight">
            Student Progress
          </h1>
          <p className="text-muted-foreground">
            Track the academic progress of students in your classes.
          </p>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Class Management</CardTitle>
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
                          {classInfo.students.map((student) => (
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
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>My Schedule</CardTitle>
              <CardDescription>Your upcoming events and deadlines.</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

"use client";

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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const students = [
    { name: "Liam Johnson", class: "Class 10 - Section A", avatar: "https://picsum.photos/seed/student11/100/100" },
    { name: "Olivia Williams", class: "Class 10 - Section A", avatar: "https://picsum.photos/seed/student12/100/100" },
    { name: "Noah Brown", class: "Class 10 - Section A", avatar: "https://picsum.photos/seed/student13/100/100" },
    { name: "Emma Jones", class: "Class 10 - Section A", avatar: "https://picsum.photos/seed/student14/100/100" },
    { name: "Ava Miller", class: "Class 10 - Section B", avatar: "https://picsum.photos/seed/student15/100/100" },
    { name: "William Davis", class: "Class 10 - Section B", avatar: "https://picsum.photos/seed/student16/100/100" },
    { name: "Sophia Garcia", class: "Class 10 - Section B", avatar: "https://picsum.photos/seed/student17/100/100" },
    { name: "James Rodriguez", class: "Class 10 - Section B", avatar: "https://picsum.photos/seed/student18/100/100" },
    { name: "Isabella Martinez", class: "Class 11 - Section A", avatar: "https://picsum.photos/seed/student19/100/100" },
    { name: "Mason Hernandez", class: "Class 11 - Section A", avatar: "https://picsum.photos/seed/student20/100/100" },
    { name: "Charlotte Lopez", class: "Class 11 - Section A", avatar: "https://picsum.photos/seed/student21/100/100" },
];


export default function StudentsPage() {
  return (
    <div className="grid gap-6">
        <div>
            <h1 className="font-headline text-3xl font-bold tracking-tight">
                Student Management
            </h1>
            <p className="text-muted-foreground">
                View and manage all students in your classes.
            </p>
        </div>
      <Card>
        <CardHeader>
          <CardTitle>All Students</CardTitle>
          <CardDescription>
            A list of all students enrolled in your classes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student Name</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>
                    <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
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
                    {student.class}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                        <DropdownMenuItem>Message</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">Remove from Class</DropdownMenuItem>
                    </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

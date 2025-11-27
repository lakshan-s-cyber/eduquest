
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookCheck, FileText, Type } from "lucide-react";
import Link from "next/link";

const staffData: { [key: string]: any } = {
  "sathya-balaji": {
    name: "Dr. Sathya Balaji",
    subject: "C programming",
    avatar: "https://picsum.photos/seed/staff1/100/100",
    assignments: [
      { id: "c-intro", title: "Introduction to C", type: "Assignment", status: "Completed", dueDate: "2024-09-10" },
      { id: "c-pointers", title: "Pointers in C", type: "Quiz", status: "Pending", dueDate: "2024-09-18" },
      { id: "c-structs", title: "Structs and Unions", type: "Assignment", status: "Due", dueDate: "2024-09-15" },
    ],
  },
  "sathesh-kumar": {
    name: "Dr. Sathesh Kumar",
    subject: "English",
    avatar: "https://picsum.photos/seed/staff2/100/100",
    assignments: [
        { id: "eng-essay", title: "Compare and Contrast Essay", type: "Assignment", status: "Completed", dueDate: "2024-09-11" },
        { id: "eng-grammar", title: "Advanced Grammar Quiz", type: "Quiz", status: "Pending", dueDate: "2024-09-20" },
        { id: "eng-overdue", title: "Book Report", type: "Assignment", status: "Overdue", dueDate: "2024-09-12" },
    ],
  },
  "sankara-subramaniam": {
    name: "Dr. R. Sankara Subramaniam",
    subject: "Mathematics",
    avatar: "https://picsum.photos/seed/staff3/100/100",
    assignments: [
      { id: "math-vec-calc", title: "Vector Calculus", type: "Quiz", status: "Pending", dueDate: "2024-09-22" },
      { id: "math-int-calc", title: "Integral Calculus", type: "Quiz", status: "Due", dueDate: "2024-09-19" },
    ],
  },
  "elenchezhiyan": {
    name: "Dr. Elenchezhiyan",
    subject: "Basics of Electrical and Electronic Engineering",
    avatar: "https://picsum.photos/seed/staff4/100/100",
    assignments: [
        { id: "eee-basics", title: "Circuit Theory Basics", type: "Assignment", status: "Completed", dueDate: "2024-09-05" },
        { id: "eee-ohms-law", title: "Ohm's Law Quiz", type: "Quiz", status: "Completed", dueDate: "2024-09-12" },
        { id: "eee-lab", title: "Lab Report 1", type: "Assignment", status: "Due", dueDate: "2024-09-17" },
        { id: "eee-semiconductors", title: "Semiconductors Intro", type: "Assignment", status: "Pending", dueDate: "2024-09-25" },
    ],
  },
};

const getStatusBadgeVariant = (status: string) => {
    switch (status) {
        case "Completed":
            return "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/50 dark:text-green-300 dark:border-green-800";
        case "Pending":
            return "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/50 dark:text-blue-300 dark:border-blue-800";
        case "Due":
            return "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/50 dark:text-yellow-300 dark:border-yellow-800";
        case "Overdue":
            return "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/50 dark:text-red-300 dark:border-red-800";
        default:
            return "outline";
    }
}

const getWorkIcon = (type: string) => {
    switch(type) {
        case 'Quiz':
            return <FileText className="h-6 w-6 text-primary" />;
        case 'Assignment':
            return <BookCheck className="h-6 w-6 text-primary" />;
        default:
            return <Type className="h-6 w-6 text-primary" />;
    }
}


export default function StaffAssignmentsPage({ params }: { params: { staffId: string } }) {
  const teacher = staffData[params.staffId];

  if (!teacher) {
    return (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <h1 className="text-2xl font-bold">Teacher not found</h1>
            <p className="text-muted-foreground">The teacher you are looking for does not exist.</p>
            <Button asChild className="mt-4">
                <Link href="/student/lessons">Go Back</Link>
            </Button>
      </div>
    );
  }

  return (
    <div className="grid gap-6">
        <div className="flex items-center gap-4">
            <Button asChild variant="ghost" size="icon">
                <Link href="/student/lessons">
                    <ArrowLeft className="h-5 w-5" />
                </Link>
            </Button>
            <Avatar className="h-16 w-16">
                <AvatarImage src={teacher.avatar} alt={teacher.name} />
                <AvatarFallback>{teacher.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
                <h1 className="font-headline text-3xl font-bold tracking-tight">
                    {teacher.name}
                </h1>
                <p className="text-muted-foreground font-medium">{teacher.subject}</p>
            </div>
        </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Assigned Work</CardTitle>
          <CardDescription>
            All assignments and quizzes from {teacher.name}.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {teacher.assignments.map((work: any) => (
                <div key={work.id} className="flex items-center gap-4 rounded-lg border p-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                        {getWorkIcon(work.type)}
                    </div>
                    <div className="flex-1">
                        <p className="font-semibold">{work.title}</p>
                        <p className="text-sm text-muted-foreground">Due: {work.dueDate}</p>
                    </div>
                    <Badge variant="outline" className={getStatusBadgeVariant(work.status)}>{work.status}</Badge>
                    <Button asChild size="sm">
                      <Link href={`/student/lessons/assignment/${work.id}`}>View</Link>
                    </Button>
                </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

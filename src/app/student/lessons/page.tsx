
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight, BookCheck, ClipboardList } from "lucide-react";
import { Button } from '@/components/ui/button';

const staff = [
  {
    id: "evelyn-reed",
    name: "Dr. Evelyn Reed",
    subject: "Mathematics",
    avatar: "https://picsum.photos/seed/staff1/100/100",
    workCount: 3,
  },
  {
    id: "marcus-thorne",
    name: "Mr. Marcus Thorne",
    subject: "Science",
    avatar: "https://picsum.photos/seed/staff2/100/100",
    workCount: 5,
  },
  {
    id: "isabella-cruz",
    name: "Ms. Isabella Cruz",
    subject: "History",
    avatar: "https://picsum.photos/seed/staff3/100/100",
    workCount: 2,
  },
  {
    id: "julian-greene",
    name: "Mr. Julian Greene",
    subject: "Literature",
    avatar: "https://picsum.photos/seed/staff4/100/100",
    workCount: 4,
  },
];

export default function LessonsPage() {
  return (
    <div className="grid gap-6">
      <h1 className="font-headline text-3xl font-bold tracking-tight">
        My Lessons
      </h1>
      <Card>
        <CardHeader>
          <CardTitle>Your Teachers</CardTitle>
          <CardDescription>
            Select a teacher to view your assigned lessons and quizzes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {staff.map((teacher) => (
              <Link href={`/student/lessons/${teacher.id}`} key={teacher.id}>
                  <div className="flex items-center gap-4 rounded-lg border p-4 transition-all hover:bg-accent/50 cursor-pointer">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={teacher.avatar} alt={teacher.name} />
                      <AvatarFallback>{teacher.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-semibold text-lg">{teacher.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {teacher.subject}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <BookCheck className="h-4 w-4" />
                        <span>{teacher.workCount} items</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

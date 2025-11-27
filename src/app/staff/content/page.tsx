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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MoreHorizontal, PlusCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const initialQuizzes = [
  {
    id: "QUIZ001",
    title: "Algebra Basics",
    description: "A quiz covering the fundamental concepts of algebra.",
    questions: 15,
    status: "Draft",
  },
  {
    id: "QUIZ002",
    title: "Photosynthesis",
    description: "Test your knowledge of the process of photosynthesis in plants.",
    questions: 20,
    status: "Published",
  },
  {
    id: "QUIZ003",
    title: "World War II Major Events",
    description: "A quiz on the major events and turning points of WWII.",
    questions: 25,
    status: "Published",
  },
  {
    id: "QUIZ004",
    title: "Shakespeare's Sonnets",
    description: "Analyze and interpret some of Shakespeare's most famous sonnets.",
    questions: 10,
    status: "Archived",
  },
];

export default function ContentManagementPage() {
  const [quizzes, setQuizzes] = useState(initialQuizzes);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCreateQuiz = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newQuiz = {
        id: `QUIZ${(quizzes.length + 1).toString().padStart(3, '0')}`,
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        questions: 0,
        status: "Draft",
    };
    setQuizzes(prevQuizzes => [newQuiz, ...prevQuizzes]);
    setIsDialogOpen(false);
  }

  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-headline text-3xl font-bold tracking-tight">
            Quiz Management
          </h1>
          <p className="text-muted-foreground">
            Create, edit, and assign quizzes to your students.
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Create New Quiz
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create New Quiz</DialogTitle>
              <DialogDescription>
                Fill in the details below to create a new quiz. You can add questions later.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleCreateQuiz}>
                <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="title" className="text-right">
                    Title
                    </Label>
                    <Input id="title" name="title" className="col-span-3" required />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="description" className="text-right">
                    Description
                    </Label>
                    <Textarea id="description" name="description" className="col-span-3" required />
                </div>
                </div>
                 <DialogFooter>
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">Cancel</Button>
                    </DialogClose>
                    <Button type="submit">Create Quiz</Button>
                </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quiz Library</CardTitle>
          <CardDescription>
            Here is a list of all available quizzes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead className="hidden md:table-cell">Description</TableHead>
                <TableHead className="text-center">Questions</TableHead>
                <TableHead className="text-center">Status</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {quizzes.map((quiz) => (
                <TableRow key={quiz.id}>
                  <TableCell className="font-medium">{quiz.title}</TableCell>
                  <TableCell className="hidden md:table-cell max-w-sm truncate text-muted-foreground">{quiz.description}</TableCell>
                  <TableCell className="text-center font-medium">{quiz.questions}</TableCell>
                  <TableCell className="text-center">
                    <Badge variant={
                        quiz.status === 'Published' ? 'default' : 
                        quiz.status === 'Draft' ? 'secondary' : 'outline'
                    } className={
                        quiz.status === 'Published' ? 'bg-green-100 text-green-800' : ''
                    }>
                      {quiz.status}
                    </Badge>
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
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Assign</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
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


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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const initialQuizzes = [
  {
    id: "QUIZ001",
    title: "Quiz on the topic pointers",
    description: "A quiz covering the fundamental concepts of pointers in C.",
    questions: 5,
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

const initialActivities = [
    {
      id: "ACT001",
      title: "Build a Volcano",
      description: "A hands-on project to build and erupt a model volcano.",
      subject: "Science",
      status: "Published",
    },
    {
      id: "ACT002",
      title: "Book Report: The Great Gatsby",
      description: "Write a 500-word report on the themes of the novel.",
      subject: "Literature",
      status: "Draft",
    },
];

const classes = ["I BE CSE A", "I BE CSE B", "I BE CSE C", "I BE CSE D"];

type Quiz = typeof initialQuizzes[0];
type Activity = typeof initialActivities[0];

export default function ContentManagementPage() {
  const [quizzes, setQuizzes] = useState(initialQuizzes);
  const [activities, setActivities] = useState(initialActivities);
  const [isQuizDialogOpen, setIsQuizDialogOpen] = useState(false);
  const [isActivityDialogOpen, setIsActivityDialogOpen] = useState(false);
  const [isAssignDialogOpen, setIsAssignDialogOpen] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const { toast } = useToast();

  const handleCreateQuiz = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newQuiz = {
        id: `QUIZ${(quizzes.length + 1).toString().padStart(3, '0')}`,
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        questions: 0,
        status: "Draft" as "Draft",
    };
    setQuizzes(prevQuizzes => [newQuiz, ...prevQuizzes]);
    setIsQuizDialogOpen(false);
  };
  
  const handleCreateActivity = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newActivity = {
        id: `ACT${(activities.length + 1).toString().padStart(3, '0')}`,
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        subject: formData.get('subject') as string,
        status: "Draft" as "Draft",
    };
    setActivities(prevActivities => [newActivity, ...prevActivities]);
    setIsActivityDialogOpen(false);
  };

  const handleAssignQuiz = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const selectedClass = formData.get('class') as string;
      if (selectedQuiz && selectedClass) {
          console.log(`Assigning quiz "${selectedQuiz.title}" to ${selectedClass}`);
          toast({
              title: "Quiz Assigned!",
              description: `"${selectedQuiz.title}" has been assigned to ${selectedClass}.`,
          });
          setIsAssignDialogOpen(false);
          setSelectedQuiz(null);
      }
  };

  const openAssignDialog = (quiz: Quiz) => {
    setSelectedQuiz(quiz);
    setIsAssignDialogOpen(true);
  };

  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-headline text-3xl font-bold tracking-tight">
            Assessments
          </h1>
          <p className="text-muted-foreground">
            Create, edit, and assign quizzes and activities to your students.
          </p>
        </div>
      </div>

      <Tabs defaultValue="quizzes">
        <div className="flex items-center justify-between">
            <TabsList>
                <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
                <TabsTrigger value="activities">Activities</TabsTrigger>
            </TabsList>
             <Dialog>
                <DialogTrigger asChild>
                    <Button>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Create New
                    </Button>
                </DialogTrigger>
                <DialogContent>
                     <DialogHeader>
                        <DialogTitle>Create New Assessment</DialogTitle>
                        <DialogDescription>
                            What would you like to create?
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-around pt-4">
                         <Button onClick={() => { setIsQuizDialogOpen(true); }}>New Quiz</Button>
                         <Button onClick={() => { setIsActivityDialogOpen(true); }}>New Activity</Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>

        <TabsContent value="quizzes">
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
                                <DropdownMenuItem onClick={() => openAssignDialog(quiz)}>Assign</DropdownMenuItem>
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
        </TabsContent>
        <TabsContent value="activities">
            <Card>
                <CardHeader>
                    <CardTitle>Activity Library</CardTitle>
                    <CardDescription>Manage hands-on projects and assignments.</CardDescription>
                </CardHeader>
                 <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Title</TableHead>
                                <TableHead className="hidden md:table-cell">Description</TableHead>
                                <TableHead>Subject</TableHead>
                                <TableHead className="text-center">Status</TableHead>
                                <TableHead>
                                <span className="sr-only">Actions</span>
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                             {activities.map((activity) => (
                                <TableRow key={activity.id}>
                                    <TableCell className="font-medium">{activity.title}</TableCell>
                                    <TableCell className="hidden md:table-cell max-w-sm truncate text-muted-foreground">{activity.description}</TableCell>
                                    <TableCell>{activity.subject}</TableCell>
                                    <TableCell className="text-center">
                                        <Badge variant={activity.status === 'Published' ? 'default' : 'secondary'}
                                            className={activity.status === 'Published' ? 'bg-green-100 text-green-800' : ''}
                                        >
                                            {activity.status}
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
                                            <DropdownMenuItem>View Completions</DropdownMenuItem>
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
        </TabsContent>
      </Tabs>


      <Dialog open={isQuizDialogOpen} onOpenChange={setIsQuizDialogOpen}>
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
      
      <Dialog open={isActivityDialogOpen} onOpenChange={setIsActivityDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                  <DialogTitle>Create New Activity</DialogTitle>
                  <DialogDescription>
                      Fill in the details for the new activity.
                  </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleCreateActivity}>
                  <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="title" className="text-right">Title</Label>
                          <Input id="title" name="title" className="col-span-3" required />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="description" className="text-right">Description</Label>
                          <Textarea id="description" name="description" className="col-span-3" required />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="subject" className="text-right">Subject</Label>
                          <Input id="subject" name="subject" className="col-span-3" required />
                      </div>
                  </div>
                  <DialogFooter>
                      <DialogClose asChild>
                          <Button type="button" variant="secondary">Cancel</Button>
                      </DialogClose>
                      <Button type="submit">Create Activity</Button>
                  </DialogFooter>
              </form>
          </DialogContent>
      </Dialog>

      <Dialog open={isAssignDialogOpen} onOpenChange={setIsAssignDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                  <DialogTitle>Assign Quiz: {selectedQuiz?.title}</DialogTitle>
                  <DialogDescription>
                      Select a class to assign this quiz to.
                  </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleAssignQuiz}>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="class" className="text-right">
                            Class
                        </Label>
                        <Select name="class" required>
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder="Select a class" />
                            </SelectTrigger>
                            <SelectContent>
                                {classes.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">Cancel</Button>
                    </DialogClose>
                    <Button type="submit">Assign</Button>
                </DialogFooter>
              </form>
          </DialogContent>
      </Dialog>
    </div>
  );
}

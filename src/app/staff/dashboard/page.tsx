import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
import { MoreHorizontal, PlusCircle } from "lucide-react";

const lessons = [
  {
    id: "LES-001",
    title: "Introduction to Algebra",
    category: "Mathematics",
    points: 150,
    status: "Published",
  },
  {
    id: "LES-002",
    title: "The Solar System",
    category: "Science",
    points: 200,
    status: "Published",
  },
  {
    id: "LES-003",
    title: "World War II",
    category: "History",
    points: 250,
    status: "Draft",
  },
  {
    id: "LES-004",
    title: "Shakespeare's Sonnets",
    category: "Literature",
    points: 180,
    status: "Published",
  },
  {
    id: "LES-005",
    title: "Basics of Chemistry",
    category: "Science",
    points: 180,
    status: "Archived",
  },
];

export default function StaffDashboard() {
  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-headline text-3xl font-bold tracking-tight">
            Content Management
          </h1>
          <p className="text-muted-foreground">
            Manage your educational lessons here.
          </p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New Lesson
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Lessons</CardTitle>
          <CardDescription>
            A list of all lessons in the system.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-center">Points</TableHead>
                <TableHead className="text-center">Status</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {lessons.map((lesson) => (
                <TableRow key={lesson.id}>
                  <TableCell className="font-medium">{lesson.title}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{lesson.category}</Badge>
                  </TableCell>
                  <TableCell className="text-center">{lesson.points}</TableCell>
                  <TableCell className="text-center">
                    <Badge
                      variant={
                        lesson.status === "Published"
                          ? "default"
                          : lesson.status === "Draft"
                          ? "outline"
                          : "destructive"
                      }
                      className={
                        lesson.status === 'Published' 
                        ? 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/50 dark:text-green-300 dark:border-green-800' 
                        : lesson.status === 'Draft' 
                        ? 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/50 dark:text-yellow-300 dark:border-yellow-800'
                        : ''
                      }
                    >
                      {lesson.status}
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
                        <DropdownMenuItem>Archive</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          Delete
                        </DropdownMenuItem>
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

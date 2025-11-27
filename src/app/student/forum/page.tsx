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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, PlusCircle } from "lucide-react";

const forumPosts = [
    {
        id: "POST-001",
        title: "Differential Calculus",
        author: "Madhumitha S",
        authorAvatar: "",
        category: "Calculus",
        replies: 5,
        lastActivity: "2 hours ago",
    },
    {
        id: "POST-002",
        title: "Pointers",
        author: "Kabin S",
        authorAvatar: "",
        category: "C Programming",
        replies: 12,
        lastActivity: "5 hours ago",
    },
    {
        id: "POST-003",
        title: "Letter Writing Format",
        author: "Keerthana",
        authorAvatar: "",
        category: "English",
        replies: 8,
        lastActivity: "1 day ago",
    },
    {
        id: "POST-004",
        title: "Sangam Ports",
        author: "Manuvarsha E",
        authorAvatar: "",
        category: "Tamil",
        replies: 3,
        lastActivity: "3 days ago",
    },
];

const categoryColors: { [key: string]: string } = {
    "Calculus": "bg-blue-100 text-blue-800 border-blue-200",
    "C Programming": "bg-sky-100 text-sky-800 border-sky-200",
    "English": "bg-purple-100 text-purple-800 border-purple-200",
    "Tamil": "bg-pink-100 text-pink-800 border-pink-200",
    "General": "bg-gray-100 text-gray-800 border-gray-200",
};


export default function ForumPage() {
    return (
        <div className="grid gap-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="font-headline text-3xl font-bold tracking-tight">
                        Study Community Forum
                    </h1>
                    <p className="text-muted-foreground">
                        Connect with peers, ask questions, and share knowledge.
                    </p>
                </div>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Create New Post
                </Button>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Active Discussions</CardTitle>
                    <CardDescription>
                        Join a conversation or start a new one.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[60%]">Topic</TableHead>
                                <TableHead className="text-center">Category</TableHead>
                                <TableHead className="text-center">Replies</TableHead>
                                <TableHead className="text-right">Last Activity</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {forumPosts.map((post) => (
                                <TableRow key={post.id} className="cursor-pointer hover:bg-muted/50">
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <Avatar>
                                                <AvatarImage src={post.authorAvatar} alt={post.author} />
                                                <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="font-medium">{post.title}</p>
                                                <p className="text-sm text-muted-foreground">by {post.author}</p>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-center">
                                        <Badge variant="outline" className={`${categoryColors[post.category] || ''}`}>{post.category}</Badge>
                                    </TableCell>
                                    <TableCell className="text-center">
                                        <div className="flex items-center justify-center gap-1 font-medium text-muted-foreground">
                                            <MessageSquare className="h-4 w-4" />
                                            <span>{post.replies}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-right text-muted-foreground">{post.lastActivity}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}

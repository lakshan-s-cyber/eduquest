
"use client";

import React, { useState } from 'react';
import {
    Card,
    CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
import {
  ArrowUp,
  ArrowDown,
  MessageSquare,
  Share2,
  Bookmark,
  Search,
  Plus,
  Tag,
} from "lucide-react";
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from 'next/navigation';


const initialForumPosts = [
    {
        id: "POST-001",
        title: "Struggling with pointer arithmetic in C. Any tips?",
        author: "Madhumitha S",
        authorAvatar: "",
        role: "Student",
        timestamp: "2 hours ago",
        preview: "Hey everyone, I'm having a hard time understanding how pointer arithmetic works, especially with arrays. Can someone explain it in simple terms?",
        tags: ["Coding", "C Programming", "Doubt"],
        votes: 12,
        comments: 5,
    },
    {
        id: "POST-002",
        title: "Announcement: Mid-Term Exam Schedule",
        author: "Dr. Sathya Balaji",
        authorAvatar: "",
        role: "Teacher",
        timestamp: "1 day ago",
        preview: "Please find the attached schedule for the upcoming mid-term examinations. All the best for your preparations!",
        tags: ["Announcements", "Exams"],
        votes: 45,
        comments: 3,
    },
    {
        id: "POST-003",
        title: "Recommended resources for learning Calculus?",
        author: "Kabin S",
        authorAvatar: "",
        role: "Student",
        timestamp: "3 days ago",
        preview: "I'm looking for some good online resources (videos, articles, practice problems) to supplement our calculus lectures. What do you guys recommend?",
        tags: ["Maths", "Calculus", "Resources"],
        votes: 28,
        comments: 15,
    },
    {
        id: "POST-004",
        title: "Tip: Use version control for your coding projects!",
        author: "Admin",
        authorAvatar: "",
        role: "Teacher",
        timestamp: "5 days ago",
        preview: "A quick tip for all aspiring programmers: start using Git and GitHub for your projects. It's a lifesaver for tracking changes and collaborating. Happy to help anyone get started.",
        tags: ["Tips", "Coding", "Best Practices"],
        votes: 52,
        comments: 8,
    },
];

const filterTabs = ["All", "Doubts", "Subject Discussions", "Announcements", "Tips"];
const allTags = ["Maths", "Coding", "Doubt", "Notes", "Announcement", "C Programming", "Calculus", "Resources", "Exams", "Best Practices", "English", "Tamil"];

type ForumPost = typeof initialForumPosts[0];

const ThreadCard = ({ post }: { post: ForumPost }) => {
    return (
        <Card className="flex gap-4 p-4 transition-all hover:shadow-md">
            <div className="flex flex-col items-center gap-1 text-muted-foreground w-12">
                <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-green-500 hover:bg-green-100">
                    <ArrowUp className="h-5 w-5" />
                </Button>
                <span className="font-bold text-lg text-foreground">{post.votes}</span>
                <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-red-500 hover:bg-red-100">
                    <ArrowDown className="h-5 w-5" />
                </Button>
            </div>
            <div className="flex-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Avatar className="h-6 w-6">
                        <AvatarImage src={post.authorAvatar} alt={post.author} />
                        <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="font-semibold text-foreground">{post.author}</span>
                    {post.role === "Teacher" && (
                         <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">Teacher</Badge>
                    )}
                    <span>·</span>
                    <span>{post.timestamp}</span>
                </div>
                <h3 className="font-bold text-lg mb-1">{post.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{post.preview}</p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        {post.tags.map(tag => (
                            <Badge key={tag} variant="outline">{tag}</Badge>
                        ))}
                    </div>
                     <div className="flex items-center gap-2 text-muted-foreground">
                        <Button variant="ghost" size="sm" className="flex items-center gap-1">
                            <MessageSquare className="h-4 w-4" />
                            <span>{post.comments} Comments</span>
                        </Button>
                         <Button variant="ghost" size="icon" className="h-8 w-8"><Share2 className="h-4 w-4" /></Button>
                         <Button variant="ghost" size="icon" className="h-8 w-8"><Bookmark className="h-4 w-4" /></Button>
                    </div>
                </div>
            </div>
        </Card>
    );
};

function ForumPageInternal() {
    const [activeTab, setActiveTab] = useState("All");
    const [forumPosts, setForumPosts] = useState(initialForumPosts);
    const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
    const { toast } = useToast();
    const searchParams = useSearchParams();
    const username = searchParams.get('username') || 'Student';

    const handleCreateThread = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const title = formData.get('title') as string;
        const description = formData.get('description') as string;
        const tag = formData.get('tag') as string;

        const newPost: ForumPost = {
            id: `POST-${(forumPosts.length + 1).toString().padStart(3, '0')}`,
            title,
            author: username,
            authorAvatar: "",
            role: "Student", // Defaulting to student for now
            timestamp: "Just now",
            preview: description.substring(0, 150) + (description.length > 150 ? '...' : ''),
            tags: [tag],
            votes: 0,
            comments: 0,
        };

        setForumPosts(prevPosts => [newPost, ...prevPosts]);

        toast({
            title: "Thread Created!",
            description: `Your new thread "${title}" has been posted.`,
        });
        setIsCreateDialogOpen(false);
    };

    return (
        <div className="grid gap-6 relative">
            {/* Top Navigation */}
            <div className="space-y-4">
                <h1 className="font-headline text-3xl font-bold tracking-tight">Forum</h1>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input placeholder="Search threads, doubts, or topics…" className="pl-10" />
                    </div>
                    <div className="flex items-center gap-2 overflow-x-auto pb-2">
                        {filterTabs.map(tab => (
                            <Button
                                key={tab}
                                variant={activeTab === tab ? "default" : "ghost"}
                                onClick={() => setActiveTab(tab)}
                                className="shrink-0"
                            >
                                {tab}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Thread Feed */}
            <div className="space-y-4">
                {forumPosts.map(post => (
                    <ThreadCard key={post.id} post={post} />
                ))}
            </div>

            {/* Create Thread FAB */}
             <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
                <DialogTrigger asChild>
                    <Button className="fixed bottom-8 right-8 h-14 w-14 rounded-full shadow-lg z-50">
                        <Plus className="h-6 w-6" />
                        <span className="sr-only">Create Thread</span>
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create a New Thread</DialogTitle>
                        <DialogDescription>
                            Share your thoughts, ask a question, or start a discussion.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleCreateThread}>
                        <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                                <Label htmlFor="title">Title</Label>
                                <Input id="title" name="title" placeholder="Enter a clear and concise title" required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea id="description" name="description" placeholder="Explain your topic in more detail..." required rows={5}/>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="tag">Tag</Label>
                                <Select name="tag" required>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a tag for your post" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {allTags.map(tag => (
                                            <SelectItem key={tag} value={tag}>{tag}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button type="button" variant="secondary">Cancel</Button>
                            </DialogClose>
                            <Button type="submit">Post Thread</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default function ForumPage() {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <ForumPageInternal />
        </React.Suspense>
    );
}

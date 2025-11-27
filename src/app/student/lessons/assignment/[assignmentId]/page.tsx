"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AssignmentPage({ params }: { params: { assignmentId: string } }) {
    const router = useRouter();
    const { assignmentId } = params;

    return (
        <div className="grid gap-6">
            <div className="flex items-center gap-4">
                 <Button variant="ghost" size="icon" onClick={() => router.back()}>
                    <ArrowLeft className="h-5 w-5" />
                </Button>
                <div>
                    <h1 className="font-headline text-3xl font-bold tracking-tight">
                        Assignment Details
                    </h1>
                </div>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Assignment: {assignmentId}</CardTitle>
                    <CardDescription>
                        This is a placeholder page for an assignment. The content for the assignment will be displayed here.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Details for assignment {assignmentId} will go here.</p>
                </CardContent>
            </Card>
        </div>
    )
}


"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";

const CWorksheet = () => (
    <Card>
        <CardHeader className="text-center">
            <CardTitle className="font-headline text-2xl tracking-wider">PSG ITECH WORKSHEET</CardTitle>
            <CardDescription>Subject: Introduction to C Programming</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            <div className="space-y-2">
                <p className="font-semibold">1. What is the purpose of the `main()` function in a C program?</p>
            </div>
            <div className="space-y-2">
                <p className="font-semibold">2. What is a variable in C and how do you declare it?</p>
            </div>
            <div className="space-y-2">
                <p className="font-semibold">3. What is the use of the `printf()` function?</p>
            </div>
            <div className="space-y-2">
                <p className="font-semibold">4. What is the difference between `=` and `==` in C?</p>
            </div>
            <div className="space-y-2">
                <p className="font-semibold">5. How do you write a single-line comment in C?</p>
            </div>
        </CardContent>
    </Card>
);

export default function AssignmentPage({ params }: { params: { assignmentId: string } }) {
    const router = useRouter();
    const { assignmentId } = params;

    const renderContent = () => {
        if (assignmentId === 'c-intro') {
            return <CWorksheet />;
        }

        return (
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
        );
    }

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
            {renderContent()}
        </div>
    )
}


"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const CWorksheet = () => (
    <Card>
        <CardHeader className="text-center">
            <CardTitle className="font-headline text-2xl tracking-wider">PSG ITECH WORKSHEET</CardTitle>
            <CardDescription>Subject: Introduction to C Programming</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            <div className="space-y-4">
                <p className="font-semibold">1. What is the purpose of the `main()` function in a C program?</p>
                <div className="pl-4">
                    <p>The `main()` function is the entry point of every C program. Execution of the program starts from this function.</p>
                </div>
            </div>
            <div className="space-y-4">
                <p className="font-semibold">2. What is a variable in C and how do you declare it?</p>
                <div className="pl-4">
                    <p>A variable is a name given to a storage area that our programs can manipulate. To declare an integer variable named `age`, you would write: `int age;`</p>
                </div>
            </div>
            <div className="space-y-4">
                <p className="font-semibold">3. What is the use of the `printf()` function?</p>
                <div className="pl-4">
                    <p>The `printf()` function is used to print output (text, numbers, etc.) to the console.</p>
                </div>
            </div>
            <div className="space-y-4">
                <p className="font-semibold">4. What is the difference between `=` and `==` in C?</p>
                <div className="pl-4">
                    <p>`=` is the assignment operator, used to assign a value to a variable. `==` is the equality operator, used to compare two values.</p>
                </div>
            </div>
            <div className="space-y-4">
                <p className="font-semibold">5. How do you write a single-line comment in C?</p>
                <div className="pl-4">
                    <p>A single-line comment starts with `//`. For example: `// This is a comment`.</p>
                </div>
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


"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const CIntroWorksheet = () => (
    <Card>
        <CardHeader className="text-center">
            <CardTitle className="font-headline text-2xl tracking-wider">PSG ITECH WORKSHEET</CardTitle>
            <CardDescription>Subject: Introduction to C Programming</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
            <div className="space-y-2">
                <p className="font-semibold">1. What is the purpose of the `main()` function in a C program?</p>
            </div>
            <div className="space-y-2">
                <p className="font-semibold">2. What is a variable in C?</p>
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


const CPointersQuiz = () => (
    <Card>
        <CardHeader className="text-center">
            <CardTitle className="font-headline text-2xl tracking-wider">PSG ITECH Quiz</CardTitle>
            <CardDescription>Subject: Pointers in C | Total Marks: 10</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
            <div className="space-y-4">
                <p className="font-semibold">1. What is the correct way to declare a pointer to an integer?</p>
                <RadioGroup>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="a" id="q1-a" />
                        <Label htmlFor="q1-a">int ptr;</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="b" id="q1-b" />
                        <Label htmlFor="q1-b">int &ptr;</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="c" id="q1-c" />
                        <Label htmlFor="q1-c">int *ptr;</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="d" id="q1-d" />
                        <Label htmlFor="q1-d">ptr int;</Label>
                    </div>
                </RadioGroup>
            </div>
             <div className="space-y-4">
                <p className="font-semibold">2. Which operator is used to get the address of a variable?</p>
                <RadioGroup>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="a" id="q2-a" />
                        <Label htmlFor="q2-a">*</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="b" id="q2-b" />
                        <Label htmlFor="q2-b">&</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="c" id="q2-c" />
                        <Label htmlFor="q2-c">.</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="d" id="q2-d" />
                        <Label htmlFor="q2-d">-></Label>
                    </div>
                </RadioGroup>
            </div>
             <div className="space-y-4">
                <p className="font-semibold">3. A pointer that is pointing to NOTHING is called a ________ pointer.</p>
                <RadioGroup>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="a" id="q3-a" />
                        <Label htmlFor="q3-a">VOID</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="b" id="q3-b" />
                        <Label htmlFor="q3-b">DANGLING</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="c" id="q3-c" />
                        <Label htmlFor="q3-c">NULL</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="d" id="q3-d" />
                        <Label htmlFor="q3-d">WILD</Label>
                    </div>
                </RadioGroup>
            </div>
             <div className="space-y-4">
                <p className="font-semibold">4. What will be the output of `sizeof(ptr)` for an integer pointer `int *ptr` on a 64-bit system?</p>
                <RadioGroup>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="a" id="q4-a" />
                        <Label htmlFor="q4-a">2 bytes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="b" id="q4-b" />
                        <Label htmlFor="q4-b">4 bytes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="c" id="q4-c" />
                        <Label htmlFor="q4-c">8 bytes</Label>
                    </div>
                     <div className="flex items-center space-x-2">
                        <RadioGroupItem value="d" id="q4-d" />
                        <Label htmlFor="q4-d">Depends on the integer size</Label>
                    </div>
                </RadioGroup>
            </div>
             <div className="space-y-4">
                <p className="font-semibold">5. Which operator is used to get the value stored at the address pointed to by a pointer?</p>
                <RadioGroup>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="a" id="q5-a" />
                        <Label htmlFor="q5-a">* (Dereference operator)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="b" id="q5-b" />
                        <Label htmlFor="q5-b">& (Address-of operator)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="c" id="q5-c" />
                        <Label htmlFor="q5-c">&& (Logical AND)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="d" id="q5-d" />
                        <Label htmlFor="q5-d">|| (Logical OR)</Label>
                    </div>
                </RadioGroup>
            </div>
        </CardContent>
        <CardFooter>
            <Button className="w-full">Submit Quiz</Button>
        </CardFooter>
    </Card>
);

export default function AssignmentPage({ params }: { params: { assignmentId: string } }) {
    const router = useRouter();
    const { assignmentId } = params;

    const renderContent = () => {
        switch (assignmentId) {
            case 'c-intro':
                return <CIntroWorksheet />;
            case 'c-pointers':
                return <CPointersQuiz />;
            default:
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

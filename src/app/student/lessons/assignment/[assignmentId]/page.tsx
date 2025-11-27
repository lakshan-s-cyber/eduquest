
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const CIntroQuiz = () => (
    <Card>
        <CardHeader className="text-center">
            <CardTitle className="font-headline text-2xl tracking-wider">PSG ITECH QUIZ</CardTitle>
            <CardDescription>Subject: Introduction to C Programming | Total Marks: 10</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
            <div className="space-y-4">
                <p className="font-semibold">1. What is the purpose of the `main()` function in a C program?</p>
                <RadioGroup>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="a" id="q1-a" />
                        <Label htmlFor="q1-a">It is the entry point of the program.</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="b" id="q1-b" />
                        <Label htmlFor="q1-b">It is a library function.</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="c" id="q1-c" />
                        <Label htmlFor="q1-c">It is used for comments.</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="d" id="q1-d" />
                        <Label htmlFor="q1-d">It is optional in a C program.</Label>
                    </div>
                </RadioGroup>
            </div>
             <div className="space-y-4">
                <p className="font-semibold">2. What is a variable in C?</p>
                <RadioGroup>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="a" id="q2-a" />
                        <Label htmlFor="q2-a">A constant value.</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="b" id="q2-b" />
                        <Label htmlFor="q2-b">A named memory location to store data.</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="c" id="q2-c" />
                        <Label htmlFor="q2-c">A function name.</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="d" id="q2-d" />
                        <Label htmlFor="q2-d">A file name.</Label>
                    </div>
                </RadioGroup>
            </div>
             <div className="space-y-4">
                <p className="font-semibold">3. What is the use of the `printf()` function?</p>
                <RadioGroup>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="a" id="q3-a" />
                        <Label htmlFor="q3-a">To read input from the user.</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="b" id="q3-b" />
                        <Label htmlFor="q3-b">To perform mathematical calculations.</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="c" id="q3-c" />
                        <Label htmlFor="q3-c">To print output to the console.</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="d" id="q3-d" />
                        <Label htmlFor="q3-d">To close the program.</Label>
                    </div>
                </RadioGroup>
            </div>
             <div className="space-y-4">
                <p className="font-semibold">4. What is the difference between `=` and `==` in C?</p>
                <RadioGroup>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="a" id="q4-a" />
                        <Label htmlFor="q4-a">`=` is for comparison, `==` is for assignment.</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="b" id="q4-b" />
                        <Label htmlFor="q4-b">`=` is for assignment, `==` is for comparison.</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="c" id="q4-c" />
                        <Label htmlFor="q4-c">They are interchangeable.</Label>
                    </div>
                     <div className="flex items-center space-x-2">
                        <RadioGroupItem value="d" id="q4-d" />
                        <Label htmlFor="q4-d">Both are used for comments.</Label>
                    </div>
                </RadioGroup>
            </div>
             <div className="space-y-4">
                <p className="font-semibold">5. How do you write a single-line comment in C?</p>
                <RadioGroup>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="a" id="q5-a" />
                        <Label htmlFor="q5-a">`// comment`</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="b" id="q5-b" />
                        <Label htmlFor="q5-b">`/* comment */`</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="c" id="q5-c" />
                        <Label htmlFor="q5-c">`# comment`</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="d" id="q5-d" />
                        <Label htmlFor="q5-d">`&lt;!-- comment --&gt;`</Label>
                    </div>
                </RadioGroup>
            </div>
        </CardContent>
        <CardFooter>
            <Button className="w-full">Submit Quiz</Button>
        </CardFooter>
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
                        <Label htmlFor="q2-b">int &amp;ptr;</Label>
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
                        <Label htmlFor="q2-b">&amp;</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="c" id="q2-c" />
                        <Label htmlFor="q2-c">.</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="d" id="q2-d" />
                        <Label htmlFor="q2-d">-&gt;</Label>
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
                        <Label htmlFor="q5-b">&amp; (Address-of operator)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="c" id="q5-c" />
                        <Label htmlFor="q5-c">&amp;&amp; (Logical AND)</Label>
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
        if (assignmentId === 'c-intro') {
            return <CIntroQuiz />;
        }
        
        if (assignmentId === 'c-pointers') {
            return <CPointersQuiz />;
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

    
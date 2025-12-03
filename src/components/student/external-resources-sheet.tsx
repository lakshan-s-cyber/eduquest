
'use client';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BookOpen, ChevronRight, Code, GraduationCap, Globe } from "lucide-react";
import Link from "next/link";
import React from "react";

const resources = [
  {
    name: "GeeksforGeeks",
    description: "Learn concepts with examples and solve practice problems.",
    url: "https://www.geeksforgeeks.org/",
    icon: <Code className="h-6 w-6 text-green-500" />,
  },
  {
    name: "W3Schools",
    description: "Simple tutorials for HTML, CSS, JS, Python, SQL, and more.",
    url: "https://www.w3schools.com/",
    icon: <Globe className="h-6 w-6 text-blue-500" />,
  },
  {
    name: "Khan Academy",
    description: "Concept explanations with videos and step-by-step lessons.",
    url: "https://www.khanacademy.org/",
    icon: <GraduationCap className="h-6 w-6 text-purple-500" />,
  },
  {
    name: "TutorialsPoint",
    description: "Beginner-friendly guides for coding, engineering, and maths.",
    url: "https://www.tutorialspoint.com/",
    icon: <BookOpen className="h-6 w-6 text-orange-500" />,
  },
];

export function ExternalResourcesSheet({ children }: { children: React.ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Extra Learning Materials</SheetTitle>
          <SheetDescription>
            Explore these external resources to supplement your learning.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <div className="space-y-3">
            {resources.map((resource) => (
              <Link href={resource.url} key={resource.name} target="_blank" rel="noopener noreferrer" className="block">
                <div className="flex items-center gap-4 rounded-lg border p-4 transition-all hover:bg-accent/50 cursor-pointer">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                    {resource.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">{resource.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {resource.description}
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

    

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
import { cn } from "@/lib/utils";

const timeSlots = [
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 01:00",
    "01:00 - 02:00",
    "02:00 - 03:00",
];

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const scheduleColors = {
    "C Programming": "bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-300",
    Calculus: "bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300",
    BEEE: "bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-300",
    "Design Thinking": "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300",
    Tamil: "bg-pink-100 dark:bg-pink-900/50 text-pink-800 dark:text-pink-300",
    English: "bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300",
    Mathematics: "bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300",
    Science: "bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300",
    History: "bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300",
    Literature: "bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300",
    Lunch: "bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300",
    "Staff Meeting": "bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-300",
    "Free Period": "bg-gray-100/50 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400",
};

type ScheduleColors = keyof typeof scheduleColors;

export type ScheduleItem = {
    day: (typeof days)[number];
    time: (typeof timeSlots)[number];
    subject: ScheduleColors;
    class?: string;
};

interface WeeklyTimetableProps {
    scheduleData: ScheduleItem[];
    title: string;
    description: string;
}

export function WeeklyTimetable({ scheduleData, title, description }: WeeklyTimetableProps) {
    const getScheduleForSlot = (day: string, time: string) => {
        return scheduleData.find(item => item.day === day && item.time === time);
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <Table className="border">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[120px] font-bold">Day</TableHead>
                            {timeSlots.map(time => (
                                <TableHead key={time} className="font-bold text-center">{time}</TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {days.map(day => (
                            <TableRow key={day}>
                                <TableCell className="font-medium">{day}</TableCell>
                                {timeSlots.map(time => {
                                    const event = getScheduleForSlot(day, time);
                                    if (time === "12:00 - 01:00") {
                                        return <TableCell key={`${day}-${time}`} className="p-1 text-center border-l"><div className={cn("rounded-md p-2 h-full flex flex-col justify-center", scheduleColors["Lunch"])}><p className="font-semibold text-xs">Lunch</p></div></TableCell>
                                    }
                                    if (event) {
                                        return (
                                            <TableCell key={`${day}-${time}`} className={cn("p-1 text-center border-l")}>
                                                <div className={cn("rounded-md p-2 h-full flex flex-col justify-center", scheduleColors[event.subject])}>
                                                    <p className="font-semibold text-xs">{event.subject}</p>
                                                    {event.class && <p className="text-xs">{event.class}</p>}
                                                </div>
                                            </TableCell>
                                        );
                                    }
                                    return <TableCell key={`${day}-${time}`} className="border-l"></TableCell>;
                                })}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}

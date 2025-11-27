import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell } from "lucide-react";

const notifications = [
    {
        id: "NOTIF-001",
        title: "New Quiz Assigned: Pointers in C",
        description: "Dr. Sathya Balaji has assigned a new quiz. Complete it to earn 200 points.",
        date: "1 day ago",
        read: false,
    },
    {
        id: "NOTIF-002",
        title: "Achievement Unlocked: 'C Novice'",
        description: "Congratulations! You've completed your first C Programming assignment.",
        date: "3 days ago",
        read: true,
    },
    {
        id: "NOTIF-003",
        title: "Upcoming Assignment: Vector Calculus",
        description: "An assignment for 'Vector Calculus' from Dr. R. Sankara Subramaniam is due tomorrow.",
        date: "1 day ago",
        read: false,
    },
    {
        id: "NOTIF-004",
        title: "Staff Announcement",
        description: "The platform will be under maintenance this Friday at 10 PM.",
        date: "4 days ago",
        read: true,
    },
];

export default function NotificationsPage() {
    return (
        <div className="grid gap-6">
            <h1 className="font-headline text-3xl font-bold tracking-tight">
                Notifications
            </h1>
            <Card>
                <CardHeader>
                    <CardTitle>Your Updates</CardTitle>
                    <CardDescription>
                        Stay up to date with assignments and announcements.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {notifications.map((notification) => (
                            <div
                                key={notification.id}
                                className={`flex items-start gap-4 rounded-lg border p-4 transition-all ${!notification.read ? 'bg-secondary' : ''}`}
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Bell className="h-5 w-5" />
                                </div>
                                <div className="flex-1">
                                    <p className={`font-semibold ${!notification.read ? 'text-primary' : ''}`}>{notification.title}</p>
                                    <p className="text-sm text-muted-foreground">
                                        {notification.description}
                                    </p>
                                </div>
                                <div className="text-xs text-muted-foreground whitespace-nowrap">
                                    {notification.date}
                                </div>
                                {!notification.read && (
                                    <div className="h-2.5 w-2.5 rounded-full bg-primary self-center" />
                                )}
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

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
        title: "New Lesson Assigned: Introduction to Algebra",
        description: "Your teacher has assigned a new lesson. Complete it to earn 150 points.",
        date: "2 days ago",
        read: false,
    },
    {
        id: "NOTIF-002",
        title: "Achievement Unlocked: 'Math Beginner'",
        description: "Congratulations! You've completed your first math lesson.",
        date: "3 days ago",
        read: true,
    },
    {
        id: "NOTIF-003",
        title: "Upcoming Quiz: The Solar System",
        description: "A quiz for 'The Solar System' is scheduled for tomorrow. Be prepared!",
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

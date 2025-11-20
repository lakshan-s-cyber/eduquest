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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Medal } from "lucide-react";

const leaderboardData = [
    { rank: 1, name: "Alex Doe", points: 1250, avatar: "https://picsum.photos/seed/student1/100/100" },
    { rank: 2, name: "Jane Smith", points: 1180, avatar: "https://picsum.photos/seed/student2/100/100" },
    { rank: 3, name: "Peter Jones", points: 1120, avatar: "https://picsum.photos/seed/student3/100/100" },
    { rank: 4, name: "Mary Johnson", points: 1050, avatar: "https://picsum.photos/seed/student4/100/100" },
    { rank: 5, name: "Sam Wilson", points: 980, avatar: "https://picsum.photos/seed/student5/100/100" },
    { rank: 6, name: "Lisa Ray", points: 950, avatar: "https://picsum.photos/seed/student6/100/100" },
    { rank: 7, name: "Tom Brown", points: 920, avatar: "https://picsum.photos/seed/student7/100/100" },
    { rank: 8, name: "Sara Lee", points: 880, avatar: "https://picsum.photos/seed/student8/100/100" },
    { rank: 9, name: "Ben Carter", points: 840, avatar: "https://picsum.photos/seed/student9/100/100" },
    { rank: 10, name: "Eva Green", points: 800, avatar: "https://picsum.photos/seed/student10/100/100" },
];

const getMedalColor = (rank: number) => {
    if (rank === 1) return "text-yellow-500";
    if (rank === 2) return "text-gray-400";
    if (rank === 3) return "text-orange-500";
    return "text-gray-300";
};

export default function LeaderboardPage() {
    return (
        <div className="grid gap-6">
            <h1 className="font-headline text-3xl font-bold tracking-tight">
                Leaderboard
            </h1>
            <Card>
                <CardHeader>
                    <CardTitle>Top Students</CardTitle>
                    <CardDescription>
                        Check out who is leading the quest for knowledge!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[80px] text-center">Rank</TableHead>
                                <TableHead>Student</TableHead>
                                <TableHead className="text-right">Points</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {leaderboardData.map((student) => (
                                <TableRow key={student.rank} className={student.rank <=3 ? 'bg-secondary/50' : ''}>
                                    <TableCell className="text-center">
                                        <div className="flex justify-center items-center">
                                            {student.rank <= 3 ? (
                                                <Medal className={`h-6 w-6 ${getMedalColor(student.rank)}`} />
                                            ) : (
                                                <span className="font-bold text-lg">{student.rank}</span>
                                            )}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-4">
                                            <Avatar>
                                                <AvatarImage src={student.avatar} alt={student.name} />
                                                <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <span className="font-medium">{student.name}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-right font-bold text-primary text-lg">{student.points}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}

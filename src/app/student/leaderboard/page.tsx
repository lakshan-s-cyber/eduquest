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
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const leaderboardData = [
    { rank: 1, name: "Alex Doe", points: 1250, avatar: "https://picsum.photos/seed/student1/100/100", imageId: "leaderboard-1" },
    { rank: 2, name: "Jane Smith", points: 1180, avatar: "https://picsum.photos/seed/student2/100/100", imageId: "leaderboard-2" },
    { rank: 3, name: "Peter Jones", points: 1120, avatar: "https://picsum.photos/seed/student3/100/100", imageId: "leaderboard-3" },
    { rank: 4, name: "Mary Johnson", points: 1050, avatar: "https://picsum.photos/seed/student4/100/100" },
    { rank: 5, name: "Sam Wilson", points: 980, avatar: "https://picsum.photos/seed/student5/100/100" },
    { rank: 6, name: "Lisa Ray", points: 950, avatar: "https://picsum.photos/seed/student6/100/100" },
    { rank: 7, name: "Tom Brown", points: 920, avatar: "https://picsum.photos/seed/student7/100/100" },
    { rank: 8, name: "Sara Lee", points: 880, avatar: "https://picsum.photos/seed/student8/100/100" },
    { rank: 9, name: "Ben Carter", points: 840, avatar: "https://picsum.photos/seed/student9/100/100" },
    { rank: 10, name: "Eva Green", points: 800, avatar: "https://picsum.photos/seed/student10/100/100" },
];

const getMedalColor = (rank: number) => {
    if (rank === 1) return "text-yellow-400";
    if (rank === 2) return "text-gray-400";
    if (rank === 3) return "text-orange-400";
    return "text-gray-300";
};

const leaderboardHeaderImage = PlaceHolderImages.find(img => img.id === 'leaderboard-header');
const topStudentImages = leaderboardData.slice(0, 3).map(student => {
    const imageData = PlaceHolderImages.find(img => img.id === student.imageId);
    return { ...student, imageData };
});
const otherStudents = leaderboardData.slice(3);


export default function LeaderboardPage() {
    return (
        <div className="grid gap-6">
            <Card className="overflow-hidden">
                <div className="relative h-48 w-full">
                    {leaderboardHeaderImage && (
                        <Image
                            src={leaderboardHeaderImage.imageUrl}
                            alt={leaderboardHeaderImage.description}
                            fill
                            className="object-cover"
                            data-ai-hint={leaderboardHeaderImage.imageHint}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                        <h1 className="font-headline text-4xl font-bold tracking-tight text-white">
                            Leaderboard
                        </h1>
                        <p className="text-lg text-white/90">
                            See who's at the top of the knowledge quest!
                        </p>
                    </div>
                </div>
            </Card>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {topStudentImages.map(student => (
                    <Card key={student.rank} className="relative flex flex-col overflow-hidden text-white transition-transform hover:scale-105">
                        {student.imageData && (
                             <Image
                                src={student.imageData.imageUrl}
                                alt={student.imageData.description}
                                fill
                                className="object-cover -z-10"
                                data-ai-hint={student.imageData.imageHint}
                            />
                        )}
                        <div className="absolute inset-0 bg-black/50 -z-10" />

                        <CardHeader className="flex-row items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Avatar className="h-12 w-12 border-2 border-white">
                                    <AvatarImage src={student.avatar} alt={student.name} />
                                    <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <span className="font-bold text-lg">{student.name}</span>
                            </div>
                             <Medal className={`h-10 w-10 drop-shadow-lg ${getMedalColor(student.rank)}`} />
                        </CardHeader>
                        <CardContent className="mt-auto p-6">
                            <p className="text-5xl font-bold">{student.points}</p>
                            <p className="text-sm text-white/80">points</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Ranks 4-10</CardTitle>
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
                            {otherStudents.map((student) => (
                                <TableRow key={student.rank}>
                                    <TableCell className="text-center font-bold text-lg text-muted-foreground">{student.rank}</TableCell>
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

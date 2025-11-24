import {
    Card,
    CardContent,
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
import { Crown, Star, GraduationCap } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

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


const leaderboardHeaderImage = PlaceHolderImages.find(img => img.id === 'leaderboard-header');
const topStudentImages = leaderboardData.slice(0, 3).map(student => {
    const imageData = PlaceHolderImages.find(img => img.id === student.imageId);
    return { ...student, imageData };
});
const otherStudents = leaderboardData.slice(3);


export default function LeaderboardPage() {
    const [rank1, rank2, rank3] = topStudentImages;

    return (
        <div className="grid gap-8 text-white">
            <div className="relative flex flex-col items-start justify-center rounded-xl bg-card p-8 text-left overflow-hidden border border-primary/20">
                {leaderboardHeaderImage && (
                    <Image
                        src={leaderboardHeaderImage.imageUrl}
                        alt={leaderboardHeaderImage.description}
                        fill
                        className="object-cover opacity-10"
                        data-ai-hint={leaderboardHeaderImage.imageHint}
                    />
                )}
                 <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                <div className="relative z-10">
                    <h1 className="font-headline text-5xl font-bold tracking-tight text-primary relative inline-block">
                        <GraduationCap className="absolute -top-5 -left-4 h-10 w-10 text-primary/80 -rotate-12 transform-gpu transition-transform group-hover:scale-110" />
                        <span className="animate-pulse">LEADERBOARD</span>
                    </h1>
                    <p className="mt-2 text-lg text-white/70">
                        See who's dominating the knowledge quest!
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 items-end gap-4 md:grid-cols-[1fr_1.1fr_1fr] md:gap-2">
                {/* Rank 2 - Silver */}
                <PodiumCard student={rank2} rank={2} />
                {/* Rank 1 - Gold */}
                <PodiumCard student={rank1} rank={1} />
                {/* Rank 3 - Bronze */}
                <PodiumCard student={rank3} rank={3} />
            </div>

            <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow className="border-primary/10">
                                <TableHead className="w-[80px] text-center font-bold text-primary/80">Rank</TableHead>
                                <TableHead className="font-bold text-primary/80">Student</TableHead>
                                <TableHead className="text-right font-bold text-primary/80">Points</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {otherStudents.map((student) => (
                                <TableRow key={student.rank} className="border-primary/10 transition-colors hover:bg-primary/10 group">
                                    <TableCell className="text-center font-bold text-lg text-white/50 transition-transform duration-300 group-hover:scale-125 group-hover:text-primary">
                                        <div className="relative">
                                            {student.rank}
                                            <Star className="absolute -top-1 -right-1 h-3 w-3 text-yellow-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-4">
                                            <Avatar>
                                                <AvatarImage src={student.avatar} alt={student.name} />
                                                <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <span className="font-medium text-white/90">{student.name}</span>
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

const rankStyles = {
    1: { // Gold
        height: "h-64",
        borderColor: "border-yellow-400",
        shadow: "shadow-[0_0_20px_theme(colors.yellow.400)]",
        gradient: "from-yellow-400/20 to-card/50",
        hoverGradient: "hover:from-yellow-400/30",
        avatarBorder: "border-yellow-400",
        pointsColor: "text-yellow-400"
    },
    2: { // Silver
        height: "h-56",
        borderColor: "border-gray-300/50",
        shadow: "shadow-md",
        gradient: "from-gray-300/20 to-card/50",
        hoverGradient: "hover:from-gray-300/30",
        avatarBorder: "border-gray-300",
        pointsColor: "text-gray-300"
    },
    3: { // Bronze
        height: "h-48",
        borderColor: "border-orange-400/50",
        shadow: "shadow-md",
        gradient: "from-orange-400/20 to-card/50",
        hoverGradient: "hover:from-orange-400/30",
        avatarBorder: "border-orange-400",
        pointsColor: "text-orange-400"
    }
};

const PodiumCard = ({ student, rank }: { student: any; rank: number }) => {
    if (!student) return null;
    const styles = rankStyles[rank as keyof typeof rankStyles] || rankStyles[3];

    return (
        <div className={cn(
            "relative flex flex-col items-center justify-end rounded-t-xl bg-gradient-to-b p-4 text-center backdrop-blur-sm transition-all group",
            styles.height,
            styles.borderColor,
            styles.shadow,
            styles.gradient,
            styles.hoverGradient,
            rank === 1 && "border-2",
            rank !== 1 && "border"
        )}>
             {student.imageData && (
                <Image
                    src={student.imageData.imageUrl}
                    alt={student.imageData.description}
                    fill
                    className="object-cover rounded-t-xl opacity-10 -z-10"
                    data-ai-hint={student.imageData.imageHint}
                />
            )}
            <div className="absolute top-4">
                {rank === 1 ? (
                    <Crown className="h-10 w-10 text-yellow-400 drop-shadow-[0_0_10px_#facc15] transition-transform duration-300 group-hover:scale-125 group-hover:rotate-[-15deg]" />
                ) : (
                    <Star className={`h-8 w-8 transition-transform duration-300 group-hover:scale-125 ${rank === 2 ? 'text-gray-300' : 'text-orange-400'}`} />
                )}
            </div>
            <Avatar className={cn(
                "h-20 w-20 border-4 transition-transform duration-300 group-hover:scale-110",
                styles.avatarBorder
            )}>
                <AvatarImage src={student.avatar} alt={student.name} />
                <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <p className="mt-2 font-headline text-xl font-bold">{student.name}</p>
            <p className={cn("text-3xl font-bold", styles.pointsColor)}>{student.points}</p>
            <p className="text-sm text-white/50">points</p>
        </div>
    )
}

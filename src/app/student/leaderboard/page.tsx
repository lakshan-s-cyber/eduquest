
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
import { Crown, Star, GraduationCap, ShieldCheck, ArrowUp } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";


const leaderboardData = [
    { rank: 1, name: "Alex Doe", points: 1250, avatar: "https://picsum.photos/seed/student1/100/100", imageId: "leaderboard-1", progress: 85 },
    { rank: 2, name: "Jane Smith", points: 1180, avatar: "https://picsum.photos/seed/student2/100/100", imageId: "leaderboard-2", progress: 70 },
    { rank: 3, name: "Peter Jones", points: 1120, avatar: "https://picsum.photos/seed/student3/100/100", imageId: "leaderboard-3", progress: 60 },
    { rank: 4, name: "Mary Johnson", points: 1050, avatar: "https://picsum.photos/seed/student4/100/100", progress: 50 },
    { rank: 5, name: "Sam Wilson", points: 980, avatar: "https://picsum.photos/seed/student5/100/100", progress: 45 },
    { rank: 6, name: "Lisa Ray", points: 950, avatar: "https://picsum.photos/seed/student6/100/100", progress: 40 },
    { rank: 7, name: "Tom Brown", points: 920, avatar: "https://picsum.photos/seed/student7/100/100", progress: 35 },
    { rank: 8, name: "Sara Lee", points: 880, avatar: "https://picsum.photos/seed/student8/100/100", progress: 30 },
    { rank: 9, name: "Ben Carter", points: 840, avatar: "https://picsum.photos/seed/student9/100/100", progress: 25 },
    { rank: 10, name: "Eva Green", points: 800, avatar: "https://picsum.photos/seed/student10/100/100", progress: 20 },
];

const currentUser = leaderboardData[0]; // Assuming Alex Doe is the current user

const leaderboardHeaderImage = PlaceHolderImages.find(img => img.id === 'leaderboard-header');
const topStudentImages = leaderboardData.slice(0, 3).map(student => {
    const imageData = PlaceHolderImages.find(img => img.id === student.imageId);
    return { ...student, imageData };
});
const otherStudents = leaderboardData.slice(3);


export default function LeaderboardPage() {
    const [rank1, rank2, rank3] = topStudentImages;

    return (
        <div className="grid gap-8 text-white pb-24">
            <div className="relative flex flex-col items-start justify-center rounded-xl bg-card p-8 text-left overflow-hidden border border-primary/20">
                {leaderboardHeaderImage && (
                    <Image
                        src={leaderboardHeaderImage.imageUrl}
                        alt={leaderboardHeaderImage.description}
                        fill
                        className="object-cover opacity-80"
                        data-ai-hint={leaderboardHeaderImage.imageHint}
                    />
                )}
                 <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
                <div className="relative z-10">
                    <h1 className="font-headline text-5xl font-black tracking-tighter text-white relative inline-block uppercase" style={{fontFamily: "'Russo One', sans-serif"}}>
                        <GraduationCap className="absolute -top-5 -left-4 h-10 w-10 text-yellow-300/80 -rotate-12 transform-gpu transition-transform group-hover:scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-yellow-200 to-amber-500 drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]">Leaderboard</span>
                    </h1>
                    <p className="mt-2 text-lg text-white/80 font-medium">
                        See who's dominating the knowledge quest!
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 items-end gap-4 md:grid-cols-[1fr_1.1fr_1fr] md:gap-2">
                <PodiumCard student={rank2} rank={2} />
                <PodiumCard student={rank1} rank={1} />
                <PodiumCard student={rank3} rank={3} />
            </div>

            <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow className="border-primary/10">
                                <TableHead className="w-[80px] text-center font-bold text-primary/80">Rank</TableHead>
                                <TableHead className="font-bold text-primary/80">Student</TableHead>
                                <TableHead className="w-[150px] font-bold text-primary/80 text-center">Progress</TableHead>
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
                                    <TableCell className="text-center">
                                         <Progress value={student.progress} className="h-2 bg-primary/20" indicatorClassName="bg-gradient-to-r from-cyan-400 to-blue-500" />
                                    </TableCell>
                                    <TableCell className="text-right font-bold text-primary text-lg">{student.points}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* Pinned 'My Rank' Card */}
             <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-background via-background/90 to-transparent pointer-events-none">
                <Card className="max-w-4xl mx-auto bg-card/60 backdrop-blur-xl border-primary/30 shadow-2xl shadow-primary/20 pointer-events-auto">
                    <CardContent className="p-3">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                <div className="text-center w-12">
                                    <p className="text-xs text-muted-foreground">Rank</p>
                                    <p className="text-2xl font-bold text-primary">{currentUser.rank}</p>
                                </div>
                                <Avatar className="h-12 w-12 border-2 border-primary">
                                    <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                                    <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-bold text-lg">{currentUser.name} (You)</p>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <ShieldCheck className="h-4 w-4 text-green-400" />
                                        <span>Top 1%</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 mx-8 hidden md:block">
                                <p className="text-xs text-muted-foreground text-center mb-1">Progress to Next Rank</p>
                                <Progress value={currentUser.progress} className="h-3" indicatorClassName="bg-gradient-to-r from-purple-500 to-pink-500" />
                            </div>

                            <div className="flex items-center gap-4 ml-auto">
                                <div className="text-right">
                                    <p className="text-2xl font-bold text-primary">{currentUser.points}</p>
                                    <p className="text-xs text-muted-foreground">Points</p>
                                </div>
                                <div className="text-green-400 flex items-center gap-1">
                                    <ArrowUp className="h-4 w-4" />
                                    <span className="font-bold text-sm">2 ranks</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

const rankStyles = {
    1: { // Gold
        height: "h-64",
        borderColor: "border-yellow-400",
        shadow: "shadow-[0_0_30px_5px] shadow-yellow-400/50",
        gradient: "from-yellow-400/30 via-yellow-400/10 to-card/50",
        hoverGradient: "hover:from-yellow-400/40",
        avatarBorder: "border-yellow-400",
        nameColor: "text-blue-300",
        pointsColor: "text-yellow-400"
    },
    2: { // Silver
        height: "h-56",
        borderColor: "border-gray-300/80",
        shadow: "shadow-[0_0_20px_2px] shadow-gray-300/40",
        gradient: "from-gray-300/30 via-gray-300/10 to-card/50",
        hoverGradient: "hover:from-gray-300/40",
        avatarBorder: "border-gray-300",
        nameColor: "text-blue-300",
        pointsColor: "text-gray-300"
    },
    3: { // Bronze
        height: "h-48",
        borderColor: "border-orange-400/80",
        shadow: "shadow-[0_0_20px_2px] shadow-orange-400/40",
        gradient: "from-orange-400/30 via-orange-400/10 to-card/50",
        hoverGradient: "hover:from-orange-400/40",
        avatarBorder: "border-orange-400",
        nameColor: "text-blue-300",
        pointsColor: "text-orange-400"
    }
};

const PodiumCard = ({ student, rank }: { student: any; rank: number }) => {
    if (!student) return null;
    const styles = rankStyles[rank as keyof typeof rankStyles] || rankStyles[3];

    return (
        <div className={cn(
            "relative flex flex-col items-center justify-end rounded-t-xl bg-gradient-to-b p-4 text-center backdrop-blur-sm transition-all duration-300 group border-t-4",
            styles.height,
            styles.borderColor,
            styles.shadow,
            styles.gradient,
            styles.hoverGradient
        )}>
             {student.imageData && (
                <Image
                    src={student.imageData.imageUrl}
                    alt={student.imageData.description}
                    fill
                    className="object-cover rounded-t-xl opacity-10 -z-10 group-hover:opacity-20 transition-opacity"
                    data-ai-hint={student.imageData.imageHint}
                />
            )}
            <div className="absolute top-4">
                {rank === 1 ? (
                    <Crown className="h-10 w-10 text-yellow-400 drop-shadow-[0_0_10px_#facc15] transition-transform duration-300 group-hover:scale-125 group-hover:rotate-[-15deg] animate-pulse" />
                ) : (
                    <Star className={`h-8 w-8 transition-transform duration-300 group-hover:scale-125 ${rank === 2 ? 'text-gray-300 drop-shadow-[0_0_8px_#d1d5db]' : 'text-orange-400 drop-shadow-[0_0_8px_#fb923c]'}`} />
                )}
            </div>
            <Avatar className={cn(
                "h-20 w-20 border-4 transition-transform duration-300 group-hover:scale-110",
                styles.avatarBorder
            )}>
                <AvatarImage src={student.avatar} alt={student.name} />
                <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <p className={cn("mt-2 font-headline text-xl font-bold", styles.nameColor)}>{student.name}</p>
            <p className={cn("text-3xl font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]", styles.pointsColor)}>{student.points}</p>
            <p className="text-sm text-white/50">points</p>
            <Progress value={student.progress} className="mt-4 h-1.5 w-3/4 bg-primary/20" indicatorClassName="bg-gradient-to-r from-cyan-400 to-blue-500" />
        </div>
    )
}

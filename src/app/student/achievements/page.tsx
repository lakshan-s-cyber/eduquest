"use client";

import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Award,
    BookOpenCheck,
    BarChart,
    Target,
    Trophy,
    Shield,
    Star,
    Zap,
    BrainCircuit,
    FlaskConical
} from "lucide-react";
import { Progress } from "@/components/ui/progress";


const achievementsData = {
    summary: {
        leaderboardPosition: 5,
        bestRank: 3,
        totalPoints: 1250,
    },
    level: {
        title: "Master Learner",
        level: 15,
        progress: 60,
        nextLevel: 16
    },
    levelBadges: [
        { name: "Level 1: Novice", icon: <Star className="h-5 w-5" /> },
        { name: "Level 5: Apprentice", icon: <Shield className="h-5 w-5" /> },
        { name: "Level 10: Journeyman", icon: <Trophy className="h-5 w-5" /> },
        { name: "Level 15: Master", icon: <Award className="h-5 w-5" /> },
    ],
    competitionBadges: [
        { name: "Science Fair '24", icon: <FlaskConical className="h-5 w-5" />, description: "1st Place Winner" },
        { name: "Math Olympiad", icon: <BarChart className="h-5 w-5" />, description: "Top 10 Finalist" },
    ],
    completedLessons: [
        { title: "Introduction to Algebra", points: 150 },
        { title: "The Solar System", points: 200 },
        { title: "World War II History", points: 250 },
        { title: "Shakespeare's Sonnets", points: 180 },
    ],
    bestQuizzes: [
        { title: "Algebra Basics", score: "98%" },
        { title: "Periodic Table", score: "95%" },
        { title: "Roman Empire", score: "92%" },
    ],
    specialChallenges: [
        { title: "30-Day Learning Streak", icon: <Zap className="h-5 w-5" /> },
        { title: "Mind Marathon: 5 Extra-Credit Puzzles", icon: <BrainCircuit className="h-5 w-5" /> },
    ]
};


export default function AchievementsPage() {
    return (
        <div className="grid gap-6">
            <h1 className="font-headline text-3xl font-bold tracking-tight">
                My Achievements
            </h1>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Leaderboard Rank</CardTitle>
                        <Trophy className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">#{achievementsData.summary.leaderboardPosition}</div>
                        <p className="text-xs text-muted-foreground">
                            Best Rank: #{achievementsData.summary.bestRank}
                        </p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Total Points</CardTitle>
                        <Star className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{achievementsData.summary.totalPoints}</div>
                        <p className="text-xs text-muted-foreground">
                            Keep up the great work!
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Lessons Completed</CardTitle>
                        <BookOpenCheck className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{achievementsData.completedLessons.length}</div>
                         <p className="text-xs text-muted-foreground">
                            Total lessons finished
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Level Badges</CardTitle>
                            <CardDescription>Your progress through the ranks.</CardDescription>
                        </CardHeader>
                        <CardContent>
                             <div className="mb-4">
                                <div className="flex justify-between mb-1">
                                    <span className="font-medium">{`Level ${achievementsData.level.level}: ${achievementsData.level.title}`}</span>
                                    <span className="text-muted-foreground">{`Next: Lvl ${achievementsData.level.nextLevel}`}</span>
                                </div>
                                <Progress value={achievementsData.level.progress} />
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {achievementsData.levelBadges.map((badge, index) => (
                                <div key={badge.name} className="flex flex-col items-center text-center gap-2 p-4 rounded-lg bg-secondary/50">
                                    <div className={`flex h-12 w-12 items-center justify-center rounded-full ${
                                        index === 0 ? 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-500' :
                                        index === 1 ? 'bg-slate-200 dark:bg-slate-700/50 text-slate-500' :
                                        index === 2 ? 'bg-amber-200 dark:bg-amber-900/50 text-amber-600' :
                                        'bg-primary/10 text-primary'
                                    }`}>
                                        {badge.icon}
                                    </div>
                                    <p className="text-xs font-semibold">{badge.name}</p>
                                </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle>Completed Lessons & Modules</CardTitle>
                            <CardDescription>A list of all the content you have completed.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {achievementsData.completedLessons.map((lesson, index) => (
                                     <div key={index} className="flex items-center justify-between rounded-lg border p-3">
                                        <div className="flex items-center gap-3">
                                            <BookOpenCheck className="h-5 w-5 text-green-500"/>
                                            <p className="font-medium">{lesson.title}</p>
                                        </div>
                                        <Badge variant="outline" className="text-primary border-primary">{lesson.points} pts</Badge>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Competition Badges</CardTitle>
                             <CardDescription>Awards from competitive events.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {achievementsData.competitionBadges.map((badge, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                                        index === 0 ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-500' : 'bg-purple-100 dark:bg-purple-900/50 text-purple-500'
                                    }`}>
                                        {badge.icon}
                                    </div>
                                    <div>
                                        <p className="font-semibold">{badge.name}</p>
                                        <p className="text-sm text-muted-foreground">{badge.description}</p>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Best Quiz Scores</CardTitle>
                             <CardDescription>Your top performances.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                {achievementsData.bestQuizzes.map((quiz, index) => (
                                    <li key={index} className="flex justify-between items-center text-sm">
                                        <div className="flex items-center gap-2">
                                            <Target className="h-4 w-4 text-primary" />
                                            <span>{quiz.title}</span>
                                        </div>
                                        <span className="font-bold text-primary">{quiz.score}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Special Challenges</CardTitle>
                            <CardDescription>Unique milestones you've reached.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                             {achievementsData.specialChallenges.map((challenge, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className={`flex h-8 w-8 items-center justify-center rounded-full ${
                                        index === 0 ? 'bg-red-100 dark:bg-red-900/50 text-red-500' : 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-500'
                                    }`}>
                                      {challenge.icon}
                                    </div>
                                    <p className="font-medium text-sm">{challenge.title}</p>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

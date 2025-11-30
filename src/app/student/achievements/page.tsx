
"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    FlaskConical,
    ChevronRight,
    BookHeart
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from '@/lib/utils';
import Link from 'next/link';


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
        { title: "Vector Calculus", points: 150 },
        { title: "Operational Amplifiers", points: 200 },
        { title: "Structures and Files", points: 250 },
        { title: "Vocabulary", points: 180 },
    ],
    bestQuizzes: [
        { title: "Array& Pointers", score: "98%" },
        { title: "DC Circuits", score: "95%" },
        { title: "Intergral Calculus", score: "92%" },
    ],
    specialChallenges: [
        { title: "30-Day Learning Streak", icon: <Zap className="h-5 w-5" />, type: "badge" },
        { title: "Mind Marathon: 5 Extra-Credit Puzzles", icon: <BrainCircuit className="h-5 w-5" />, type: "badge" },
        { title: "Advanced C Programming Quest", icon: <BookHeart className="h-5 w-5" />, type: "link", href: "/student/learning-quest/c-programming" },
    ]
};

const summaryCards = [
    {
        id: "rank",
        title: "Leaderboard Rank",
        value: `#${achievementsData.summary.leaderboardPosition}`,
        description: `Best Rank: #${achievementsData.summary.bestRank}`,
        icon: <Trophy className="h-4 w-4 text-muted-foreground" />,
    },
    {
        id: "points",
        title: "Total Points",
        value: achievementsData.summary.totalPoints,
        description: "Keep up the great work!",
        icon: <Star className="h-4 w-4 text-muted-foreground" />,
    },
    {
        id: "lessons",
        title: "Lessons Completed",
        value: achievementsData.completedLessons.length,
        description: "Total lessons finished",
        icon: <BookOpenCheck className="h-4 w-4 text-muted-foreground" />,
    }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

const SummaryCard = ({ card }: { card: typeof summaryCards[0] }) => {
    const [isClicked, setIsClicked] = React.useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 1000); // Reset after animation duration
    };

    return (
        <motion.div
            key={card.id}
            variants={itemVariants}
            className="relative"
            onClick={handleClick}
        >
            <Card className="h-full cursor-pointer transition-all duration-300 hover:shadow-primary/20 hover:shadow-xl hover:bg-card/90">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
                    {card.icon}
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{card.value}</div>
                    <p className="text-xs text-muted-foreground">
                        {card.description}
                    </p>
                </CardContent>
            </Card>
            <AnimatePresence>
            {isClicked && (
                <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2"
                    initial={{ y: -30, opacity: 0, scale: 0.5 }}
                    animate={{ y: 20, opacity: [1, 0], scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                </motion.div>
            )}
            </AnimatePresence>
        </motion.div>
    );
};


export default function AchievementsPage() {
    return (
        <motion.div 
            className="grid gap-6"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.h1 variants={itemVariants} className="font-headline text-3xl font-bold tracking-tight">
                My Achievements
            </motion.h1>

            <motion.div variants={containerVariants} className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {summaryCards.map(card => (
                    <SummaryCard key={card.id} card={card} />
                ))}
            </motion.div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <motion.div variants={containerVariants} className="lg:col-span-2 space-y-6">
                    <motion.div variants={itemVariants}>
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
                                <motion.div variants={containerVariants} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                    {achievementsData.levelBadges.map((badge, index) => (
                                    <motion.div 
                                        key={badge.name} 
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 0px 15px 3px rgba(250, 204, 21, 0.7)" }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex flex-col items-center text-center gap-2 p-4 rounded-lg bg-secondary/50 cursor-pointer">
                                        <div className={`flex h-12 w-12 items-center justify-center rounded-full ${
                                            index === 0 ? 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-500' :
                                            index === 1 ? 'bg-slate-200 dark:bg-slate-700/50 text-slate-500' :
                                            index === 2 ? 'bg-amber-200 dark:bg-amber-900/50 text-amber-600' :
                                            'bg-primary/10 text-primary'
                                        }`}>
                                            {badge.icon}
                                        </div>
                                        <p className="text-xs font-semibold">{badge.name}</p>
                                    </motion.div>
                                    ))}
                                </motion.div>
                            </CardContent>
                        </Card>
                    </motion.div>
                     <motion.div variants={itemVariants}>
                        <Card>
                            <CardHeader>
                                <CardTitle>Completed Lessons & Modules</CardTitle>
                                <CardDescription>A list of all the content you have completed.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <motion.div variants={containerVariants} className="space-y-3">
                                    {achievementsData.completedLessons.map((lesson, index) => (
                                        <motion.div variants={itemVariants} key={index} className="flex items-center justify-between rounded-lg border p-3">
                                            <div className="flex items-center gap-3">
                                                <BookOpenCheck className="h-5 w-5 text-green-500"/>
                                                <p className="font-medium">{lesson.title}</p>
                                            </div>
                                            <Badge variant="outline" className="text-primary border-primary">{lesson.points} pts</Badge>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </CardContent>
                        </Card>
                     </motion.div>
                </motion.div>
                <motion.div variants={containerVariants} className="space-y-6">
                    <motion.div variants={itemVariants}>
                        <Card>
                            <CardHeader>
                                <CardTitle>Competition Badges</CardTitle>
                                <CardDescription>Awards from competitive events.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {achievementsData.competitionBadges.map((badge, index) => (
                                    <motion.div variants={itemVariants} key={index} className="flex items-center gap-4">
                                        <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                                            index === 0 ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-500' : 'bg-purple-100 dark:bg-purple-900/50 text-purple-500'
                                        }`}>
                                            {badge.icon}
                                        </div>
                                        <div>
                                            <p className="font-semibold">{badge.name}</p>
                                            <p className="text-sm text-muted-foreground">{badge.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </CardContent>
                        </Card>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <Card>
                            <CardHeader>
                                <CardTitle>Best Quiz Scores</CardTitle>
                                <CardDescription>Your top performances.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {achievementsData.bestQuizzes.map((quiz, index) => (
                                        <motion.li variants={itemVariants} key={index} className="flex justify-between items-center text-sm">
                                            <div className="flex items-center gap-2">
                                                <Target className="h-4 w-4 text-primary" />
                                                <span>{quiz.title}</span>
                                            </div>
                                            <span className="font-bold text-primary">{quiz.score}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <Card>
                            <CardHeader>
                                <CardTitle>Special Challenges</CardTitle>
                                <CardDescription>Unique milestones and quests.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-1">
                                {achievementsData.specialChallenges.map((challenge, index) => {
                                    const challengeIconColor = 
                                        index === 0 ? 'bg-red-100 dark:bg-red-900/50 text-red-500' : 
                                        index === 1 ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-500' :
                                        'bg-teal-100 dark:bg-teal-900/50 text-teal-500';

                                    const content = (
                                        <div className="flex items-center gap-3">
                                            <div className={`flex h-8 w-8 items-center justify-center rounded-full ${challengeIconColor}`}>
                                                {challenge.icon}
                                            </div>
                                            <p className="font-medium text-sm flex-1">{challenge.title}</p>
                                            {challenge.type === 'link' && <ChevronRight className="h-5 w-5 text-muted-foreground" />}
                                        </div>
                                    );

                                    if (challenge.type === 'link' && challenge.href) {
                                        return (
                                            <Link href={challenge.href} key={index} className="block rounded-lg -m-2 p-2 transition-colors hover:bg-muted/50">
                                                 <motion.div variants={itemVariants}>
                                                    {content}
                                                 </motion.div>
                                            </Link>
                                        )
                                    }

                                    return (
                                         <motion.div variants={itemVariants} key={index} className="p-2">
                                            {content}
                                        </motion.div>
                                    )
                                })}
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}

    
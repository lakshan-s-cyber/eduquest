
'use client';

import { generateLearningQuest, LearningQuestOutput } from '@/ai/flows/learning-quest-flow';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, CheckCircle, Lightbulb, XCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const lessonDetails: { [key: string]: { title: string } } = {
  'c-programming': {
    title: 'Introduction to C Programming',
  },
  calculus: {
    title: 'Introduction to Calculus',
  },
  beee: {
    title: 'Basics of BEEE',
  },
};

export default function LearningQuestPage({ params }: { params: { lessonId: string } }) {
  const router = useRouter();
  const { toast } = useToast();
  const { lessonId } = params;
  const details = lessonDetails[lessonId];

  const [questData, setQuestData] = useState<LearningQuestOutput | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!details) {
      setError('Invalid lesson ID.');
      setLoading(false);
      return;
    }

    async function fetchQuestData() {
      try {
        setLoading(true);
        const data = await generateLearningQuest({ lessonTitle: details.title });
        setQuestData(data);
      } catch (err) {
        console.error('Failed to generate learning quest:', err);
        setError('Could not load learning quest. Please try again later.');
        toast({
            variant: "destructive",
            title: "Generation Failed",
            description: "There was an error generating the learning content."
        });
      } finally {
        setLoading(false);
      }
    }

    fetchQuestData();
  }, [lessonId, details, toast]);

  const handleAnswerChange = (questionIndex: number, answer: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: answer,
    }));
  };
  
  const handleSubmitQuiz = () => {
    setSubmitted(true);
    let correctCount = 0;
    questData?.quiz.forEach((q, i) => {
        if(selectedAnswers[i] === q.correctAnswer) {
            correctCount++;
        }
    })
    toast({
        title: "Quiz Submitted!",
        description: `You scored ${correctCount} out of ${questData?.quiz.length}.`,
    })
  };

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-2xl font-bold text-destructive">Error</h1>
        <p className="text-muted-foreground">{error}</p>
        <Button onClick={() => router.back()} className="mt-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
        </Button>
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="font-headline text-3xl font-bold tracking-tight">Learning Quest</h1>
          <p className="text-muted-foreground">{details?.title || 'Loading...'}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
                <CardTitle className='flex items-center gap-2'><Lightbulb /> Beyond the Syllabus</CardTitle>
                <CardDescription>Explore these advanced topics to expand your knowledge.</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
                {loading ? (
                    <div className='space-y-4'>
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-2/3" />
                        <br/>
                        <Skeleton className="h-6 w-1/2" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-5/6" />
                    </div>
                ) : (
                    <>
                        <ul className='space-y-2'>
                            {questData?.advancedTopics.map((topic, index) => (
                                <li key={index} className='font-semibold'>{topic}</li>
                            ))}
                        </ul>
                        <div dangerouslySetInnerHTML={{ __html: questData?.extraContent.replace(/\n/g, '<br />') || "" }} />
                    </>
                )}
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-1">
            <Card>
                <CardHeader>
                    <CardTitle>Knowledge Check</CardTitle>
                    <CardDescription>Test your understanding of the advanced topics.</CardDescription>
                </CardHeader>
                <CardContent className='space-y-6'>
                    {loading ? (
                        Array.from({length: 3}).map((_, i) => (
                            <div key={i} className='space-y-3'>
                                <Skeleton className="h-5 w-full" />
                                <Skeleton className="h-4 w-3/4" />
                                <Skeleton className="h-4 w-3/4" />
                                <Skeleton className="h-4 w-3/4" />
                                <Skeleton className="h-4 w-3/4" />
                            </div>
                        ))
                    ) : (
                        questData?.quiz.map((q, index) => (
                            <div key={index} className='space-y-3'>
                                <p className='font-semibold'>{index+1}. {q.question}</p>
                                <RadioGroup 
                                    onValueChange={(value) => handleAnswerChange(index, value)}
                                    disabled={submitted}
                                >
                                    {q.options.map((option, i) => {
                                        const isCorrect = option === q.correctAnswer;
                                        const isSelected = selectedAnswers[index] === option;
                                        
                                        return (
                                            <div key={i} className='flex items-center space-x-2'>
                                                 <RadioGroupItem value={option} id={`q${index}-opt${i}`} />
                                                 <Label htmlFor={`q${index}-opt${i}`} className='flex items-center gap-2'>
                                                    {option}
                                                    {submitted && isSelected && !isCorrect && <XCircle className='h-4 w-4 text-red-500' />}
                                                    {submitted && isCorrect && <CheckCircle className='h-4 w-4 text-green-500' />}
                                                 </Label>
                                            </div>
                                        )
                                    })}
                                </RadioGroup>
                            </div>
                        ))
                    )}
                </CardContent>
                <CardFooter>
                    <Button onClick={handleSubmitQuiz} className='w-full' disabled={loading || submitted}>
                        {submitted ? 'Quiz Submitted' : 'Submit Answers'}
                    </Button>
                </CardFooter>
            </Card>
        </div>
      </div>
    </div>
  );
}

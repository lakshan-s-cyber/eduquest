
'use client';

import React from 'react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Box } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useSearchParams } from 'next/navigation';

const tools = [
  {
    id: 'desmos',
    name: 'Desmos Graphing Calculator',
    description: 'An advanced graphing calculator implemented as a web application and a mobile application.',
    url: 'https://www.desmos.com/calculator',
    embeddable: false,
    imageId: 'tool-desmos'
  },
  {
    id: 'falstad',
    name: 'Falstad Circuit Simulator',
    description: 'An electronic circuit simulator that runs in the browser. Perfect for visualizing circuit behavior.',
    url: 'https://www.falstad.com/circuit/circuitjs.html',
    embeddable: true,
    imageId: 'tool-falstad'
  },
  {
    id: 'matlab-online',
    name: 'MATLAB Online',
    description: 'Access MATLAB from your browser. Analyze data, develop algorithms, and create models.',
    url: 'https://matlab.mathworks.com/',
    embeddable: false,
    imageId: 'tool-matlab'
  },
  {
    id: 'geogebra',
    name: 'GeoGebra',
    description: 'A dynamic mathematics software for all levels of education that brings together geometry, algebra, spreadsheets, graphing, statistics and calculus.',
    url: 'https://www.geogebra.org/classic',
    embeddable: true,
    imageId: 'tool-geogebra'
  },
  {
    id: 'phet',
    name: 'PhET Simulations',
    description: 'Free online physics, chemistry, biology, earth science and math simulations from the University of Colorado Boulder.',
    url: 'https://phet.colorado.edu/',
    embeddable: true,
    imageId: 'tool-phet'
  },
  {
    id: 'wolframalpha',
    name: 'WolframAlpha',
    description: 'A computational knowledge engine and answer engine. Get answers to factual queries by computing the answer from externally sourced data.',
    url: 'https://www.wolframalpha.com/',
    embeddable: false,
    imageId: 'tool-wolfram'
  },
];

function ToolsPageInternal() {
  const searchParams = useSearchParams();
  const username = searchParams.get('username') || 'Student';

  return (
    <div className="grid gap-6">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight">
          Tools & Simulations
        </h1>
        <p className="text-muted-foreground">
          Explore a collection of powerful tools to aid your learning and research.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => {
          const imageData = PlaceHolderImages.find(img => img.id === tool.imageId);
          return (
            <Card key={tool.id} className="flex flex-col">
              <CardHeader>
                {imageData && (
                  <div className="relative h-40 w-full overflow-hidden rounded-lg mb-4">
                    <Image
                      src={imageData.imageUrl}
                      alt={imageData.description}
                      fill
                      className="object-cover"
                      data-ai-hint={imageData.imageHint}
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                )}
                <CardTitle>{tool.name}</CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow" />
              <CardFooter className="flex justify-end gap-2">
                <Button asChild>
                  <a href={tool.url} target="_blank" rel="noopener noreferrer">
                    Open Tool <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                {tool.embeddable && (
                  <Button asChild variant="secondary">
                    <Link href={`/student/tools/${tool.id}?username=${encodeURIComponent(username)}`}>
                      Open Inside App <Box className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default function ToolsPage() {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <ToolsPageInternal />
        </React.Suspense>
    );
}


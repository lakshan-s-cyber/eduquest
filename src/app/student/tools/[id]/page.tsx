
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const tools = [
  {
    id: 'desmos',
    name: 'Desmos Graphing Calculator',
    url: 'https://www.desmos.com/calculator',
    embeddable: false,
  },
  {
    id: 'falstad',
    name: 'Falstad Circuit Simulator',
    url: 'https://www.falstad.com/circuit/circuitjs.html',
    embeddable: true,
  },
  {
    id: 'matlab-online',
    name: 'MATLAB Online',
    url: 'https://matlab.mathworks.com/',
    embeddable: false,
  },
  {
    id: 'geogebra',
    name: 'GeoGebra',
    url: 'https://www.geogebra.org/classic',
    embeddable: true,
  },
  {
    id: 'phet',
    name: 'PhET Simulations',
    url: 'https://phet.colorado.edu/',
    embeddable: true,
  },
  {
    id: 'wolframalpha',
    name: 'WolframAlpha',
    url: 'https://www.wolframalpha.com/',
    embeddable: false,
  },
];

export default function ToolEmbedPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { id } = params;
  const tool = tools.find((t) => t.id === id);

  if (!tool) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-2xl font-bold">Tool not found</h1>
        <p className="text-muted-foreground">The tool you are looking for does not exist or cannot be embedded.</p>
        <Button onClick={() => router.back()} className="mt-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
        </Button>
      </div>
    );
  }

  if (!tool.embeddable) {
     return (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-2xl font-bold">{tool.name} Cannot Be Embedded</h1>
        <p className="text-muted-foreground">This tool does not support being viewed inside the app. Please open it in a new tab.</p>
         <div className="flex gap-2 mt-4">
            <Button onClick={() => router.back()}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
            </Button>
             <Button asChild>
                <a href={tool.url} target="_blank" rel="noopener noreferrer">
                    Open in New Tab
                </a>
            </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full gap-4">
        <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
            <h1 className="font-headline text-3xl font-bold tracking-tight">{tool.name}</h1>
            </div>
      </div>
      <Card className="flex-grow">
        <CardContent className="p-0 h-full">
          <iframe
            src={tool.url}
            title={tool.name}
            className="w-full h-full border-0"
            allowFullScreen
          />
        </CardContent>
      </Card>
    </div>
  );
}

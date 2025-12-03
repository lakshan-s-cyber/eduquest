
'use client';
import { cn } from '@/lib/utils';
import React from 'react';

type CircularProgressProps = {
  value: number;
  size?: 'sm' | 'md' | 'lg';
  strokeWidth?: number;
};

export function CircularProgress({ value, size = 'md', strokeWidth = 10 }: CircularProgressProps) {
  const sizeMap = {
    sm: 80,
    md: 120,
    lg: 160,
  };
  const s = sizeMap[size];
  const radius = (s - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`}>
        <circle
          className="text-secondary"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={s/2}
          cy={s/2}
        />
        <circle
          className="text-primary transition-all duration-300"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={s/2}
          cy={s/2}
          transform={`rotate(-90 ${s/2} ${s/2})`}
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
         <span className="text-2xl font-bold">{value}%</span>
         <span className="text-xs text-muted-foreground">Overall</span>
      </div>
    </div>
  );
}


'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  GripVertical,
  Trash,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const timeSlots = [
  '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00',
];

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const initialSchedule = [
  { id: 1, subject: 'C Programming', day: 'Monday', startTime: '09:00', endTime: '10:00', location: 'A-201', color: 'bg-sky-500/80', faculty: 'Dr. Sathya' },
  { id: 2, subject: 'Calculus', day: 'Tuesday', startTime: '10:00', endTime: '12:00', location: 'B-105', color: 'bg-blue-500/80', faculty: 'Dr. Sankara' },
  { id: 3, subject: 'BEEE', day: 'Wednesday', startTime: '11:00', endTime: '12:00', location: 'C-303', color: 'bg-orange-500/80', faculty: 'Dr. Elan' },
  { id: 4, subject: 'Design Thinking', day: 'Thursday', startTime: '13:00', endTime: '15:00', location: 'Studio 1', color: 'bg-indigo-500/80', faculty: 'Prof. Anbu' },
  { id: 5, subject: 'English', day: 'Friday', startTime: '09:00', endTime: '11:00', location: 'D-101', color: 'bg-purple-500/80', faculty: 'Dr. Sathesh' },
  { id: 6, subject: 'Tamil', day: 'Monday', startTime: '14:00', endTime: '15:00', location: 'D-102', color: 'bg-pink-500/80', faculty: 'Dr. Tamil' },
];

type ScheduleItem = (typeof initialSchedule)[0];

const subjectColors = [
    { value: 'bg-sky-500/80', label: 'Sky Blue' },
    { value: 'bg-blue-500/80', label: 'Blue' },
    { value: 'bg-orange-500/80', label: 'Orange' },
    { value: 'bg-indigo-500/80', label: 'Indigo' },
    { value: 'bg-purple-500/80', label: 'Purple' },
    { value: 'bg-pink-500/80', label: 'Pink' },
    { value: 'bg-green-500/80', label: 'Green' },
    { value: 'bg-yellow-500/80', label: 'Yellow' },
    { value: 'bg-red-500/80', label: 'Red' },
];


export default function TimetablePage() {
  const [schedule, setSchedule] = useState(initialSchedule);
  const [selectedEvent, setSelectedEvent] = useState<ScheduleItem | null>(null);
  const [isAddSheetOpen, setAddSheetOpen] = useState(false);

  const getGridPosition = (item: ScheduleItem) => {
    const dayIndex = days.indexOf(item.day) + 2; // +2 because grid column starts at 1, and 1 is for time slots
    const startTimeIndex = timeSlots.indexOf(item.startTime) + 1;
    const endTimeIndex = timeSlots.indexOf(item.endTime) + 1;

    return {
      gridColumn: `${dayIndex}`,
      gridRow: `${startTimeIndex} / ${endTimeIndex}`,
    };
  };

  const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newClass = {
        id: selectedEvent ? selectedEvent.id : schedule.length + 1,
        subject: formData.get('subject') as string,
        faculty: formData.get('faculty') as string,
        day: formData.get('day') as string,
        startTime: formData.get('startTime') as string,
        endTime: formData.get('endTime') as string,
        location: formData.get('location') as string,
        color: formData.get('color') as string,
    }

    if (selectedEvent) {
        setSchedule(schedule.map(item => item.id === newClass.id ? newClass : item));
    } else {
        setSchedule([...schedule, newClass]);
    }
    setAddSheetOpen(false);
    setSelectedEvent(null);
  };
  
  const handleDelete = () => {
    if (selectedEvent) {
        setSchedule(schedule.filter(item => item.id !== selectedEvent.id));
    }
    setSelectedEvent(null);
  }

  const EditSheet = ({ event }: { event: ScheduleItem | null }) => (
     <Sheet open={isAddSheetOpen} onOpenChange={(open) => {
        if (!open) setSelectedEvent(null);
        setAddSheetOpen(open);
     }}>
        <SheetContent>
            <SheetHeader>
                <SheetTitle>{event ? 'Edit Class' : 'Add New Class'}</SheetTitle>
                <SheetDescription>
                    {event ? 'Update the details for your class.' : 'Fill in the details to add a new class to your schedule.'}
                </SheetDescription>
            </SheetHeader>
            <form onSubmit={handleSave}>
                <div className="py-4 space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" name="subject" defaultValue={event?.subject} required />
                    </div>
                     <div className="grid gap-2">
                        <Label htmlFor="faculty">Faculty</Label>
                        <Input id="faculty" name="faculty" defaultValue={event?.faculty} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="day">Day</Label>
                            <Select name="day" defaultValue={event?.day} required>
                                <SelectTrigger><SelectValue /></SelectTrigger>
                                <SelectContent>
                                    {days.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                                </SelectContent>
                            </Select>
                        </div>
                         <div className="grid gap-2">
                            <Label htmlFor="location">Location / Room</Label>
                            <Input id="location" name="location" defaultValue={event?.location} />
                        </div>
                    </div>
                     <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="startTime">Start Time</Label>
                             <Select name="startTime" defaultValue={event?.startTime} required>
                                <SelectTrigger><SelectValue /></SelectTrigger>
                                <SelectContent>
                                    {timeSlots.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="endTime">End Time</Label>
                             <Select name="endTime" defaultValue={event?.endTime} required>
                                <SelectTrigger><SelectValue /></SelectTrigger>
                                <SelectContent>
                                    {timeSlots.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="color">Color</Label>
                         <Select name="color" defaultValue={event?.color} required>
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                {subjectColors.map(c => (
                                    <SelectItem key={c.value} value={c.value}>
                                        <div className="flex items-center gap-2">
                                            <div className={cn("h-4 w-4 rounded-full", c.value)}></div>
                                            {c.label}
                                        </div>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="button" variant="ghost">Cancel</Button>
                    </SheetClose>
                    <Button type="submit">Save Class</Button>
                </SheetFooter>
            </form>
        </SheetContent>
    </Sheet>
  );

  return (
    <div className="flex flex-col h-screen bg-background text-foreground p-4 gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="font-headline text-3xl font-bold tracking-tight">Timetable</h1>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="sm">Today</Button>
          <Button variant="ghost" size="icon">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Timetable Grid */}
      <Card className="flex-1 overflow-auto">
        <CardContent className="p-0">
          <div
            className="grid"
            style={{
              gridTemplateColumns: '60px repeat(5, 1fr)',
              gridTemplateRows: `40px repeat(${timeSlots.length -1}, 60px)`,
            }}
          >
            {/* Empty corner */}
            <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm"></div>
            
            {/* Day Headers */}
            {days.map((day) => (
              <div key={day} className="text-center font-semibold text-sm p-2 border-b border-l sticky top-0 z-10 bg-background/95 backdrop-blur-sm">
                {day}
              </div>
            ))}

            {/* Time Slots */}
            {timeSlots.map((time, index) => (
                <React.Fragment key={time}>
                    <div className="text-right text-xs text-muted-foreground pr-2 pt-1 border-r" style={{gridRow: index + 1}}>
                        {time}
                    </div>
                </React.Fragment>
            ))}

            {/* Grid lines */}
            {days.map((_, dayIndex) => 
                timeSlots.map((_, timeIndex) => (
                    <div key={`${dayIndex}-${timeIndex}`} className="border-l border-b" style={{gridColumn: dayIndex + 2, gridRow: timeIndex + 1}}></div>
                ))
            )}

            {/* Schedule Items */}
            {schedule.map((item) => (
              <Sheet key={item.id} onOpenChange={(open) => { if(!open) setSelectedEvent(null)}}>
                <SheetTrigger asChild>
                    <div
                        key={item.id}
                        style={getGridPosition(item)}
                        className={cn(
                        'm-1 p-2 rounded-lg text-white flex flex-col justify-between cursor-pointer overflow-hidden group relative',
                        item.color
                        )}
                        onClick={() => setSelectedEvent(item)}
                    >
                        <div>
                            <p className="font-bold text-sm">{item.subject}</p>
                            <p className="text-xs">{item.location}</p>
                        </div>
                        <div className='flex justify-between items-end'>
                            <p className="text-xs">{`${item.startTime} - ${item.endTime}`}</p>
                             <GripVertical className="h-4 w-4 text-white/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </div>
                </SheetTrigger>
                 <SheetContent>
                    <SheetHeader>
                        <SheetTitle>{selectedEvent?.subject}</SheetTitle>
                        <SheetDescription>
                            {selectedEvent?.faculty}
                        </SheetDescription>
                    </SheetHeader>
                    <div className="py-4">
                        <p><strong>Day:</strong> {selectedEvent?.day}</p>
                        <p><strong>Time:</strong> {selectedEvent?.startTime} - {selectedEvent?.endTime}</p>
                        <p><strong>Location:</strong> {selectedEvent?.location}</p>
                    </div>
                     <SheetFooter>
                        <Button variant="destructive" onClick={handleDelete}>Delete</Button>
                        <SheetClose asChild>
                            <Button variant="outline" onClick={() => {
                                setAddSheetOpen(true);
                            }}>Edit</Button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
              </Sheet>
            ))}
          </div>
        </CardContent>
      </Card>
      
        <Button 
            className="fixed bottom-8 right-8 h-14 w-14 rounded-full shadow-lg z-50"
            onClick={() => {
                setSelectedEvent(null);
                setAddSheetOpen(true);
            }}
        >
            <Plus className="h-6 w-6" />
            <span className="sr-only">Add Class</span>
        </Button>

        <EditSheet event={selectedEvent} />
    </div>
  );
}

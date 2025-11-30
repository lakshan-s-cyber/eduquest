
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useSearchParams } from "next/navigation";
import React from "react";

function SettingsPageInternal() {
  const searchParams = useSearchParams();
  const username = searchParams.get('username') || "Admin";
  const useremail = `${username.toLowerCase().replace(' ', '.')}@eduquest.com`;

  return (
    <div className="grid gap-6">
       <div>
          <h1 className="font-headline text-3xl font-bold tracking-tight">
            Settings
          </h1>
          <p className="text-muted-foreground">
            Manage your account and notification settings.
          </p>
        </div>
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Update your personal information.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue={username} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue={useremail} />
          </div>
          <Button>Save Changes</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>
            Manage how you receive notifications.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div>
                <p className="font-medium">Email Notifications</p>
                <p className="text-sm text-muted-foreground">Receive notifications via email for important events.</p>
            </div>
            <Switch defaultChecked />
          </div>
           <div className="flex items-center justify-between rounded-lg border p-4">
            <div>
                <p className="font-medium">Push Notifications</p>
                <p className="text-sm text-muted-foreground">Get real-time alerts on your devices.</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function SettingsPage() {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <SettingsPageInternal />
        </React.Suspense>
    )
}

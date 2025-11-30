
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StudentLoginForm } from "@/components/auth/student-login-form";
import { StaffLoginForm } from "@/components/auth/staff-login-form";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Logo } from "@/components/shared/logo";

export default function LoginPage() {
  const background = PlaceHolderImages.find(p => p.id === 'student-background');

  return (
    <div className="flex min-h-screen">
      <div className="relative hidden flex-1 items-center justify-center bg-primary text-primary-foreground lg:flex">
        {background && (
            <Image
            src={background.imageUrl}
            alt={background.description}
            fill
            className="object-cover opacity-20"
            data-ai-hint={background.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary to-primary/50" />
        <div className="relative z-10 w-full max-w-md p-8">
            <Logo className="text-white" />
            <h1 className="mt-4 font-headline text-5xl font-bold text-white">
                Welcome to EduQuest
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80">
                Your personalized journey to academic excellence starts here. Log in to continue your quest.
            </p>
        </div>
      </div>
      <main className="flex flex-1 items-center justify-center bg-background p-4">
        <div className="w-full max-w-sm">
          <Tabs defaultValue="student" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="student">Student</TabsTrigger>
              <TabsTrigger value="staff">Staff</TabsTrigger>
            </TabsList>
            <TabsContent value="student">
              <StudentLoginForm />
            </TabsContent>
            <TabsContent value="staff">
              <StaffLoginForm />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}

import Link from 'next/link';
import { StudentLoginForm } from '@/components/auth/student-login-form';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/shared/logo';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-16 items-center justify-between px-6">
        <Logo />
        <Button asChild variant="ghost">
          <Link href="/staff/login">Staff Login</Link>
        </Button>
      </header>
      <main className="flex flex-1 items-center justify-center p-4">
        <div className="w-full max-w-md">
          <StudentLoginForm />
        </div>
      </main>
    </div>
  );
}

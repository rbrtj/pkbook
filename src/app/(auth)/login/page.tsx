import { LoginForm } from "../../_components/login-form";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <LoginForm />
      <div className="py-6">
        <p className="text-sm">Nie posiadasz jeszcze konta?</p>
        <Link href="/user/register" text-xs font-bold text-primary>
          Zarejestruj się
        </Link>
      </div>
    </>
  );
}

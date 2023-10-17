import Link from "next/link";
import { RegisterForm } from "~/app/_components/register-form";

export default function RegisterPage() {
  return (
    <div>
      <RegisterForm />
      <div className="py-6">
        <p className="text-sm">Posiadasz już konto?</p>
        <Link href="/user/login" text-xs font-bold text-primary>
          Zaloguj się
        </Link>
      </div>
    </div>
  );
}

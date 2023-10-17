'use client';

import Image from "next/image";
import { LoginForm } from "../_components/login-form";
export default function Home() {
  return (
    <div className="flex m-auto py-24 items-center border p-6 bg-white rounded-md">
      <div className="grid h-full grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center">
          <Image
            src="/pk.png"
            alt="Politechnika Logo"
            height={500}
            width={500}
            className="max-h-full max-w-full"
          />
        </div>
        <div className="flex flex-col items-center justify-center pl-2 lg:pr-20">
          <LoginForm />
          <div className="py-6">
            <p className="text-sm">Nie posiadasz jeszcze konta?</p>
            <p className="cursor-pointer text-xs font-bold text-primary">
              Zarejestruj się
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

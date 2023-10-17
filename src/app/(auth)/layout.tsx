import React from "react";
import Image from "next/image";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-screen w-screen items-center bg-gradient-to-b from-blue-200 via-blue-400 to-blue-700">
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
          {children}
        </div>
      </div>
    </div>
    </main>
  );
}

import React from "react";

export default function LoginLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pl">
            <section className="flex h-screen w-screen items-center bg-gradient-to-b from-blue-200 via-blue-400 to-blue-700">
                {children}
            </section>
        </html>
    )
}
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Ask AI Browser Assistant",
    description: "Turn selected text into AI conversations instantly.",
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
import type { Metadata } from "next";
import { siteConfig } from "./metadata";

export const metadata: Metadata = {
    title: "Ask AI Browser Assistant",
    description: "Turn selected text into AI conversations instantly. Multi-AI support with privacy-first design.",
    openGraph: {
        title: "Ask AI Browser Assistant",
        description: "Turn selected text into AI conversations instantly.",
        type: "website",
    },
};

export default function Page() {
    return (
        <div className="min-h-dvh bg-background text-foreground">
            <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur">
                <div className="container flex h-16 items-center justify-between">
                    <a href="#" className="flex items-center gap-2">
                        <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-foreground/20 to-transparent flex items-center justify-center">
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2L15 8H22L17 12L19 18L12 15L5 18L7 12L2 8H9L12 2Z" />
                            </svg>
                        </div>
                        <div className="leading-tight">
                            <div className="text-sm font-semibold">Ask AI</div>
                            <div className="text-xs text-muted-foreground">Browser Assistant</div>
                        </div>
                    </a>

                    <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
                        <a className="text-sm text-muted-foreground hover:text-foreground" href="#features">Features</a>
                        <a className="text-sm text-muted-foreground hover:text-foreground" href="#screenshots">Screenshots</a>
                        <a className="text-sm text-muted-foreground hover:text-foreground" href="#privacy">Privacy</a>
                    </nav>

                    <div className="flex items-center gap-2">
                        <a
                            href="https://github.com/"
                            className="hidden md:inline-flex rounded-lg border border-border px-3 py-2 text-sm hover:bg-foreground/5"
                        >
                            GitHub
                        </a>
                        <a
                            href={siteConfig.installUrl}
                            className="inline-flex items-center justify-center rounded-lg bg-foreground px-4 py-2 text-sm text-background hover:opacity-90 transition-opacity"
                        >
                            Install Extension
                        </a>
                    </div>
                </div>
            </header>

            <main>
                <Hero />
                <Features />
                <Screenshots />
                <Privacy />
                <Footer />
            </main>
        </div>
    );
}

function Hero() {
    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_0%,rgba(0,0,0,0.08),transparent_50%)] dark:bg-[radial-gradient(600px_circle_at_20%_0%,rgba(255,255,255,0.06),transparent_50%)]" />

            <div className="container grid gap-12 py-20 md:py-28 md:grid-cols-2 md:items-center">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                        Turn Text Into AI Conversations
                    </h1>
                    <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                        Select any text and instantly send it to ChatGPT, Gemini, Claude, or Perplexity.
                        No copy-paste needed—just one click.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
                        <a
                            href={siteConfig.installUrl}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90 transition-opacity"
                        >
                            Get Started
                        </a>
                        <a
                            href="https://github.com/"
                            className="inline-flex items-center justify-center rounded-xl border border-border px-6 py-3 text-sm font-medium hover:bg-foreground/5 transition-colors"
                        >
                            View Source
                        </a>
                    </div>

                    <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
                        <span>ChatGPT • Gemini • Claude • Perplexity</span>
                    </div>
                </div>

                <div className="relative">
                    <div className="rounded-2xl border border-border/70 bg-background/60 p-4 shadow-soft backdrop-blur">
                        <div className="aspect-[16/10] w-full rounded-xl border-2 border-border bg-gradient-to-br from-foreground/10 to-transparent flex items-center justify-center">
                            <span className="text-sm text-muted-foreground">Extension Mockup</span>
                        </div>
                        <div className="mt-4 space-y-2">
                            <div className="flex items-center gap-2">
                                <span className="h-3 w-3 rounded-full bg-red-400" />
                                <span className="h-3 w-3 rounded-full bg-amber-400" />
                                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                            </div>
                            <p className="text-xs text-muted-foreground">Text selection → AI Assistant opens instantly</p>
                        </div>
                    </div>
                    <div className="absolute -inset-10 -z-10 rounded-[2.5rem] bg-gradient-to-r from-foreground/10 via-transparent to-foreground/10 blur-2xl" />
                </div>
            </div>
        </section>
    );
}

function Features() {
    const features = [
        { title: "One-Click Selection", desc: "Select text anywhere and instantly open your preferred AI assistant." },
        { title: "Multi-AI Support", desc: "ChatGPT, Gemini, Claude, and Perplexity—all in one extension." },
        { title: "Privacy First", desc: "No data collection. Your text stays between you and your AI." },
        { title: "Fast & Lightweight", desc: "Minimal overhead, maximum speed. Built for researchers and students." },
    ];

    return (
        <section id="features" className="border-t border-border/60 bg-background/30">
            <div className="container py-20">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Features</h2>
                <p className="mt-3 text-muted-foreground max-w-xl">
                    Everything you need to streamline your AI workflow in the browser.
                </p>

                <div className="mt-12 grid gap-6 sm:grid-cols-2">
                    {features.map((f, i) => (
                        <div key={f.title} className="rounded-2xl border border-border/70 bg-background/60 p-6">
                            <div className="flex items-center gap-3">
                                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground/10 text-sm font-semibold">
                                    {i + 1}
                                </span>
                                <h3 className="font-semibold">{f.title}</h3>
                            </div>
                            <p className="mt-3 text-sm text-muted-foreground">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Screenshots() {
    const screenshots = [
        { title: "Text Selection", desc: "Select any text on a webpage" },
        { title: "AI Picker", desc: "Choose your preferred assistant" },
    ];

    return (
        <section id="screenshots" className="border-t border-border/60">
            <div className="container py-20">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Screenshots</h2>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                    {screenshots.map((s) => (
                        <div key={s.title} className="rounded-2xl border border-border/70 bg-background/60 p-4 shadow-soft">
                            <div className="aspect-[16/10] w-full rounded-xl border-2 border-border bg-gradient-to-br from-foreground/10 to-transparent flex items-center justify-center">
                                <span className="text-sm text-muted-foreground">{s.title}</span>
                            </div>
                            <p className="mt-3 text-sm font-medium">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Privacy() {
    return (
        <section id="privacy" className="border-t border-border/60 bg-background/30">
            <div className="container py-20">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Privacy</h2>
                <p className="mt-3 text-muted-foreground max-w-xl">
                    Your privacy is our priority. Here's how we handle your data.
                </p>

                <div className="mt-8 rounded-2xl border border-border/70 bg-background/60 p-6 max-w-2xl">
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-center gap-2">
                            <span className="text-emerald-500">✓</span>
                            No data selling or sharing
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-emerald-500">✓</span>
                            No tracking scripts or analytics
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-emerald-500">✓</span>
                            Open source and transparent
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="border-t border-border/60 bg-background/40">
            <div className="container py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <div className="font-semibold">Ask AI Browser Assistant</div>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Built by Yug Khunteta • BITS Goa ECE
                        </p>
                    </div>

                    <nav className="flex items-center gap-6">
                        <a className="text-sm text-muted-foreground hover:text-foreground" href="https://github.com/">GitHub</a>
                        <a className="text-sm text-muted-foreground hover:text-foreground" href="https://www.linkedin.com/in/yug-khunteta-354854374/details/experience/">LinkedIn</a>
                    </nav>
                </div>

                <div className="mt-8 pt-6 border-t border-border/60 text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Ask AI Browser Assistant. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
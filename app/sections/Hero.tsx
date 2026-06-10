import Link from "next/link";

const storeLinks = {
    edge: "https://microsoftedge.microsoft.com/addons/",
    chrome: "https://chromewebstore.google.com/",
};

export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_circle_at_20%_0%,rgba(255,255,255,0.10),transparent_45%),radial-gradient(900px_circle_at_90%_10%,rgba(0,0,0,0.08),transparent_40%)] dark:bg-[radial-gradient(800px_circle_at_20%_0%,rgba(255,255,255,0.08),transparent_45%),radial-gradient(900px_circle_at_90%_10%,rgba(255,255,255,0.06),transparent_40%)]"
            />

            <div className="container grid gap-10 py-14 md:py-20 md:grid-cols-2 md:items-center">
                <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs text-muted-foreground">
                        <span
                            aria-hidden="true"
                            className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.15)]"
                        />
                        Privacy-friendly • Lightweight • Multi-AI
                    </div>

                    <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
                        Turn Any Text Into an AI Conversation.
                    </h1>
                    <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                        Select text anywhere and send it to leading assistants in one click. No copy-paste grind—just a
                        browser-native workflow with privacy-first design.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                        <a
                            href={storeLinks.chrome}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-medium text-background hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        >
                            Install Extension
                        </a>
                        <Link
                            href="https://github.com/"
                            className="inline-flex items-center justify-center rounded-xl border border-border bg-background/70 px-5 py-3 text-sm font-medium text-foreground hover:bg-foreground/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        >
                            View GitHub
                        </Link>
                    </div>

                    <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-border bg-background">
                                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
                                    <path
                                        fill="currentColor"
                                        d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2m-1 14.59L6.91 12.5l1.41-1.41L11 13.17l4.3-4.3 1.4 1.42Z"
                                    />
                                </svg>
                            </span>
                            <span>Open source</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-border bg-background">
                                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
                                    <path
                                        fill="currentColor"
                                        d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5m0 2c-4.42 0-8 2-8 4.5V21h16v-2.5C20 16 16.42 14 12 14"
                                    />
                                </svg>
                            </span>
                            <span>Built for research</span>
                        </div>
                    </div>
                </div>

                {/* Visual workflow mockup */}
                <div className="relative">
                    <div className="rounded-3xl border border-border/70 bg-background/60 p-4 shadow-soft backdrop-blur">
                        <div className="flex items-center justify-between gap-3 rounded-2xl border border-border/70 bg-background px-4 py-3">
                            <div className="flex items-center gap-2">
                                <span className="inline-flex h-2 w-2 rounded-full bg-red-400" />
                                <span className="inline-flex h-2 w-2 rounded-full bg-amber-400" />
                                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                            </div>
                            <div className="text-xs text-muted-foreground">Ask AI — Workflow</div>
                            <div className="h-2 w-16 rounded-full bg-foreground/10" aria-hidden="true" />
                        </div>

                        <div className="mt-4 rounded-2xl border border-border/70 bg-background px-4 py-4">
                            <ol className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-xl bg-foreground/10 text-sm font-semibold">
                                        1
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium">Highlight text</div>
                                        <div className="mt-1 text-sm text-muted-foreground">
                                            Select any passage on a page.
                                        </div>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-xl bg-foreground/10 text-sm font-semibold">
                                        2
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium">Floating action appears</div>
                                        <div className="mt-1 text-sm text-muted-foreground">
                                            Click to open your AI options.
                                        </div>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-xl bg-foreground/10 text-sm font-semibold">
                                        3
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium">Choose an assistant</div>
                                        <div className="mt-1 text-sm text-muted-foreground">
                                            ChatGPT • Gemini • Claude • Perplexity.
                                        </div>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-xl bg-emerald-500/15 text-sm font-semibold text-emerald-600 dark:text-emerald-300">
                                        ✓
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium">AI opens instantly</div>
                                        <div className="mt-1 text-sm text-muted-foreground">
                                            Your selected text is ready to ask.
                                        </div>
                                    </div>
                                </li>
                            </ol>
                        </div>

                        <div className="mt-4 rounded-2xl border border-border/70 bg-background p-4">
                            <div className="flex items-center justify-between">
                                <div className="text-xs text-muted-foreground">Multi-AI</div>
                                <div className="text-xs text-muted-foreground">Fast • Lightweight</div>
                            </div>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {[
                                    { name: "ChatGPT", key: "gpt" },
                                    { name: "Gemini", key: "gemini" },
                                    { name: "Claude", key: "claude" },
                                    { name: "Perplexity", key: "pplx" },
                                ].map((item) => (
                                    <div
                                        key={item.key}
                                        className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                                    >
                                        {item.name}
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 flex items-center gap-2">
                                <div className="h-9 w-9 rounded-2xl bg-foreground/10" aria-hidden="true" />
                                <div className="min-w-0">
                                    <div className="text-sm font-medium">Selected text ready</div>
                                    <div className="truncate text-sm text-muted-foreground">
                                        “Explain the benefits of…”
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-r from-foreground/10 via-transparent to-foreground/10 blur-2xl"
                    />
                </div>
            </div>
        </section>
    );
}


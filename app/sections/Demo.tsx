export default function Demo() {
    return (
        <section id="demo" className="border-t border-border/60 bg-background/30">
            <div className="container py-14 md:py-20">
                <div className="grid gap-10 md:grid-cols-2 md:items-center">
                    <div>
                        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">A realistic demo workflow</h2>
                        <p className="mt-4 text-muted-foreground">
                            Designed to feel like part of the browser. This mockup shows the experience from selection to AI launch.
                        </p>

                        <div className="mt-6 grid gap-3">
                            {[
                                { k: "Selected text", v: "“Explain the benefits of focus…”" },
                                { k: "AI options", v: "ChatGPT • Gemini • Claude • Perplexity" },
                                { k: "Done", v: "AI opens with your selection ready." },
                            ].map((row) => (
                                <div key={row.k} className="rounded-2xl border border-border/60 bg-background/60 p-4">
                                    <div className="text-xs text-muted-foreground">{row.k}</div>
                                    <div className="mt-1 text-sm font-medium">{row.v}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="rounded-3xl border border-border/70 bg-background/60 p-4 shadow-soft">
                            <div className="flex items-center justify-between rounded-2xl border border-border/70 bg-background px-4 py-3">
                                <div className="text-sm font-semibold">Ask AI</div>
                                <div className="text-xs text-muted-foreground">Selection → Assistant</div>
                            </div>

                            <div className="mt-4 rounded-2xl border border-border/70 bg-background p-4">
                                <div className="rounded-xl border border-border bg-background p-4">
                                    <div className="text-xs text-muted-foreground">Highlighted text</div>
                                    <div className="mt-2 text-sm leading-relaxed">
                                        The goal of research is not to copy—it’s to synthesize and ask better questions.
                                    </div>
                                </div>

                                <div className="mt-3 flex items-center gap-2">
                                    <div className="relative">
                                        <div
                                            aria-hidden="true"
                                            className="absolute -top-3 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-emerald-500"
                                        />
                                        <button
                                            type="button"
                                            className="rounded-xl bg-foreground px-4 py-3 text-sm font-medium text-background hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                                        >
                                            Ask AI
                                        </button>
                                    </div>
                                    <div className="flex-1">
                                        <div className="h-10 w-full rounded-xl border border-border bg-background/60" aria-hidden="true" />
                                    </div>
                                </div>

                                <div className="mt-4 rounded-xl border border-border bg-background/60 p-3">
                                    <div className="text-xs text-muted-foreground">Choose an assistant</div>
                                    <div className="mt-2 grid grid-cols-2 gap-2">
                                        {["ChatGPT", "Gemini", "Claude", "Perplexity"].map((name) => (
                                            <div
                                                key={name}
                                                className="rounded-lg border border-border bg-background px-3 py-2 text-xs text-muted-foreground"
                                            >
                                                {name}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-4 rounded-xl border border-border/60 bg-background/70 px-4 py-3">
                                    <div className="flex items-center justify-between">
                                        <div className="text-xs text-muted-foreground">Status</div>
                                        <div className="text-xs font-medium text-emerald-600 dark:text-emerald-300">Ready</div>
                                    </div>
                                    <div className="mt-1 text-sm">Launching assistant with your selected text…</div>
                                </div>
                            </div>
                        </div>

                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.5rem] bg-gradient-to-br from-foreground/10 via-transparent to-foreground/10 blur-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}


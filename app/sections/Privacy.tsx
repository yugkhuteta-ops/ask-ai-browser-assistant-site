export default function Privacy() {
    return (
        <section id="privacy" className="container py-14 md:py-20">
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
                <div>
                    <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Privacy you can control</h2>
                    <p className="mt-4 text-muted-foreground">
                        Ask AI Browser Assistant is designed to minimize data usage and avoid unnecessary tracking.
                    </p>
                </div>

                <div className="rounded-3xl border border-border/70 bg-background/60 p-6 shadow-soft">
                    <ul className="space-y-4">
                        {[
                            { t: "No selling data", d: "We don’t monetize users through data resale." },
                            { t: "No tracking", d: "No marketing pixels or tracking scripts in the landing experience." },
                            { t: "No unnecessary collection", d: "Only what’s required for the extension workflow." },
                            { t: "User control first", d: "Built to keep the experience transparent and respectful." },
                        ].map((row) => (
                            <li key={row.t} className="flex gap-3">
                                <span
                                    aria-hidden="true"
                                    className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-foreground/10"
                                >
                                    <svg viewBox="0 0 24 24" className="h-4 w-4 text-foreground">
                                        <path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2m-1 14.59L6.91 12.5l1.41-1.41L11 13.17l4.3-4.3 1.4 1.42Z" />
                                    </svg>
                                </span>
                                <div>
                                    <div className="text-sm font-semibold">{row.t}</div>
                                    <div className="mt-1 text-sm text-muted-foreground">{row.d}</div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6 rounded-2xl border border-border bg-background/50 px-4 py-4">
                        <div className="text-xs text-muted-foreground">Note</div>
                        <div className="mt-1 text-sm text-muted-foreground">
                            Replace this copy with your exact extension privacy policy when ready.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


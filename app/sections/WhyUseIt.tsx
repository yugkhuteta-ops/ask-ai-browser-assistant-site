export default function WhyUseIt() {
    const rows = [
        {
            without: "Select",
            with: "Select",
        },
        {
            without: "Copy",
            with: "Click floating button",
        },
        {
            without: "Open AI",
            with: "Choose assistant",
        },
        {
            without: "Paste",
            with: "Done",
        },
        {
            without: "Ask",
            with: "Ask",
        },
    ];

    return (
        <section className="container py-14 md:py-20">
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
                <div>
                    <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Why use it</h2>
                    <p className="mt-4 text-muted-foreground">
                        Replace a multi-step workflow with a single browser-native click.
                    </p>
                </div>

                <div className="rounded-3xl border border-border/70 bg-background/60 p-5 shadow-soft" role="table" aria-label="Workflow comparison">
                    <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-2xl border border-border bg-background px-4 py-3">
                            <div className="text-xs text-muted-foreground">Without Extension</div>
                            <div className="mt-1 text-sm font-semibold">Traditional workflow</div>
                        </div>
                        <div className="rounded-2xl border border-border bg-background px-4 py-3">
                            <div className="text-xs text-muted-foreground">With Ask AI</div>
                            <div className="mt-1 text-sm font-semibold">One-click flow</div>
                        </div>
                    </div>

                    <div className="mt-4 grid gap-2">
                        {rows.map((r, i) => (
                            <div key={i} className="grid grid-cols-2 gap-3">
                                <div className="rounded-xl border border-border/60 bg-background/50 px-3 py-2 text-sm text-muted-foreground">
                                    {r.without}
                                </div>
                                <div className="rounded-xl border border-border/60 bg-foreground/5 px-3 py-2 text-sm font-medium">
                                    {r.with}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 text-sm text-muted-foreground">
                        Result: less friction, faster research, and more time asking better questions.
                    </div>
                </div>
            </div>
        </section>
    );
}


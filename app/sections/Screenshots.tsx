const placeholders = [
    { title: "Selection + Floating Button", desc: "A real screenshot goes here." },
    { title: "Assistant Picker", desc: "Choose ChatGPT/Gemini/Claude/Perplexity." },
    { title: "Context Menu", desc: "Right-click to send text instantly." },
    { title: "Result View", desc: "AI opens ready with your selection." },
];

export default function Screenshots() {
    return (
        <section className="border-t border-border/60 bg-background/30" aria-label="Screenshots">
            <div className="container py-14 md:py-20">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Screenshots</h2>
                    <p className="mt-4 text-muted-foreground">Replace these placeholders with real product captures anytime.</p>
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-2">
                    {placeholders.map((p) => (
                        <figure
                            key={p.title}
                            className="rounded-3xl border border-border/70 bg-background/60 p-4 shadow-soft"
                        >
                            <div className="aspect-[16/10] w-full rounded-2xl border border-border bg-gradient-to-br from-foreground/10 via-transparent to-foreground/10" />
                            <figcaption className="mt-4">
                                <div className="text-sm font-semibold">{p.title}</div>
                                <div className="mt-1 text-sm text-muted-foreground">{p.desc}</div>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}


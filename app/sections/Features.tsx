const features = [
    {
        title: "Floating Button",
        desc: "Appears on text selection—fast, unobtrusive, and built for speed.",
    },
    {
        title: "Context Menu",
        desc: "Right-click integration for power users and quick workflows.",
    },
    {
        title: "Multi-AI Support",
        desc: "Choose from ChatGPT, Gemini, Claude, and Perplexity.",
    },
    {
        title: "Research Workflow",
        desc: "Turn excerpts into questions instantly for reading, learning, and synthesis.",
    },
    {
        title: "Fast Navigation",
        desc: "One click to open the assistant with your selection ready to go.",
    },
    {
        title: "Privacy First",
        desc: "No unnecessary tracking. Designed to respect user control.",
    },
];

export default function Features() {
    return (
        <section id="features" className="container py-14 md:py-20">
            <div className="max-w-2xl">
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Everything you need to ask smarter</h2>
                <p className="mt-4 text-muted-foreground">
                    Minimal UI. Browser-native experience. Built for researchers, students, and anyone who reads a lot.
                </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((f, idx) => (
                    <article
                        key={f.title}
                        className="rounded-3xl border border-border/60 bg-background/60 p-5 shadow-soft"
                    >
                        <div className="flex items-start gap-4">
                            <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-background">
                                <span className="text-sm font-semibold text-muted-foreground">{String(idx + 1).padStart(2, "0")}</span>
                            </div>
                            <div>
                                <h3 className="text-base font-semibold">{f.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}


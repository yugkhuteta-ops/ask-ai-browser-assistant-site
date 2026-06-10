export default function SocialProof() {
    return (
        <section aria-label="Social proof" className="border-y border-border/60 bg-background/40">
            <div className="container py-10">
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        { label: "Open Source", value: "MIT-friendly" },
                        { label: "Built by", value: "Yug Khunteta" },
                        { label: "From", value: "BITS Goa ECE" },
                        { label: "Browser Extension Project", value: "Lightweight & fast" },
                    ].map((item) => (
                        <div
                            key={item.label}
                            className="rounded-2xl border border-border/60 bg-background/70 px-4 py-4"
                        >
                            <div className="text-xs text-muted-foreground">{item.label}</div>
                            <div className="mt-1 text-sm font-semibold">{item.value}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


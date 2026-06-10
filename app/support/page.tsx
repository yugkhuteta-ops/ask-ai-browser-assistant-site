import React from "react";

export const metadata = {
    title: "Support | Ask AI Browser Assistant",
    description:
        "Get help installing and using Ask AI Browser Assistant. Learn about supported platforms and troubleshooting tips.",
};

export default function SupportPage() {
    return (
        <div className="min-h-dvh bg-background text-foreground">
            <main id="main">
                <section className="container py-14 md:py-20">
                    <div className="max-w-2xl">
                        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
                            Support
                        </h1>
                        <p className="mt-4 text-muted-foreground">
                            This is placeholder support content. Replace with your real documentation or help center.
                        </p>
                    </div>

                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                        {[
                            {
                                title: "Installation help",
                                body: "Learn how to install the extension from the Chrome Web Store or Microsoft Edge Add-ons.",
                            },
                            {
                                title: "Troubleshooting",
                                body: "If the floating button doesn’t appear, check selection permissions and refresh the page.",
                            },
                            {
                                title: "Supported assistants",
                                body: "Ask AI Browser Assistant supports ChatGPT, Gemini, Claude, and Perplexity.",
                            },
                            {
                                title: "Privacy questions",
                                body: "We don’t sell data or rely on tracking scripts in the landing experience. Update this with your policy.",
                            },
                        ].map((card) => (
                            <div
                                key={card.title}
                                className="rounded-2xl border border-border/70 bg-background/60 p-6 shadow-soft"
                            >
                                <div className="text-sm font-semibold">{card.title}</div>
                                <div className="mt-2 text-sm text-muted-foreground">{card.body}</div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 rounded-2xl border border-border/60 bg-background/50 p-6">
                        <div className="text-sm font-semibold">Need more help?</div>
                        <div className="mt-2 text-sm text-muted-foreground">
                            Use the Contact page to reach the team. Replace this text with your support workflow
                            (email, form, or help center).
                        </div>
                        <div className="mt-4 text-sm">
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-xl bg-foreground px-4 py-2 text-background hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                            >
                                Contact support
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

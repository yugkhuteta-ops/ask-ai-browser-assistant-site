import React from "react";

export const metadata = {
    title: "Contact | Ask AI Browser Assistant",
    description:
        "Contact Ask AI Browser Assistant. Reach out for partnerships, press, feedback, or support requests.",
};

export default function ContactPage() {
    return (
        <div className="min-h-dvh bg-background text-foreground">
            <main id="main">
                <section className="container py-14 md:py-20">
                    <div className="max-w-2xl">
                        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Contact</h1>
                        <p className="mt-4 text-muted-foreground">
                            This is a placeholder contact page. Replace with your real contact form or
                            email workflow.
                        </p>
                    </div>

                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                        {[
                            {
                                title: "Email",
                                body: "info@example.com (replace)",
                            },
                            {
                                title: "Press & partnerships",
                                body: "press@example.com (replace)",
                            },
                            {
                                title: "Product feedback",
                                body: "feedback@example.com (replace)",
                            },
                            {
                                title: "Recruiter & hackathon judging",
                                body: "judging@example.com (replace)",
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
                        <div className="text-sm font-semibold">Quick note</div>
                        <div className="mt-2 text-sm text-muted-foreground">
                            Avoid collecting personal data through the landing page form. Keep submissions minimal
                            and provide privacy details.
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

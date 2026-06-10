"use client";

import { useMemo, useState } from "react";

const faqs = [
    {
        q: "Is it free?",
        a: "The extension can be free to install. If you charge later, update this section and the store listings.",
    },
    {
        q: "Which AI platforms are supported?",
        a: "ChatGPT, Gemini, Claude, and Perplexity. Add more if your workflow expands.",
    },
    {
        q: "Does it collect data?",
        a: "This landing page does not rely on tracking scripts. The extension should collect only what’s necessary for its function.",
    },
    {
        q: "How do I install it?",
        a: "Use the Install button above to go to the Chrome Web Store / Edge Add-ons listing (placeholders right now).",
    },
    {
        q: "Is it open source?",
        a: "Yes—check the GitHub link in the header and footer.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const items = useMemo(() => faqs, []);

    return (
        <section id="faq" className="border-t border-border/60 bg-background/30">
            <div className="container py-14 md:py-20">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">FAQ</h2>
                    <p className="mt-4 text-muted-foreground">Quick answers for installation and privacy.</p>
                </div>

                <div className="mt-8 max-w-3xl space-y-3">
                    {items.map((item, idx) => {
                        const open = openIndex === idx;
                        return (
                            <div key={item.q} className="rounded-2xl border border-border/70 bg-background/60">
                                <button
                                    type="button"
                                    className="flex w-full items-center justify-between gap-4 p-4 text-left"
                                    aria-expanded={open}
                                    onClick={() => setOpenIndex(open ? null : idx)}
                                >
                                    <span className="text-sm font-semibold">{item.q}</span>
                                    <span
                                        aria-hidden="true"
                                        className={`inline-flex h-8 w-8 items-center justify-center rounded-xl border border-border bg-background/60 transition-transform motion-reduce:transition-none ${open ? "rotate-180" : "rotate-0"}`}
                                    >
                                        <svg viewBox="0 0 24 24" className="h-4 w-4 text-muted-foreground">
                                            <path fill="currentColor" d="M12 15.5 5 8.5l1.4-1.4 5.6 5.6 5.6-5.6L19 8.5z" />
                                        </svg>
                                    </span>
                                </button>
                                {open ? (
                                    <div className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground">{item.a}</div>
                                ) : null}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}


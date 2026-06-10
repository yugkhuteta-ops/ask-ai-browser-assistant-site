import Hero from "./sections/Hero";
import SocialProof from "./sections/SocialProof";
import Features from "./sections/Features";
import Demo from "./sections/Demo";
import WhyUseIt from "./sections/WhyUseIt";
import Screenshots from "./sections/Screenshots";
import Privacy from "./sections/Privacy";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";

export default function Page() {
    return (
        <div className="min-h-dvh bg-background text-foreground">
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[1000] focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-foreground"
            >
                Skip to content
            </a>

            <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur">
                <div className="container flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div
                            aria-hidden="true"
                            className="h-9 w-9 rounded-xl border border-border bg-gradient-to-br from-foreground/10 to-transparent"
                        />
                        <div className="leading-tight">
                            <div className="text-sm font-semibold">Ask AI</div>
                            <div className="text-xs text-muted-foreground">Browser Assistant</div>
                        </div>
                    </div>

                    <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
                        <a className="text-sm text-muted-foreground hover:text-foreground" href="#features">
                            Features
                        </a>
                        <a className="text-sm text-muted-foreground hover:text-foreground" href="#demo">
                            Demo
                        </a>
                        <a className="text-sm text-muted-foreground hover:text-foreground" href="#privacy">
                            Privacy
                        </a>
                        <a className="text-sm text-muted-foreground hover:text-foreground" href="#faq">
                            FAQ
                        </a>
                    </nav>

                    <div className="flex items-center gap-2">
                        <a
                            href="https://github.com/"
                            className="hidden rounded-lg border border-border px-3 py-2 text-sm hover:bg-foreground/5 md:inline-flex"
                        >
                            View GitHub
                        </a>
                        <a
                            href="https://example.com/install"
                            className="inline-flex items-center justify-center rounded-lg bg-foreground px-3 py-2 text-sm text-background hover:opacity-90"
                        >
                            Install
                        </a>
                    </div>
                </div>
            </header>

            <main id="main">
                <Hero />
                <SocialProof />
                <Features />
                <Demo />
                <WhyUseIt />
                <Screenshots />
                <Privacy />
                <FAQ />
            </main>

            <Footer />
        </div>
    );
}


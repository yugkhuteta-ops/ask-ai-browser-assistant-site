export default function Footer() {
    return (
        <footer className="border-t border-border/60 bg-background/40">
            <div className="container py-10">
                <div className="grid gap-8 md:grid-cols-3">
                    <div>
                        <div className="text-sm font-semibold">Ask AI Browser Assistant</div>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Turn selected text into AI conversations instantly—built for speed, research, and privacy.
                        </p>
                        <div className="mt-4 text-xs text-muted-foreground">© {new Date().getFullYear()} Ask AI</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:col-span-2">
                        <div>
                            <div className="text-xs font-semibold text-muted-foreground">Links</div>
                            <ul className="mt-3 space-y-2">
                                <li>
                                    <a className="text-sm text-muted-foreground hover:text-foreground" href="https://github.com/">
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-sm text-muted-foreground hover:text-foreground"
                                        href="https://linkedin.com/"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a className="text-sm text-muted-foreground hover:text-foreground" href="/privacy">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a className="text-sm text-muted-foreground hover:text-foreground" href="/support">
                                        Support
                                    </a>
                                </li>
                                <li>
                                    <a className="text-sm text-muted-foreground hover:text-foreground" href="/contact">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <div className="text-xs font-semibold text-muted-foreground">Install</div>
                            <ul className="mt-3 space-y-2">
                                <li>
                                    <a
                                        className="text-sm text-muted-foreground hover:text-foreground"
                                        href="https://chromewebstore.google.com/"
                                    >
                                        Chrome Web Store
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-sm text-muted-foreground hover:text-foreground"
                                        href="https://microsoftedge.microsoft.com/addons/"
                                    >
                                        Microsoft Edge Add-ons
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-10 rounded-2xl border border-border/60 bg-background/60 px-4 py-3 text-xs text-muted-foreground">
                    Built as a static landing page on Next.js. Replace placeholder URLs before publishing.
                </div>
            </div>
        </footer>
    );
}


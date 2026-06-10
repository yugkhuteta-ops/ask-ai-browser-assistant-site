import Privacy from "../sections/Privacy";

export const metadata = {
    title: "Privacy Policy | Ask AI Browser Assistant",
    description:
        "Learn how Ask AI Browser Assistant protects your privacy—no selling data, no tracking, and minimal collection.",
};

export default function PrivacyPage() {
    return (
        <div className="min-h-dvh bg-background text-foreground">
            <main id="main">
                {/* Reuse the existing section content; expand later with full policy text */}
                <Privacy />
            </main>
        </div>
    );
}

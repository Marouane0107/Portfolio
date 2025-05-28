import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { SkyBackground } from "../components/SkayBackground";
import { Navbar } from "../components/Navbar";
import { HomeSection } from "../components/HomeSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";

export const Home = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        setIsDark(root.classList.contains("dark"));
        const observer = new MutationObserver(() => {
            setIsDark(root.classList.contains("dark"));
        });
        observer.observe(root, { attributes: true, attributeFilter: ["class"] });
        return () => observer.disconnect();
    }, []);

    return( 
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
            <ThemeToggle />
            {isDark ? <StarBackground /> : <SkyBackground />}
            <div className="relative z-10">
                <Navbar />
                <main>
                    <HomeSection />
                    <AboutSection />
                    <SkillsSection />
                    <ProjectsSection />
                    <ContactSection />
                    <Footer />
                </main>
            </div>
        </div>
    );
};
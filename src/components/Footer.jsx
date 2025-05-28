import { ArrowUp } from "lucide-react";


export const Footer = () => {
    return (
        <footer className="py-12 px-4 bg-secondary/30">
            <div className="container mx-auto max-w-5xl text-center relative">
                <p className="text-muted-foreground mb-4">
                    © {new Date().getFullYear()} maouzal. All rights reserved.
                </p>
                <p className="text-muted-foreground">
                    Built with ❤️ using React and Tailwind CSS.
                </p>
                <a 
                    href="#home" 
                    className="mt-6 inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors absolute right-0 top-1/2 -translate-y-1/2"
                >
                    <span className="sr-only">Back to top</span>
                    <ArrowUp size={20} />
                    Back to top
                </a>
            </div>
        </footer>
    );
};
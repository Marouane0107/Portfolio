import { ArrowRight, ExternalLink, Github } from "lucide-react";


const projects = [
    {
        id: 1,
        title: "LinkUp - Student Services Super App",
        description: "CTO & Lead Architect — Architected a secure, scalable platform for ride-sharing and tutoring, managing user authentication, real-time database synchronization, and multi-service infrastructure for iOS, Android, and Web.",
        image: "/projects/linkUp-background.png",
        tags: ["TypeScript", "React Native", "Next.js", "Supabase", "PostgreSQL", "Node.js"],
        githubUrl: "https://github.com/Marouane0107/LinkUp",
        liveUrl: "https://www.linkupnow.ma/",
        role: "CTO & Lead Architect",
        featured: true,
    },
    {
        id: 2,
        title: "ft_transcendence",
        description: "Full-stack real-time social gaming application with 2FA authentication, friend management, and WebSocket-powered multiplayer Pong. Showcases security, real-time communication, and database management.",
        image: "/projects/PingPong.jpg",
        tags: ["Django", "Python", "JavaScript", "PostgreSQL", "Docker", "WebSockets", "2FA"],
        githubUrl: "https://github.com/Marouane0107/ft_transcendence",
        featured: true,
    },
    {
        id: 3,
        title: "IRC Server",
        description: "High-performance IRC server built with C++ featuring non-blocking I/O, socket programming, and multi-client management with authentication and channel operations.",
        image: "/projects/IRC.jpg",
        tags: ["C++", "Socket Programming", "Non-blocking I/O"],
        githubUrl: "https://github.com/Marouane0107/IRC",
    },
    {
        id: 4,
        title: "Cub3D",
        description: "3D raycasting engine with first-person perspective exploration, demonstrating graphics programming and algorithm optimization.",
        image: "/projects/Cub3d.png",
        tags: ["C", "Raycasting", "minilibX"],
        githubUrl: "https://github.com/Marouane0107/Cub3D",
    },
    {
        id: 5,
        title: "3D Portfolio",
        description: "A modern, interactive portfolio website built with React and Vite, featuring stunning 3D and animated UI elements powered by Framer Motion.",
        image: "/projects/3D-Portfolio.png",
        tags: ["React", "JavaScript", "Vite", "Framer Motion", "Tailwind CSS"],
        githubUrl: "https://github.com/Marouane0107/3D-Portfolio",
    },
];

export const ProjectsSection = () => {

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-muted-foreground mb-12 max-w-2xl mx-auto text-center">
                    Production systems and architectures demonstrating enterprise-grade development.
                </p>

                {/* Featured Project - LinkUp */}
                <div className="mb-12 bg-gradient-to-br from-card/80 to-card border border-primary/20 rounded-xl overflow-hidden shadow-xl">
                    <div className="grid md:grid-cols-2 gap-0">
                        <div className="relative h-64 md:h-auto">
                            <img src="/projects/linkUp-background.png" alt="LinkUp Platform" className="w-full h-full object-cover" />
                            <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                                FEATURED PROJECT
                            </div>
                        </div>
                        <div className="p-8 flex flex-col justify-center">
                            <h3 className="text-2xl md:text-3xl font-bold mb-2">LinkUp - Student Services Super App</h3>
                            <p className="text-primary font-semibold mb-4">CTO & Lead Architect</p>
                            <p className="text-muted-foreground mb-6">
                                Architecting a secure, scalable student ecosystem featuring real-time ride-sharing, academic tutoring, and an interactive community feed, integrated with a cross-platform real-time messaging system.
                            </p>
                            
                            <div className="mb-6">
                                <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide">System Architecture</h4>
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-start gap-2">
                                        <span className="text-primary mt-0.5">▸</span>
                                        <span><strong>Frontend:</strong> React Native (iOS/Android) + Next.js (Web)</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-primary mt-0.5">▸</span>
                                        <span><strong>Backend:</strong> Node.js + Supabase (PostgreSQL)</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-primary mt-0.5">▸</span>
                                        <span><strong>Security:</strong> 2FA, JWT tokens, Row-level security</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-primary mt-0.5">▸</span>
                                        <span><strong>Infrastructure:</strong> Real-time subscriptions, Cloud functions</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 mb-6">
                                {["TypeScript", "React Native", "Next.js", "Supabase", "PostgreSQL", "Node.js"].map((tag, idx) => (
                                    <span key={idx} className="text-xs font-medium bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="flex gap-3">
                                <a href="https://www.linkupnow.ma/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                                    <ExternalLink size={18} />
                                    View Live Site
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Other Projects Grid */}
                <h3 className="text-xl font-semibold mb-6">Other Projects</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.filter(p => p.id !== 1).map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg shadow-xs overflow-hidden card-hover, ">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, key) => (
                                        <span key={key} className="text-xs font-medium border bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <Github size={20} />
                                        </a>
                                        {project.liveUrl && (
                                            <a href={project.liveUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                <div className="mt-12 text-center">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" href="https://github.com/Marouane0107">
                        See more on my GitHub <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};
import { ArrowRight, ExternalLink, Github } from "lucide-react";


const projects = [
    {
        id: 1,
        title: "Movie App",
        description: "A movie app built that allows users to search for movies, view details, and manage their favorite movies.",
        image: "/projects/MovieApp.jpg",
        tags: ["React", "JavaScript", "CSS"],
        githubUrl: "https://github.com/Marouane0107/MovieApp",
        liveUrl: "https://movie-app-lac-pi-41.vercel.app/",
    },
    {
        id: 2,
        title: "3D Portfolio",
        description: "A modern, interactive portfolio website built with React and Vite, featuring stunning 3D and animated UI elements powered by Framer Motion.",
        image: "/projects/3D-Portfolio.png",
        tags: ["React", "JavaScript", "Vite", "Framer Motion", "Tailwind CSS"],
        githubUrl: "https://github.com/Marouane0107/3D-Portfolio",
        liveUrl: "https://3-d-portfolio-psi-wine.vercel.app/",
    },
    {
        id: 3,
        title: "IRC",
        description: "A simple IRC client built with C++, allowing users to connect to IRC servers and chat with others.",
        image: "/projects/IRC.jpg",
        tags: ["C++", "Socket Programming", "Multithreading"],
        githubUrl: "https://github.com/Marouane0107/IRC",
    },
    {
        id: 4,
        title: "Cub3D",
        description: "Cub3D is a 3D raycasting engine that allows users to explore a 3D world from a first-person perspective.",
        image: "/projects/Cub3d.png",
        tags: ["C", "Raycasting", "minilibX"],
        githubUrl: "https://github.com/Marouane0107/Cub3D",
    },
    {
        id: 5,
        title: "ft_transcendence",
        description: "ft_transcendence is a full-stack real-time social gaming application. It features user authentication (including two-factor), friend management, and a browser-based Pong game.",
        image: "/projects/PingPong.jpg",
        tags: ["Django", "Python", "JavaScript", "PostgreSQL", "Docker", "HTML", "CSS", "WebSockets"],
        githubUrl: "https://github.com/Marouane0107/ft_transcendence",
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
                    Here are some of the projects I've worked on that showcase my skills and interests.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
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
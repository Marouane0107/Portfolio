import { Briefcase, Code, User } from "lucide-react";


export const AboutSection = () => {

	return( 
		<section id="about" className="py-24 px-4 rolative">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
					About <span className="text-primary">Me</span>
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					<div className="space-y-6">
					<h3 className="text-2xl font-semibold"> Chief Technology Officer & Full-Stack Architect </h3>
					<p className="text-muted-foreground">
						I am a Software Architect and Chief Technology Officer specializing in building high-performance, scalable digital ecosystems. Currently leading the technical vision at LinkUp Now Maroc, I oversee the full-stack development of a complex mobile service platform, focusing on secure authentication, real-time database synchronization, and seamless user experiences.
					</p>
					<p className="text-muted-foreground">
						My background from 1337 Coding School has given me a deep, low-level understanding of systems (C/C++), which I now apply to modern web and mobile stacks like React Native, Node.js, and Supabase. I am a strong advocate for AI-assisted development, leveraging advanced tools to accelerate delivery cycles without compromising on code quality or security.
					</p>
					<p className="text-muted-foreground">
						Whether I'm architecting a backend for a financial platform or optimizing mobile performance, my goal is to turn complex business requirements into elegant, maintainable code.
					</p>
					
					<div className="bg-secondary/30 rounded-lg p-6 space-y-4">
						<h4 className="font-semibold text-lg">Professional Experience</h4>
						<div className="space-y-3">
							<div>
								<div className="flex justify-between items-start mb-1">
									<h5 className="font-semibold">Chief Technology Officer</h5>
									<span className="text-sm text-muted-foreground">Feb 2026 – Present</span>
								</div>
								<p className="text-sm text-primary mb-1">LinkUp Now Maroc</p>
								<ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
									<li>Leading technical roadmap for student-focused mobile ecosystem</li>
									<li>Managing full-stack development and security for iOS/Android and Web platforms</li>
									<li>Architecting secure authentication with 2FA and user verification systems</li>
								</ul>
							</div>
							<div>
								<div className="flex justify-between items-start mb-1">
									<h5 className="font-semibold">Full-Stack Developer (Intern)</h5>
									<span className="text-sm text-muted-foreground"> Sep 2025 - Feb 2026</span>
								</div>
								<p className="text-sm text-primary mb-1">Finance Project Development</p>
								<ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
									<li>Developed core architecture and backend services</li>
									<li>Implemented secure database management with PostgreSQL</li>
								</ul>
							</div>
						</div>
					</div>
						<div className="flex justify-center pt-4">
							<a href="#contact" className="cosmic-button">
								Get in Touch
							</a>
						</div>
					</div>

					<div className="grid grid-cols-1 gap-6">
						<div className="gradient-border p-6 card-hover">
							<div className="flex items-start gap-4">
								<div className="p-3 rounded-full bg-primary/10">
									<Code className="h-6 w-6 text-primary" />
								</div>
								<div className="text-left">
									<h4 className="font-semibold text-lg"> Full-Stack Architecture</h4>
									<p className="text-muted-foreground">
										Designing and implementing scalable mobile and web applications with modern frameworks and cloud infrastructure.
									</p>
								</div>
							</div>
						</div>
						<div className="gradient-border p-6 card-hover">
							<div className="flex items-start gap-4">
								<div className="p-3 rounded-full bg-primary/10">
									<User className="h-6 w-6 text-primary" />
								</div>
								<div className="text-left">
									<h4 className="font-semibold text-lg"> Security & Authentication </h4>
									<p className="text-muted-foreground">
										Implementing robust security systems including 2FA, user verification, and secure database management.
									</p>
								</div>
							</div>
						</div>
						<div className="gradient-border p-6 card-hover">
							<div className="flex items-start gap-4">
								<div className="p-3 rounded-full bg-primary/10">
									<Briefcase className="h-6 w-6 text-primary" />
								</div>
								<div className="text-left">
									<h4 className="font-semibold text-lg"> Database & Backend Systems </h4>
									<p className="text-muted-foreground">
									Architecting PostgreSQL/Supabase databases with real-time synchronization and non-blocking I/O for high performance.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

	);
};

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
						<h3 className="text-2xl font-semibold"> Full-Stack Developer & Software Engineering Student </h3>
						<p className="text-muted-foreground">
							I'm Marouane Aouzal, a software engineering student at 1337 Coding School with hands-on experience in developing robust, full-stack applications. 
							Whether I'm building real-time multiplayer games, implementing networking protocols, or designing scalable infrastructures, I thrive on solving challenging problems through clean and maintainable code.
						</p>
						<p className="text-muted-foreground">
							My technical background includes C, C++, Django, JavaScript, React, Docker, and PostgreSQL. 
							Notable projects include a real-time Pong game using WebSockets, an IRC server with non-blocking I/O, and a multi-service Dockerized infrastructure with Nginx, MariaDB, and WordPress. 
							I'm passionate about both front-end elegance and backend performance — always eager to learn, collaborate, and build meaningful software.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
							<a href="#contact" className="cosmic-button">
								Get in Touch
							</a>
							<a href="public/AOUZAL_MAROUANE_CV.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300" download>
								Download CV
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
									<h4 className="font-semibold text-lg"> Web Devalopment</h4>
									<p className="text-muted-foreground">
										Building responsive and interactive web applications using modern frameworks.
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
									<h4 className="font-semibold text-lg"> Software Engineering </h4>
									<p className="text-muted-foreground">
										Studying software engineering principles to design and implement efficient systems.
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
									<h4 className="font-semibold text-lg"> Project Management </h4>
									<p className="text-muted-foreground">
									Collaborating on full-stack software projects with version control, task planning, and deployment workflows using tools like Git, Docker, and GitHub to ensure smooth development and delivery.
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

import { act, useState } from "react";
import { cn } from "@/lib/utils";


const skills = [
	// Languages
	{ name: 'C', category: 'Languages' },
	{ name: 'C++', category: 'Languages' },
	{ name: 'Python', category: 'Languages' },
	{ name: 'TypeScript', category: 'Languages' },
	{ name: 'JavaScript', category: 'Languages' },

	// Frameworks & Libraries
	{ name: 'React', category: 'Frameworks' },
	{ name: 'React Native', category: 'Frameworks' },
	{ name: 'Django', category: 'Frameworks' },
	{ name: 'Node.js', category: 'Frameworks'},
	{ name: 'Tailwind CSS', category: 'Frameworks' },

	// Infrastructure & Database
	{ name: 'Docker', category: 'Infrastructure' },
	{ name: 'Supabase', category: 'Infrastructure' },
	{ name: 'PostgreSQL', category: 'Infrastructure' },
	{ name: 'Linux', category: 'Infrastructure' },

	// AI & Development Tools
	{ name: 'AI-Assisted Development', category: 'Tools' },
	{ name: 'Cursor AI', category: 'Tools' },
	{ name: 'GitHub Copilot', category: 'Tools' },
	{ name: 'Git/GitHub', category: 'Tools' },
	{ name: 'VS Code', category: 'Tools' },
]

const categorys = [
	"all",
	"Languages",
	"Frameworks",
	"Infrastructure",
	"Tools"
];

export const SkillsSection = () => {

	const [activeCategory, setActiveCategory] = useState("all");

	const filteredSkills = activeCategory === "all" ? skills : skills.filter(skill => skill.category === activeCategory);

	return (
		<section id="skills" className="py-24 relotave bg-secondary/30">
			<div className="cotainer mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
					My <span className="text-primary"> Skills</span>
				</h2>

				<div className="flex flex-wrap justify-center mb-12 gap-4">
					{categorys.map((category, key) => (
						<button
							key={key}
							onClick={() => setActiveCategory(category)}
							className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize ",
							activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-seconfary"
							)}
						>
							{category}
						</button>
					))}
				</div>

				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
					{filteredSkills.map((skill, key) => (
						<div key={key} className="bg-card rounded-lg shadow-xs p-4 card-hover text-center hover:scale-105 transition-transform duration-300">
							<div className="flex flex-col items-center justify-center h-full">
								<h3 className="text-base font-semibold text-foreground">{skill.name}</h3>
								<span className="text-xs text-muted-foreground mt-1">{skill.category}</span>
							</div>
						</div>
					))}
				</div>

			</div>
		</section>
	);
};
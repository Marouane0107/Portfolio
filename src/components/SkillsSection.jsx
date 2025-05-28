import { act, useState } from "react";
import { cn } from "@/lib/utils";


const skills = [
	// Programming Languages
	{ name: 'C', level: '95', category: 'Programming Languages' },
	{ name: 'C++', level: '90', category: 'Programming Languages' },
	{ name: 'Python', level: '80', category: 'Programming Languages' },

	// Frontend Skills
	{ name: 'HTML/CSS', level: '80', category: 'Frontend' },
	{ name: 'JavaScript', level: '75', category: 'Frontend' },
	{ name: 'React', level: '80', category: 'Frontend' },
	{ name: 'Tailwind CSS', level: '60', category: 'Frontend' },

	// Backend Skills
	{ name: 'Django', level: '85', category: 'Backend' },
	{ name: 'Node.js', level: '70', category: 'Backend'},
	{ name: 'PostgreSQL', level: '80', category: 'Backend' },
	{ name: 'MariaDB', level: '70', category: 'Backend'},

	// Tools
	{ name: 'Git/Github', level: '90', category: 'Tools' },
	{ name: 'Docker', level: '80', category: 'Tools' },
	{ name: 'Linux', level: '90', category: 'Tools' },
	{ name: 'Bash', level: '85', category: 'Tools' },
	{ name: 'VS Code', level: '95', category: 'Tools' },
]

const categorys = [
	"all",
	"Programming Languages",
	"Frontend",
	"Backend",
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

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredSkills.map((skill, key) => (
						<div key={key} className="bg-card rounded-lg shadow-xs p-6 card-hover">
							<div className="text-left mb-4">
								<h3 className="text-lg font-semibold">{skill.name}</h3>
							</div>
							<div className="w-full bg-secondary/50 rounded-full h-2.5 dark:bg-gray-700 overflow-hidden">
									<div
										className="bg-primary h-2.5 rounded-full origin-left animate-[grow_1.5s_ease-in-out]"
										style={{ width: `${skill.level}%` }}
									/>
							</div>
							<div className="text-right mt-1">
								<span className="text-sm text-muted-foreground">{skill.level}%</span>
							</div>
						</div>
					))}
				</div>

			</div>
		</section>
	);
};
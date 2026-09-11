import { ArrowDown, Mail, Terminal, Workflow, Zap } from "lucide-react";
import { createElement } from "react";

const highlights = [
	{ icon: Terminal, label: "Foundation", title: "1337 Coding School", detail: "Rigorous 42 Network C/C++ Discipline" },
	{ icon: Workflow, label: "Expertise", title: "Low-Level to Full-Stack", detail: "Memory Safety to Modern Cloud Stacks" },
	{ icon: Zap, label: "Throughput", title: "Real-Time Systems", detail: "Non-blocking Sockets & Real-Time Sync" },
];

export const HomeSection = () => (
	<section id="home" className="celestial-hero relative px-4">
		<div className="container relative z-10 mx-auto text-center">
			<div className="hero-status"><span />Available for Strategic & Architectural Advisory</div>
			<h1>Hi, I'm <span>Marouane</span> Aouzal</h1>
			<p className="hero-description">Chief Technology Officer, Full-Stack & Mobile Architect. Building secure, scalable web and mobile platforms with React Native and Expo. From architecting real-time systems to shipping apps on Google Play and the Apple App Store, I transform complex challenges into robust, efficient solutions.</p>
			<div className="hero-actions">
				<a href="#projects" className="cosmic-button">View My Projects <ArrowDown size={18} /></a>
				<a href="#contact" className="secondary-button">Get In Touch <Mail size={18} /></a>
			</div>
			<div className="hero-highlights">
				{highlights.map(({ icon: Icon, label, title, detail }) => (
					<div className="hero-highlight" key={label}>
						<div>{createElement(Icon, { size: 20 })}<span>{label}</span></div>
						<h2>{title}</h2>
						<p>{detail}</p>
					</div>
				))}
			</div>
		</div>
	</section>
);
import {cn} from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";


const navItems = [
	{ name: "Home", href: "#home" },
	{ name: "About", href: "#about" },
	{ name: "Skills", href: "#skills" },
	{ name: "Projects", href: "#projects" },
	{ name: "Contact", href: "#contact" },
	
];

export const Navbar = () => {

	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.screenY > 10);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<nav className={cn("fixed w-full z-40 transition-all duration-300", isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5")}>
			<div className="container flex items-center justify-between">
				<a className="text-xl font-bold text-primary flex items-center" href="#home" >
					<span className="relative z-20">
						<span className="text-glow text-foreground"> Mar_1 </span> Portfolio
					</span>
				</a>
				{/* desktop nav */}
				<div className="hidden md:flex items-center space-x-8">
					{navItems.map((item, key) => (
						<a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
							{item.name}
						</a> ))}
					<ThemeToggle />
				</div>
				{/* mobile nav */}

				<div className="md:hidden flex items-center space-x-2">
					<ThemeToggle />
					<button onClick={() => setIsMobileMenuOpen((prev) => !prev)} 
						className="p-2 text-foreground z-50" aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
					> 
						{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />} 
					</button>
				</div>

				<div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center", 
						"transition-all duration-300 md:hidden",
						isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}
				>
					<div className="flex flex-col space-y-8 text-xl">
						{navItems.map((item, key) => (
							<a 
								key={key} href={item.href} 
								className="text-foreground/80 hover:text-primary transition-colors duration-300"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								{item.name}
							</a> ))}
					</div>
				</div>
			</div>
		</nav>
	);
}
import { useEffect, useState } from "react";

export const StarBackground = () => {
	const [stars, setStars] = useState([]);
	const [meteors, setMeteors] = useState([]);

	useEffect(() => {
		createStar();
		creatMeteors();

		const handleResize = () => {
			createStar();
			creatMeteors();
		}

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		}
	}, []);

	const createStar = () => {
		// Reduce stars on mobile for better performance
		const isMobile = window.innerWidth < 768;
		const divisor = isMobile ? 20000 : 10000;
		const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / divisor);
		const newStars = [];

		for (let i = 0; i < numberOfStars; i++) {
			newStars.push({
				id: i,
				size: Math.random() * 3 + 1,
				x: Math.random() * 100,
				y: Math.random() * 100,
				opacity: Math.random() * 0.5 + 0.5,
				animationDuration: Math.random() * 4 + 2,
			});

			setStars(newStars);
		};
	};

	const creatMeteors = () => {
		// Disable meteors on mobile for performance
		const isMobile = window.innerWidth < 768;
		const numberOfMeteors = isMobile ? 0 : 5;
		const newMeteors = [];

		for (let i = 0; i < numberOfMeteors; i++) {
			newMeteors.push({
				id: i,
				size: Math.random() * 2 + 1,
				x: Math.random() * 100,
				y: Math.random() * 10,
				delay: 0,
				animationDuration: Math.random() * 4 + 4,
			});

			setMeteors(newMeteors);
		};
	};

	return  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
				{stars.map((star) => (
				<div key={star.id} className="star animate-pulse-subtle"
					style={{
						width: `${star.size}px`,
						height: `${star.size}px`,
						left: `${star.x}%`,
						top: `${star.y}%`,
						opacity: star.opacity,
						animationDuration: `${star.animationDuration}s`,
					}}></div>
				))}
				{meteors.map((meteor) => (
				<div key={meteor.id} className="meteor animate-meteor"
					style={{
						width: `${meteor.size * 40}px`,
						height: `${meteor.size * 1.5}px`,
						left: `${meteor.x}%`,
						top: `${meteor.y}%`,
						animationDelay: `${meteor.delay}s`,
						animationDuration: `${meteor.animationDuration}s`,
					}}></div>
				))}
			</div>
};
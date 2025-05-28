import { useEffect, useState } from "react";

export const SkyBackground = () => {
    const [clouds, setClouds] = useState([]);

    useEffect(() => {
        createClouds();

        const handleResize = () => createClouds();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const createClouds = () => {
        const numberOfClouds = Math.max(5, Math.floor(window.innerWidth / 300));
        const newClouds = [];
        for (let i = 0; i < numberOfClouds; i++) {
            newClouds.push({
                id: i,
                size: Math.random() * 80 + 80,
                x: Math.random() * 100,
                y: Math.random() * 60 + 10,
                opacity: Math.random() * 0.3 + 0.4,
                duration: Math.random() * 20 + 20,
            });
        }
        setClouds(newClouds);
    };

    return (
        <div
            className="fixed inset-0 overflow-hidden pointer-events-none"
            style={{
                zIndex: 0,
                background: "linear-gradient(to bottom, #cbe5ff 0%, #f6fbff 100%)"
            }}>
            {clouds.map(cloud => (
                <div
                    key={cloud.id}
                    style={{
                        position: "absolute",
                        left: `${cloud.x}%`,
                        top: `${cloud.y}%`,
                        width: `${cloud.size}px`,
                        height: `${cloud.size * 0.6}px`,
                        opacity: cloud.opacity,
                        background: "white",
                        borderRadius: "50%",
                        filter: "blur(2px)",
                        animation: `cloud-move ${cloud.duration}s linear infinite`,
                    }}
                />
            ))}
            <style>
                {`
                @keyframes cloud-move {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(100vw); }
                }
                `}
            </style>
        </div>
    );
};



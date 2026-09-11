import { useEffect, useRef } from "react";
import * as THREE from "three";

export const CelestialBackground = ({ isDark }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        let renderer;
        try {
            renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        } catch {
            return;
        }
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        container.appendChild(renderer.domElement);
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
        camera.position.z = 80;
        const positions = new Float32Array(1800 * 3);
        for (let index = 0; index < positions.length; index += 1) {
            positions[index] = (Math.random() - .5) * 350;
        }
        const starsGeometry = new THREE.BufferGeometry();
        starsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        const starsMaterial = new THREE.PointsMaterial({ color: isDark ? 0xc4d9ff : 0x547bb2, size: .18, transparent: true, opacity: isDark ? .65 : .25 });
        const stars = new THREE.Points(starsGeometry, starsMaterial);
        if (isDark) scene.add(stars);
        const core = new THREE.Group();
        const shellGeometry = new THREE.SphereGeometry(9, 48, 32);
        const shellMaterial = isDark
            ? new THREE.MeshStandardMaterial({ color: 0xbca0dc, roughness: .85 })
            : new THREE.MeshBasicMaterial({ color: 0xffd15c });
        core.add(new THREE.Mesh(shellGeometry, shellMaterial));
        const innerGeometry = new THREE.SphereGeometry(4, 32, 24);
        const innerMaterial = new THREE.MeshStandardMaterial({ color: 0x539bc4, roughness: .8 });
        const moon = new THREE.Mesh(innerGeometry, innerMaterial);
        const ringGeometry = new THREE.RingGeometry(12, 17, 96);
        const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xc5b7a5, side: THREE.DoubleSide, transparent: true, opacity: .55 });
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        ring.rotation.x = 1.15;
        ring.rotation.y = .25;
        if (isDark) {
            core.add(ring);
            scene.add(moon);
            scene.add(new THREE.AmbientLight(0x9aaacf, 1.2));
            const sunlight = new THREE.DirectionalLight(0xffeed9, 3);
            sunlight.position.set(-40, 40, 60);
            scene.add(sunlight);
        }
        scene.add(core);
        const cloudGeometry = new THREE.SphereGeometry(1, 24, 16);
        const cloudMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1 });
        const clouds = new THREE.Group();
        if (!isDark) {
            scene.add(new THREE.AmbientLight(0xe0efff, 2.5));
            const daylight = new THREE.DirectionalLight(0xfff5df, 3);
            daylight.position.set(40, 60, 50);
            scene.add(daylight);
            for (let index = 0; index < 7; index += 1) {
                const cloud = new THREE.Group();
                for (let puff = 0; puff < 6; puff += 1) {
                    const mesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
                    mesh.position.set((puff - 2.5) * 3.1, Math.sin(puff * 1.8) * 1.5, Math.cos(puff) * 1.5);
                    mesh.scale.set(4.5, 2.6 + Math.sin(puff + 1), 3);
                    cloud.add(mesh);
                }
                cloud.userData = { horizontal: index % 2 === 0 ? -.8 : .8, vertical: .65 - index * .23 };
                clouds.add(cloud);
            }
            scene.add(clouds);
        }
        const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
        let pointerX = 0;
        let pointerY = 0;
        let halfWidth = 0;
        const halfHeight = Math.tan(THREE.MathUtils.degToRad(30)) * 110;
        const resize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            halfWidth = halfHeight * camera.aspect;
            core.position.set(halfWidth * .7, halfHeight * .64, -30);
            core.scale.setScalar(window.innerWidth < 768 ? .65 : 1);
            moon.position.set(-halfWidth * .8, -halfHeight * .3, -30);
            clouds.children.forEach((cloud) => {
                cloud.position.set(cloud.userData.horizontal * halfWidth, cloud.userData.vertical * halfHeight, -30);
                cloud.scale.setScalar(window.innerWidth < 768 ? .65 : 1);
            });
            renderer.render(scene, camera);
        };
        const move = (event) => {
            pointerX = (event.clientX / window.innerWidth - .5) * .2;
            pointerY = (event.clientY / window.innerHeight - .5) * .15;
        };
        const animate = (time) => {
            if (document.hidden) return;
            core.rotation.y = pointerX;
            core.rotation.z = -.2 + pointerY;
            stars.rotation.y = time * .000004;
            clouds.children.forEach((cloud, index) => {
                cloud.position.x = cloud.userData.horizontal * halfWidth + Math.sin(time * .00008 + index) * 5;
            });
            renderer.render(scene, camera);
        };
        const updateMotion = () => {
            renderer.setAnimationLoop(motion.matches ? null : animate);
            renderer.render(scene, camera);
        };
        resize();
        updateMotion();
        window.addEventListener("resize", resize);
        window.addEventListener("pointermove", move, { passive: true });
        motion.addEventListener("change", updateMotion);
        return () => {
            renderer.setAnimationLoop(null);
            window.removeEventListener("resize", resize);
            window.removeEventListener("pointermove", move);
            motion.removeEventListener("change", updateMotion);
            [starsGeometry, starsMaterial, shellGeometry, shellMaterial, innerGeometry, innerMaterial, ringGeometry, ringMaterial, cloudGeometry, cloudMaterial].forEach((resource) => resource.dispose());
            renderer.dispose();
            renderer.domElement.remove();
        };
    }, [isDark]);

    return <div ref={containerRef} className="celestial-scene" data-theme={isDark ? "space" : "sky"} aria-hidden="true" />;
};
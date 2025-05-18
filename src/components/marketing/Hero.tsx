// // Hero banner for landing page
// export default function Hero() {
//     return (
//         <section className="text-center py-20">
//             <h1 className="text-5xl font-extrabold mb-5">Design Smarter</h1>
//             <p className="text-xl mb-10">AI-powered CAD design, made simple.</p>
//             <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold">
//                 Démarrer gratuitement
//             </button>
//         </section>
//     );
// }
//
// export default function Hero() {
//     return (
//         <section className="relative h-screen flex items-center justify-center overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-90"></div>
//
//             <div className="container mx-auto px-4 z-10 text-center">
//                 <h1 className="text-4xl md:text-6xl font-bold mb-6">
//                     <span className="text-blue-400">Transformez</span> vos idées en CAO
//                 </h1>
//
//                 <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
//                     Notre IA convertit vos descriptions textuelles en modèles CAO précis en quelques secondes
//                 </p>
//
//                 <div className="flex flex-col sm:flex-row justify-center gap-4">
//                     <button className="px-8 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
//                         Commencer maintenant
//                     </button>
//                     <button className="px-8 py-3 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors">
//                         Voir la démo
//                     </button>
//                 </div>
//             </div>
//         </section>
//     );
// }
// 'use client';
//
//
// import { Button } from "@/components/ui/Button";
//
// export function Hero() {
//     return (
//         <section className="text-center py-20 px-4">
//             <div className="container">
//                 <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
//                     Design Smarter
//                 </h1>
//                 <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
//                     AI-powered CAD design, made simple.
//                 </p>
//                 <Button size="large">
//                     Démarrer gratuitement
//                 </Button>
//             </div>
//         </section>
//     );
// }
// 'use client';
//
// import { Button } from '@/components/ui/Button';
// import styles from '../layout/hero.module.css';
//
// export default function Hero() {
//     return (
//         <section className={styles.heroSection}>
//             <div className="container">
//                 <div className={styles.heroContent}>
//                     <h1 className={`${styles.title} ${styles.animatedElement}`}>
//                         Design Smarter
//                     </h1>
//                     <p className={`${styles.subtitle} ${styles.animatedElement}`}>
//                         AI-powered CAD design, made simple.
//                     </p>
//                     <div className={`${styles.buttonContainer} ${styles.animatedElement}`}>
//                         <Button size="large">
//                             Démarrer gratuitement
//                         </Button>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }
'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/Button';
import styles from './hero.module.css';
export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsVisible(true);

        // Optional: Create dynamic particles
        const createParticles = () => {
            const particlesContainer = document.querySelector(`.${styles.particles}`);
            if (!particlesContainer) return;

            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.className = styles.particle;

                // Random position, size and animation delay
                const size = Math.random() * 5 + 2;
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                const delay = Math.random() * 5;

                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.left = `${posX}%`;
                particle.style.top = `${posY}%`;
                particle.style.animationDelay = `${delay}s`;

                particlesContainer.appendChild(particle);
            }
        };

        createParticles();
    }, []);

    return (
        <section ref={heroRef} className={`${styles.heroSection} ${isVisible ? styles.visible : ''}`}>
            {/* Grid lines background */}
            <div className={styles.gridLines}></div>

            {/* Floating circles */}
            <div className={styles.particles}>
                <div className={`${styles.particleCircle} ${styles.circle1}`}></div>
                <div className={`${styles.particleCircle} ${styles.circle2}`}></div>
                <div className={`${styles.particleCircle} ${styles.circle3}`}></div>
                <div className={`${styles.particleCircle} ${styles.circle4}`}></div>
            </div>

            <div className={styles.heroContainer}>
                <h1 className={`${styles.title} ${isVisible ? styles.titleVisible : ''}`}>
                    Design Smarter
                </h1>
                <p className={`${styles.subtitle} ${isVisible ? styles.subtitleVisible : ''}`}>
          <span className={styles.typingAnimation}>
            AI-powered CAD design, made simple.
          </span>
                </p>
                <div className={`${styles.buttonContainer} ${isVisible ? styles.buttonVisible : ''}`}>
                    <Button
                        size="large"
                        className={styles.glowingButton}
                    >
                        Démarrer gratuitement
                    </Button>
                </div>
            </div>

            {/* Optional: 3D model preview */}
            <div className={`${styles.modelPreview} ${isVisible ? styles.modelVisible : ''}`}>
                <svg width="100%" height="100%" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Simplified 3D model wireframe */}
                    <path d="M400 50L700 200L400 250L100 200L400 50Z" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                    <path d="M400 50L400 250" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                    <path d="M100 200L700 200" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                    <circle cx="400" cy="50" r="5" fill="white" />
                    <circle cx="700" cy="200" r="5" fill="white" />
                    <circle cx="400" cy="250" r="5" fill="white" />
                    <circle cx="100" cy="200" r="5" fill="white" />
                </svg>
            </div>
        </section>
    );
}
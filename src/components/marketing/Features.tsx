// // Features showcase section
// export default function Features() {
//     return (
//         <section id="features" className="py-16">
//             <h2 className="text-3xl font-bold mb-10">Fonctionnalités</h2>
//             <div className="grid gap-6 md:grid-cols-3">
//                 <div className="bg-cadia-card p-6 rounded-xl">
//                     <h3 className="text-xl font-semibold mb-2">Génération instantanée 2D/3D</h3>
//                     <p>Créez des plans en quelques secondes à partir de prompts ou de paramètres techniques.</p>
//                 </div>
//                 <div className="bg-cadia-card p-6 rounded-xl">
//                     <h3 className="text-xl font-semibold mb-2">Compatible tous formats</h3>
//                     <p>Exportez vos plans au format .STEP, .STL, .DXF, etc.</p>
//                 </div>
//                 <div className="bg-cadia-card p-6 rounded-xl">
//                     <h3 className="text-xl font-semibold mb-2">Multi-domaines</h3>
//                     <p>Utilisez CADIA dans le génie civil, mécanique, électrique, biomécanique, etc.</p>
//                 </div>
//             </div>
//         </section>
//     );
// }
//
// export default function Features() {
//     const features = [
//         {
//             icon: '⚡',
//             title: "Génération instantanée",
//             description: "Modèles CAO en quelques secondes"
//         },
//         {
//             icon: '📐',
//             title: "Précision technique",
//             description: "Dimensions et spécifications exactes"
//         },
//         {
//             icon: '🔄',
//             title: "Multi-formats",
//             description: "Export STEP, STL, IGES, etc."
//         }
//     ];
//
//     return (
//         <section id="fonctionnalités" className="py-20 bg-gray-900/50">
//             <div className="container mx-auto px-4">
//                 <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
//                     Nos <span className="text-blue-400">fonctionnalités</span>
//                 </h2>
//
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                     {features.map((feature, index) => (
//                         <div key={index} className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors">
//                             <div className="text-4xl mb-4">{feature.icon}</div>
//                             <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//                             <p className="text-gray-400">{feature.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }
'use client';

import styles from './features.module.css';

interface FeatureCardProps {
    title: string;
    description: string;
}

function FeatureCard({ title, description }: FeatureCardProps) {
    return (
        <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>{title}</h3>
            <p className={styles.featureDescription}>{description}</p>
        </div>
    );
}

export default function Features() {
    const features = [
        {
            title: 'Génération instantanée 2D/3D',
            description: 'Create plans in seconds from prompts or technical parameters. Our AI understands your intentions and translates them into precise models.'
        },
        {
            title: 'Compatible tous formats',
            description: 'Export your designs in .STEP, .STL, .DXF, and many other formats. Easily integrate your creations into any CAD software.'
        },
        {
            title: 'Multi-domaines',
            description: 'Use CADIA in civil engineering, mechanical, electrical, biomechanical, and many other fields. Our AI adapts to your specific needs.'
        }
    ];

    return (
        <section id="features" className={styles.featuresSection}>
            <div className={styles.featuresContainer}>
                <h2 className={styles.sectionTitle}>Fonctionnalités</h2>
                <div className={styles.featuresGrid}>
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
// // Pricing plans display
// export default function Pricing() {
//     return (
//         <section id="plans" className="py-16">
//             <h2 className="text-3xl font-bold mb-10">Tarifs</h2>
//             <div className="grid gap-6 md:grid-cols-3">
//                 <div className="bg-cadia-card p-6 rounded-xl">
//                     <h3 className="text-xl font-semibold mb-2">Gratuit</h3>
//                     <p>5 fichiers CAO / mois</p>
//                 </div>
//                 <div className="bg-cadia-card p-6 rounded-xl">
//                     <h3 className="text-xl font-semibold mb-2">Pro – 19€/mois</h3>
//                     <p>Génération illimitée, support premium</p>
//                 </div>
//                 <div className="bg-cadia-card p-6 rounded-xl">
//                     <h3 className="text-xl font-semibold mb-2">Business – 99€/mois</h3>
//                     <p>Accès multi-utilisateurs + API</p>
//                 </div>
//             </div>
//         </section>
//     );
// }
'use client';

import { Button } from '@/components/ui/Button';
import styles from './pricing.module.css';

interface PricingCardProps {
    title: string;
    price: string;
    description: string;
    features: string[];
    isPopular?: boolean;
}

function PricingCard({ title, price, description, features, isPopular = false }: PricingCardProps) {
    return (
        <div className={`${styles.pricingCard} ${isPopular ? styles.popular : ''}`}>
            {isPopular && <div className={styles.popularBadge}>Popular</div>}
            <h3 className={styles.planTitle}>{title}</h3>
            <p className={styles.planPrice}>{price}</p>
            <p className={styles.planDescription}>{description}</p>
            <ul className={styles.featuresList}>
                {features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>{feature}</li>
                ))}
            </ul>
            <div className={styles.buttonContainer}>
                <Button
                    variant={isPopular ? "primary" : "secondary"}
                    className="w-full"
                >
                    Choose Plan
                </Button>
            </div>
        </div>
    );
}

export default function Pricing() {
    const pricingPlans = [
        {
            title: 'Free',
            price: '€0/month',
            description: 'Perfect for beginners and occasional users.',
            features: [
                '5 CAD designs per month',
                'Basic editing tools',
                'Standard export formats',
                'Community support'
            ],
            isPopular: false
        },
        {
            title: 'Pro',
            price: '€19/month',
            description: 'Ideal for professionals and regular users.',
            features: [
                'Unlimited CAD designs',
                'Advanced editing tools',
                'All export formats',
                'Priority support',
                'AI design suggestions'
            ],
            isPopular: true
        },
        {
            title: 'Business',
            price: '€99/month',
            description: 'Complete solution for teams and enterprises.',
            features: [
                'Multi-user access',
                'Team collaboration tools',
                'API access',
                'Dedicated support',
                'Custom integrations',
                'Advanced analytics'
            ],
            isPopular: false
        }
    ];

    return (
        <section id="plans" className={styles.pricingSection}>
            <div className={styles.pricingContainer}>
                <h2 className={styles.sectionTitle}>Tarifs</h2>
                <div className={styles.pricingGrid}>
                    {pricingPlans.map((plan, index) => (
                        <PricingCard
                            key={index}
                            title={plan.title}
                            price={plan.price}
                            description={plan.description}
                            features={plan.features}
                            isPopular={plan.isPopular}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}


// // // // Site footer component
// // // export default function Footer() {
// // //     return (
// // //         <footer className="text-center py-10 text-cadia-accent">
// // //             &copy; 2025 CADIA. Tous droits réservés.
// // //         </footer>
// // //     );
// // // }
// // //
// //
// // export default function Footer() {
// //     const legalLinks = ['Mentions légales', 'Confidentialité', 'Conditions'];
// //
// //     return (
// //         <footer className="bg-black border-t border-gray-800 py-12">
// //             <div className="container mx-auto px-4">
// //                 <div className="flex flex-col md:flex-row justify-between items-center">
// //                     <div className="text-2xl font-bold mb-6 md:mb-0">
// //                         <span className="text-blue-500">CAD</span>IA
// //                     </div>
// //
// //                     <div className="flex space-x-6">
// //                         {legalLinks.map((item) => (
// //                             <a
// //                                 key={item}
// //                                 href="#"
// //                                 className="text-gray-400 hover:text-white transition-colors"
// //                             >
// //                                 {item}
// //                             </a>
// //                         ))}
// //                     </div>
// //                 </div>
// //
// //                 <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
// //                     © {new Date().getFullYear()} CADIA. Tous droits réservés.
// //                 </div>
// //             </div>
// //         </footer>
// //     );
// // }
// 'use client';
//
// import Link from 'next/link';
//
// export function Footer() {
//     return (
//         <footer className="py-16 bg-[#1c1c1c]">
//             <div className="container">
//                 <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
//                     <div className="md:col-span-1">
//                         <Link href="/" className="text-2xl font-extrabold tracking-wide">
//                             CADIA
//                         </Link>
//                         <p className="mt-4 text-gray-400">
//                             AI-powered CAD design, made simple.
//                         </p>
//                     </div>
//                     <div>
//                         <h4 className="text-lg font-bold mb-4">Produit</h4>
//                         <ul className="space-y-2">
//                             <li>
//                                 <Link href="#features" className="text-gray-400 hover:text-white transition-colors">
//                                     Fonctionnalités
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="#plans" className="text-gray-400 hover:text-white transition-colors">
//                                     Tarifs
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>
//                     <div>
//                         <h4 className="text-lg font-bold mb-4">Entreprise</h4>
//                         <ul className="space-y-2">
//                             <li>
//                                 <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
//                                     À propos
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
//                                     Contact
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>
//                     <div>
//                         <h4 className="text-lg font-bold mb-4">Légal</h4>
//                         <ul className="space-y-2">
//                             <li>
//                                 <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
//                                     Confidentialité
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
//                                     Conditions
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div className="pt-6 border-t border-gray-800 text-center text-gray-500">
//                     <p>&copy; 2025 CADIA. Tous droits réservés.</p>
//                 </div>
//             </div>
//         </footer>
//     );
// }

'use client';

import Link from 'next/link';

import styles from './footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerGrid}>
                    <div className={styles.logoSection}>
                        <Link href="/" className={styles.footerLogo}>
                            CADIA
                        </Link>
                        <p className={styles.logoDescription}>
                            AI-powered CAD design, made simple. Create, edit, and export professional 2D/3D designs with the power of artificial intelligence.
                        </p>
                        <div className={styles.socialIcons}>
                            <a href="https://twitter.com/cadia_ai" className={styles.socialIcon} aria-label="Twitter">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 4.01C21 4.5 20.02 4.69 19 4.82C20.07 4.19 20.85 3.13 21.23 1.88C20.24 2.49 19.15 2.94 18 3.17C17.06 2.1 15.84 1.5 14.5 1.5C11.91 1.5 9.82 3.59 9.82 6.18C9.82 6.63 9.85 7.08 9.9 7.5C6.17 7.28 2.95 5.41 1.17 2.6C0.66 3.45 0.41 4.28 0.41 5.23C0.41 6.94 1.26 8.43 2.5 9.35C1.76 9.35 1.07 9.13 0.43 8.77V8.79C0.43 11.05 2.1 12.95 4.21 13.44C3.7 13.55 3.18 13.68 2.64 13.68C2.24 13.68 1.85 13.58 1.46 13.5C2.25 15.35 4.09 16.68 6.29 16.73C4.55 17.97 2.44 18.74 0.17 18.74C-0.33 18.74 -0.83 18.67 -1.33 18.54C0.9 19.98 3.49 20.75 6.35 20.75C13.71 20.75 17.67 14.75 17.67 9.56C17.67 9.33 17.67 9.1 17.66 8.87C18.64 8.1 19.34 7.34 20 6.35C19.21 6.63 18.5 6.84 17.79 6.94C18.5 6.33 19.13 5.5 19.5 4.5L22 4.01Z"/>
                                </svg>
                            </a>
                            <a href="https://linkedin.com/company/cadia-ai" className={styles.socialIcon} aria-label="LinkedIn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"/>
                                </svg>
                            </a>
                            <a href="https://github.com/cadia-ai" className={styles.socialIcon} aria-label="GitHub">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.49 2 2 6.49 2 12C2 16.82 5.25 20.83 9.6 22.04C10.1 22.12 10.32 21.84 10.32 21.59C10.32 21.36 10.31 20.53 10.31 19.61C7 20.19 6.4 18.16 6.4 18.16C5.93 16.94 5.25 16.55 5.25 16.55C4.33 15.91 5.32 15.91 5.32 15.91C6.35 15.97 6.9 17.04 6.9 17.04C7.8 18.56 9.33 18.19 10.34 17.95C10.43 17.25 10.74 16.79 11.07 16.54C8.54 16.3 5.88 15.47 5.88 11.28C5.88 10.15 6.29 9.25 6.92 8.53C6.82 8.29 6.45 7.26 7.01 5.85C7.01 5.85 7.86 5.6 10.3 7.14C11.17 6.94 12.08 6.84 13 6.84C13.92 6.84 14.83 6.94 15.7 7.14C18.14 5.6 18.99 5.85 18.99 5.85C19.55 7.26 19.17 8.29 19.08 8.53C19.71 9.25 20.12 10.15 20.12 11.28C20.12 15.47 17.46 16.29 14.92 16.54C15.35 16.84 15.73 17.45 15.73 18.37C15.73 19.67 15.72 21.27 15.72 21.59C15.72 21.84 15.93 22.12 16.44 22.04C20.79 20.83 24.04 16.82 24.04 12C24.04 6.49 19.54 2 13.04 2H12Z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className={styles.linksColumn}>
                        <h3>Product</h3>
                        <ul>
                            <li>
                                <Link href="#features">Features</Link>
                            </li>
                            <li>
                                <Link href="#plans">Pricing</Link>
                            </li>
                            <li>
                                <Link href="/api">API</Link>
                            </li>
                            <li>
                                <Link href="/integrations">Integrations</Link>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.linksColumn}>
                        <h3>Company</h3>
                        <ul>
                            <li>
                                <Link href="/about">About Us</Link>
                            </li>
                            <li>
                                <Link href="/careers">Careers</Link>
                            </li>
                            <li>
                                <Link href="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link href="#contact">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.linksColumn}>
                        <h3>Legal</h3>
                        <ul>
                            <li>
                                <Link href="/privacy">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/terms">Terms of Service</Link>
                            </li>
                            <li>
                                <Link href="/security">Security</Link>
                            </li>
                            <li>
                                <Link href="/data">Data Processing</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p className={styles.copyright}>
                        &copy; {new Date().getFullYear()} CADIA. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
//
// 'use client';
//
// import { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { Button } from '@/components/ui/Button';
// import styles from './header.module.css';
//
// export default function Header() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//
//     return (
//         <header className={styles.header}>
//             <div className={styles.headerContainer}>
//                 <Link href="/" className={styles.logoContainer}>
//                     <Image
//                         src="/logo.png"
//                         alt="CADIA Logo"
//                         width={140}
//                         height={40}
//                         priority
//                         className={styles.logo}
//                     />
//                 </Link>
//
//                 {/* Desktop navigation */}
//                 <nav className={styles.nav}>
//                     <Link href="/features" className={styles.navLink}>
//                         Features
//                     </Link>
//                     <Link href="/pricing" className={styles.navLink}>
//                         Pricing
//                     </Link>
//                     <Link href="/blog" className={styles.navLink}>
//                         Blog
//                     </Link>
//                     <Link href="/docs" className={styles.navLink}>
//                         Documentation
//                     </Link>
//                 </nav>
//
//                 {/* Auth buttons */}
//                 <div className={styles.authButtons}>
//                     <Link href="/login" className={styles.loginLink}>
//                         Log in
//                     </Link>
//                     <Button
//                         variant="primary"
//                         size="small"
//                         className={styles.signupButton}
//                     >
//                         Sign up free
//                     </Button>
//                 </div>
//
//                 {/* Mobile menu button */}
//                 <button
//                     className={styles.mobileMenuButton}
//                     onClick={() => setIsMenuOpen(!isMenuOpen)}
//                     aria-label="Toggle menu"
//                 >
//                     <svg
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         {isMenuOpen ? (
//                             <path
//                                 d="M18 6L6 18M6 6L18 18"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                             />
//                         ) : (
//                             <path
//                                 d="M4 6H20M4 12H20M4 18H20"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                             />
//                         )}
//                     </svg>
//                 </button>
//             </div>
//
//             {/* Mobile navigation */}
//             {isMenuOpen && (
//                 <div className={styles.mobileNav}>
//                     <Link href="/features" className={styles.mobileNavLink}>
//                         Features
//                     </Link>
//                     <Link href="/pricing" className={styles.mobileNavLink}>
//                         Pricing
//                     </Link>
//                     <Link href="/blog" className={styles.mobileNavLink}>
//                         Blog
//                     </Link>
//                     <Link href="/docs" className={styles.mobileNavLink}>
//                         Documentation
//                     </Link>
//                     <div className={styles.mobileAuthButtons}>
//                         <Link href="/login" className={styles.mobileLoginLink}>
//                             Log in
//                         </Link>
//                         <Link href="/signup" className={styles.mobileSignupLink}>
//                             Sign up free
//                         </Link>
//                     </div>
//                 </div>
//             )}
//         </header>
//     );
// }
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import styles from './header.module.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <Link href="/" className={styles.logoContainer}>
                    <Image
                        src="/logo.png"
                        alt="CADIA Logo"
                        width={140}
                        height={40}
                        priority
                        className={styles.logo}
                    />
                </Link>

                {/* Desktop navigation */}
                <nav className={styles.nav}>
                    <Link href="/features" className={styles.navLink}>
                        Features
                    </Link>
                    <Link href="/pricing" className={styles.navLink}>
                        Pricing
                    </Link>
                    <Link href="/blog" className={styles.navLink}>
                        Blog
                    </Link>
                    <Link href="/docs" className={styles.navLink}>
                        Documentation
                    </Link>
                </nav>

                {/* Auth buttons */}
                <div className={styles.authButtons}>
                    <Link href="/login" className={styles.loginLink}>
                        Log in
                    </Link>
                    <Link href="/signup">
                        <Button
                            variant="primary"
                            size="small"
                            className={styles.signupButton}
                        >
                            Sign up free
                        </Button>
                    </Link>
                </div>

                {/* Mobile menu button */}
                <button
                    className={styles.mobileMenuButton}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isMenuOpen ? (
                            <path
                                d="M18 6L6 18M6 6L18 18"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        ) : (
                            <path
                                d="M4 6H20M4 12H20M4 18H20"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile navigation */}
            {isMenuOpen && (
                <div className={styles.mobileNav}>
                    <Link href="/features" className={styles.mobileNavLink}>
                        Features
                    </Link>
                    <Link href="/pricing" className={styles.mobileNavLink}>
                        Pricing
                    </Link>
                    <Link href="/blog" className={styles.mobileNavLink}>
                        Blog
                    </Link>
                    <Link href="/docs" className={styles.mobileNavLink}>
                        Documentation
                    </Link>
                    <div className={styles.mobileAuthButtons}>
                        <Link href="/login" className={styles.mobileLoginLink}>
                            Log in
                        </Link>
                        <Link href="/signup" className={styles.mobileSignupLink}>
                            Sign up free
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
// export default function Contact() {
//     return (
//         <section id="contact" className="py-16">
//             <h2 className="text-3xl font-bold mb-4">Contact</h2>
//             <p>Email : contact@cadia.ai</p>
//         </section>
//     );
// }
'use client';

import { Button } from '@/components/ui/Button';
import styles from './contact.module.css';

export default function Contact() {
    return (
        <section id="contact" className={styles.contactSection}>
            <div className={styles.contactContainer}>
                <h2 className={styles.sectionTitle}>Contact</h2>
                <div className={styles.contactGrid}>
                    <div className={styles.contactForm}>
                        <form>
                            <div className={styles.inputGroup}>
                                <label htmlFor="name" className={styles.label}>Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className={styles.input}
                                    placeholder="Your name"
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="email" className={styles.label}>Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className={styles.input}
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="subject" className={styles.label}>Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className={styles.input}
                                    placeholder="What is this about?"
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="message" className={styles.label}>Message</label>
                                <textarea
                                    id="message"
                                    className={styles.textarea}
                                    placeholder="Tell us what you need"
                                    rows={5}
                                ></textarea>
                            </div>
                            <div className={styles.buttonContainer}>
                                <Button>Send Message</Button>
                            </div>
                        </form>
                    </div>

                    <div className={styles.contactInfo}>
                        <h3 className={styles.infoTitle}>Get in Touch</h3>
                        <div className={styles.infoItem}>
                            <div className={styles.infoIcon}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 12C22 10.6868 21.7413 9.38647 21.2388 8.1731C20.7362 6.95996 19.9997 5.85742 19.0711 4.92896C18.1425 4.00024 17.0401 3.26367 15.8268 2.76123C14.6136 2.25854 13.3132 2 12 2C10.6868 2 9.38647 2.25854 8.1731 2.76123C6.95996 3.26367 5.85742 4.00024 4.92896 4.92896C3.26367 6.59424 2 8.95345 2 12C2 18.5 8.01 20 12 20C15.99 20 22 18.5 22 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M16 7H13.5V13H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M10 13C11.1046 13 12 12.1046 12 11C12 9.89543 11.1046 9 10 9C8.89543 9 8 9.89543 8 11C8 12.1046 8.89543 13 10 13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className={styles.infoText}>
                                <strong>Email</strong>
                                contact@cadia.ai
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <div className={styles.infoIcon}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 4H21V20H3V4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M3 4L12 12L21 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className={styles.infoText}>
                                <strong>Support Hours</strong>
                                Monday to Friday, 9am to 6pm CET
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <div className={styles.infoIcon}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 6V12L16 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className={styles.infoText}>
                                <strong>Response Time</strong>
                                We aim to respond to all inquiries within 24 hours.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

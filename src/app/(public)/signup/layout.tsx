// import { AuthProvider } from '@/context/AuthContext';
import './signup.module.css';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {Providers} from "@/app/providers";
import {ThemeProvider} from "next-themes";

// export default function SignupLayout({
//                                        children,
//                                    }: {
//     children: React.ReactNode;
// }) {
//     return (
//         <html lang="en" suppressHydrationWarning>
//         <head />
//         <body>
//         <ThemeProvider  attribute="class"
//                         defaultTheme="system"
//                         enableSystem
//                         disableTransitionOnChange>
//
//             {/*<AuthProvider>*/}
//
//                 {children}
//
//             {/*</AuthProvider>*/}
//         </ThemeProvider>
//         </body>
//         </html>
//     // <html lang="en">
//     //     <body>
//     //     {/*<AuthProvider>*/}
//     //         {children}
//     //     {/*</AuthProvider>*/}
//     //     </body>
//     //     </html>
//     );
// }
export default function SignupLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="signup-container">
            {children}
        </main>
    );
}
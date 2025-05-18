// import { AuthProvider } from '@/context/AuthContext';
import './globals.css';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {Providers} from "@/app/providers";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head />
        <body>
        <Providers>

            {/*<AuthProvider>*/}
            <Header />
                {children}
            <Footer />
            {/*</AuthProvider>*/}
        </Providers>
        </body>
        </html>
    // <html lang="en">
    //     <body>
    //     {/*<AuthProvider>*/}
    //         {children}
    //     {/*</AuthProvider>*/}
    //     </body>
    //     </html>
    );
}
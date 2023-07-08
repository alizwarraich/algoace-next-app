import Header from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./store/provider";
import Hero from "./components/Hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Algoace Next.js App",
    description:
        "Algoace Technical Test: Next.js App for rendering items from an API",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>
                    <Header />
                    <Hero />
                    <main>{children}</main>
                </Providers>
            </body>
        </html>
    );
}

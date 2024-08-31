import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Rainbow Veteriner Kliniği - 7/24 Açık",
    description: "Rainbow Veteriner Kliniği, 7/24 açık, ulaşılabilir, güvenilir ve kaliteli hizmet sunmaktadır. Ulus ve Beşiktaş'ın göbeğinde yer alan kliniğimizde, evcil dostlarınızın sağlığı bizim için önemlidir.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-XE1TL8HD3C"></Script>
            <Script id="google-analytics" strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
    
                    gtag('config', 'G-XE1TL8HD3C');
                    `}
            </Script>
        <body className={`${inter.className} bg-section`}>{children}</body>
        </html>
    );
}

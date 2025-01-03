import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            {/* Page title */}
            <title>arWebService - AI Solution</title>

            {/* Custom metadata */}
            <meta
                name="description"
                content="A web services page specializing in AI solutions."
            />
            <meta
                name="keywords"
                content="AI solutions, web services, web development"
            />
            <meta name="author" content="arWebService" />

            {/* Open Graph (Social media sharing) */}
            <meta property="og:title" content="arWebService - AI Solution" />
            <meta
                property="og:description"
                content="A web services page specializing in AI solutions."
            />
            <meta property="og:url" content="https://arwebservice.com" />
            <meta property="og:image" content="https://arwebservice.com/favicon.ico" />

            {/* Domain verification */}
            <meta
                name="facebook-domain-verification"
                content="f458f1qsw2830dqytsflvpzfi68xm9"
            />

            {/* Responsive */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}

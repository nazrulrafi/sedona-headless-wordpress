import "./globals.css";
import Script from "next/script";
import Header from "@/components/common/Header";

import Footer from "@/components/common/Footer";

export const metadata = {
    title: "Sedona | Architecture HTML Template",
    description: "Architecture Portfolio built with Next.js",
};
async function getSiteMeta() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/wp/v2/site-meta-info`, {
            cache: 'no-store', // optional, prevents caching during dev
        });
        const siteMeta = await res.json();
        return siteMeta;
    } catch (error) {
        console.error(error);
        return null;
    }
}
export default async function RootLayout({ children }) {
    const siteMeta = await getSiteMeta() || {};
    return (
        <html lang="en">
        <head>
            {/* Google Fonts */}
            <link
                href="https://fonts.googleapis.com/css?family=Barlow:400,600%7COpen+Sans:400,400i,700&display=swap"
                rel="stylesheet"
            />


            {/* CSS from public/assets */}
            <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
            <link rel="stylesheet" href="/assets/css/font-icons.css" />
            <link rel="stylesheet" href="/assets/revolution/css/settings.css" />
            <link rel="stylesheet" href="/assets/css/style.css" />

            {/* Favicons */}
            <link rel="shortcut icon" href="/assets/img/favicon.ico" />
            <link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png" />
            <link
                rel="apple-touch-icon"
                sizes="72x72"
                href="/assets/img/apple-touch-icon-72x72.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="114x114"
                href="/assets/img/apple-touch-icon-114x114.png"
            />
        </head>

        <body>
        {/* Preloader */}


        {/* Main wrapper */}
        <main className="main-wrapper">
            <Header headerMeta={siteMeta}/>
            <div className="content-wrapper content-wrapper--boxed oh">
                <div className="rev-offset"></div>
                {children}
                <Footer footerMeta={siteMeta}/>
            </div>

            <div id="back-to-top">
                <a href="#top"><i className="ui-arrow-up"></i></a>
            </div>
        </main>

        {/* JS Scripts from public/assets */}
        <Script src="/assets/js/jquery.min.js" strategy="beforeInteractive"/>
        <Script src="/assets/js/bootstrap.min.js" strategy="beforeInteractive"/>
        <Script src="/assets/js/plugins.js" strategy="afterInteractive"/>
        <Script
            src="/assets/revolution/js/jquery.themepunch.tools.min.js"
            strategy="afterInteractive"
        />
        <Script
            src="/assets/revolution/js/jquery.themepunch.revolution.min.js"
            strategy="afterInteractive"
        />
        <Script src="/assets/js/rev-slider.js" strategy="afterInteractive"/>
        <Script src="/assets/js/scripts.js" strategy="afterInteractive"/>

        {/* Rev Slider Extensions */}
        <Script
            src="/assets/revolution/js/extensions/revolution.extension.video.min.js"
            strategy="afterInteractive"
        />
        <Script
            src="/assets/revolution/js/extensions/revolution.extension.carousel.min.js"
            strategy="afterInteractive"
        />
        <Script
            src="/assets/revolution/js/extensions/revolution.extension.slideanims.min.js"
            strategy="afterInteractive"
        />
        <Script
            src="/assets/revolution/js/extensions/revolution.extension.actions.min.js"
            strategy="afterInteractive"
        />
        <Script
            src="/assets/revolution/js/extensions/revolution.extension.layeranimation.min.js"
            strategy="afterInteractive"
        />
        <Script
            src="/assets/revolution/js/extensions/revolution.extension.kenburn.min.js"
            strategy="afterInteractive"
        />
        <Script
            src="/assets/revolution/js/extensions/revolution.extension.navigation.min.js"
            strategy="afterInteractive"
        />
        <Script
            src="/assets/revolution/js/extensions/revolution.extension.migration.min.js"
            strategy="afterInteractive"
        />
        <Script
            src="/assets/revolution/js/extensions/revolution.extension.parallax.min.js"
            strategy="afterInteractive"
        />
        </body>
        </html>
    );
}

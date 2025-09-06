(function() {
    const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
        "@type": "WebSite",
        "url": "https://wedevolv.com/",
        "name": "Wedevolv",
        "description": "Wedevolv provides free tools for web developers: ready-to-use source code, SVG icons, and JavaScript functions to make web development easier.",
        "publisher": {
            "@type": "Organization",
            "name": "Wedevolv",
            "logo": {
            "@type": "ImageObject",
            "url": "https://wedevolv.com/logo.png"
            }
        }
        },
        {
        "@type": "CollectionPage",
        "name": "Wedevolv Source",
        "url": "https://wedevolv.com/source.html",
        "description": "Free source code collection: portfolio templates, landing pages, blogs, and UI components. Easy to download and ready to use for learning or projects."
        },
        {
        "@type": "SoftwareSourceCode",
        "name": "Wedevolv Icon Library",
        "url": "https://wedevolv.com/icon.html",
        "codeRepository": "https://github.com/wedevolv/wd-icons",
        "programmingLanguage": "JavaScript",
        "description": "A collection of free SVG icons and lightweight illustrations for websites, apps, and UI projects. Easy to download, scalable, and customizable."
        },
        {
        "@type": "Product",
        "name": "Wedevolv Shop",
        "image": "https://wedevolv.com/shop-preview.png",
        "description": "Rekomendasi produk terbaik untuk developer & desainer: hosting, domain, tema, alat desain — link affiliate terpercaya untuk membantu kamu memilih.",
        "brand": {
            "@type": "Brand",
            "name": "Wedevolv"
        },
        "offers": {
            "@type": "Offer",
            "url": "https://wedevolv.com/shop.html",
            "priceCurrency": "IDR",
            "price": "0.00",
            "availability": "https://schema.org/InStock"
        },
        "inLanguage": "id"
        },
        {
        "@type": "AboutPage",
        "url": "https://wedevolv.com/about.html",
        "name": "About Wedevolv",
        "description": "Learn more about Wedevolv and how to contact us. Free tools, source code, and SVG icons for web developers.",
        "mainEntity": {
            "@type": "Organization",
            "name": "Wedevolv",
            "url": "https://wedevolv.com"
        }
        },
        {
        "@type": "WebPage",
        "url": "https://wedevolv.com/privacy.html",
        "name": "Privacy Policy",
        "description": "Read the Privacy Policy of Wedevolv. Learn how we collect, use, and protect your information."
        },
        {
        "@type": "WebPage",
        "url": "https://wedevolv.com/disclaimer.html",
        "name": "Disclaimer",
        "description": "Read the Disclaimer of Wedevolv. Limitations of liability and external links for our website."
        },
        {
        "@type": "WebPage",
        "url": "https://wedevolv.com/terms.html",
        "name": "Terms & Conditions",
        "description": "Read the Terms of Service of Wedevolv. Rules and guidelines for using our website and resources."
        }
    ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
})();
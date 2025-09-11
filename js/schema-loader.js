(function() {
  const pathname = window.location.pathname;

  let schema = {};

  // Homepage
  if (pathname === "/" || pathname === "/index.html") {
    schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "url": "https://wedevolv.com/",
          "name": "Wedevolv",
          "description": "Wedevolv provides free tools for developers and designers: SVG icons, source code, and affiliate product recommendations.",
          "publisher": {
            "@type": "Organization",
            "name": "Wedevolv",
            "logo": {
              "@type": "ImageObject",
              "url": "https://wedevolv.com/assets/img/logo/preview.png"
            }
          }
        },
        {
          "@type": "Organization",
          "name": "Wedevolv",
          "url": "https://wedevolv.com",
          "logo": "https://wedevolv.com/assets/img/logo/preview.png"
        }
      ]
    };
  }

  // Icon Library
  else if (pathname.includes("icon.html")) {
    schema = {
      "@context": "https://schema.org",
      "@type": "SoftwareSourceCode",
      "name": "Wedevolv Icon Library",
      "url": "https://wedevolv.com/icon.html",
      "programmingLanguage": "SVG",
      "description": "A collection of free SVG icons for websites, apps, and UI projects. Scalable, customizable, and lightweight."
    };
  }

  // Source Code
  else if (pathname.includes("source.html")) {
    schema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Wedevolv Source",
      "url": "https://wedevolv.com/source.html",
      "description": "Free source code collection: portfolio templates, landing pages, blogs, and UI components. Ready to download and customize."
    };
  }

  // Shop
  else if (pathname.includes("shop.html")) {
    schema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Wedevolv Shop",
        "url": "https://wedevolv.com/shop.html",
        "description": "Belanja produk terbaik lewat link affiliate terpercaya. Dapatkan rekomendasi barang pilihan dari berbagai kategori."
    };
  }

  // About
  else if (pathname.includes("about.html")) {
    schema = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "url": "https://wedevolv.com/about.html",
      "name": "About Wedevolv",
      "description": "Learn more about Wedevolv and how to contact us. Free tools, source code, and SVG icons for web developers.",
      "mainEntity": {
        "@type": "Organization",
        "name": "Wedevolv",
        "url": "https://wedevolv.com"
      }
    };
  }

  // Privacy
  else if (pathname.includes("privacy.html")) {
    schema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": "https://wedevolv.com/privacy.html",
      "name": "Privacy Policy",
      "description": "Read the Privacy Policy of Wedevolv. Learn how we collect, use, and protect your information."
    };
  }

  // Disclaimer
  else if (pathname.includes("disclaimer.html")) {
    schema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": "https://wedevolv.com/disclaimer.html",
      "name": "Disclaimer",
      "description": "Read the Disclaimer of Wedevolv. Limitations of liability and external links for our website."
    };
  }

  // Terms
  else if (pathname.includes("terms.html")) {
    schema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": "https://wedevolv.com/terms.html",
      "name": "Terms & Conditions",
      "description": "Read the Terms of Service of Wedevolv. Rules and guidelines for using our website and resources."
    };
  }

  // Inject schema if defined
  if (Object.keys(schema).length > 0) {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }
})();
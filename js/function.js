function highlightCode(code) {
    return code
        // string
        .replace(/("[^"]*"|'[^']*')/g,
        '<span style="color:#ffae00;">$1</span>')

        // sama dengan
        .replace(/=(?!(?:[^<]*?>))/g,
        '<span style="color:gray;">=</span>')

        // nama tag (contoh: svg, path, div, g, span, dsb.)
        .replace(/(&lt;\/?)([a-zA-Z0-9\-]+)(?=[\s&>])/g,
        '$1<span style="color:#00eeff;">$2</span>')

        // keyword JS
        .replace(/\b(const|let|var|function|return|if|else|for|while|class|src|new|try|catch|throw)\b/g,
        '<span style="color:#569CD6;">$1</span>')

        // kurung siku <
        .replace(/&lt;/g, '<span style="color:gray;">&lt;</span>')
        // kurung siku >
        .replace(/&gt;/g, '<span style="color:gray;">&gt;</span>');
}
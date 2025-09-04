let iconsData = [];

fetch("https://wedevolv.com/json/icons.json").then(res => res.json())
.then(data => {
    iconsData = data;
    renderIcons(document.querySelectorAll("[class^='wd-']"));
    observeIcons();
});

function renderIcons(elements) {
    elements.forEach(el => {
        let text = el.textContent;
        el.style.fontStyle = "normal";
        el.style.display = "inline-flex";
        el.style.alignItems = "center";
        el.style.gap = "4px";

        const className = Array.from(el.classList).find(c => c.startsWith("wd-"));
        const iconData = iconsData.find(i => i.id === className);

        if (iconData) {
            el.innerHTML = iconData.svg + " " + text;
            let svg = el.querySelector("svg");

            svg.setAttribute("fill", "currentColor");
            svg.removeAttribute("width");
            svg.removeAttribute("height");
            svg.style.width = "1em";
            svg.style.height = "1em";
        } else {
            el.innerHTML = `<small style="color:red">[Icon not found]</small>`;
        }
    });
}

function observeIcons() {
    const observer = new MutationObserver(mutations => {
        mutations.forEach(m => {
            if (m.type === "attributes" && m.attributeName === "class") {
                renderIcons([m.target]);
            }
        });
    });
    document.querySelectorAll("[class]").forEach(el => {
        observer.observe(el, { attributes: true });
    });
}

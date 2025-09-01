const svgElements = document.querySelectorAll("[class^='wd-']");
        
fetch("https://wedevolv.com/json/icons.json").then(res => res.json())
.then(data => {
    svgElements.forEach(el => {
        let text = el.innerHTML;
        let styleElement = getComputedStyle(el);
        el.style.display = "inline-flex"
        el.style.alignItems = "center";
        el.style.gap = "4px";

        const className = el.classList[0];
        const iconData = data.find(i => i.id === className);

        if (iconData) {
            el.innerHTML = iconData.svg + " " + text;
        } else {
            el.innerHTML = `<small style="color:red">[Icon not found]</small>`;
        }
        let svg = el.getElementsByTagName("svg")[0];
        svg.style.width = styleElement.fontSize;
        svg.style.fill = styleElement.fill;
        svg.style.filter = `drop-shadow(${styleElement.textShadow})`;
    });
});
async function getDataSourceCode(fileJson, boxElement){
    try {
        const response = await fetch(`../json/${fileJson}.json`);
        const data = await response.json();
        data.source.sort((a, b) => b.id - a.id);
        data.source.forEach(e => {
            boxElement.innerHTML += `
            <article>
                <div class="pict">
                    <div class="landscape">
                        <img src="assets/img/sc/sc${e.id}.png" alt="${e.title}.Image">
                    </div>
                </div>
                <div class="information">
                    <h2><i class="fa fa-code"></i> ${e.title}</h2>
                    <div class="description">${e.description}</div>
                    <ul>
                        <li><a href="${e.link}" target="_blank">Lihat</a></li>
                        <li><a href="">Download</a></li>
                        <li><button onclick="donate();">Donate</button></li>
                    </ul>
                </div>
            </article>
            `;
        })
        console.log("hay santi");
    } catch {
        console.error("Error", error);
    }
}
async function getDataProduct(fileJson, boxElement){
    try {
        const response = await fetch(`../json/${fileJson}.json`);
        const data = await response.json();
        data.product.sort((a, b) => b.id - a.id);
        data.product.forEach(e => {
            boxElement.innerHTML += `
            <article class="product" data-category="${e.category}">
                <div class="top">
                    <img src="assets/img/product/product${e.id}.jpg" alt="${e.category}">
                </div>
                <div class="bottom">
                    <div class="title" style="color: black;">${e.title}</div>
                    <div class="price">
                        <b>${e.price}</b>
                        <small>${e.selling} terjual online</small>
                    </div>
                    <div class="rating">
                        <i class="fa fa-star"> 4.8</i> <a href="${e.link}" target="_blank"> Beli Sekarang Juga</a>
                    </div>
                    <b style="font-size: 10px;">${e.brand}</b>
                </div>
            </article>
            `;
        })
    } catch {
        console.error("Error", error);
    }
}
async function getDataPackage(boxElement){
    const whatsApp = 6283848006479;
    try {
        const response = await fetch(`../json/packages.json`);
        const data = await response.json();
        // data.packages.sort((a, b) => b.id - a.id);
        data.packages.forEach(e => {
            var fiturList = "";
            const list = e.fitur.forEach(l =>{
                fiturList += `<li><i class="fa fa-check-circle-o"></i> ${l}</li>`;
                return fiturList;
            })
            const pesan = `Halo, Saya ingin memesan ${e.type}-Website.`;
            boxElement.innerHTML += `
            <div class="package">
                <div class="type"><h3>${e.type}</h3></div>
                <div class="pricing">Mulai Dari <b>${e.pricing}</b></div>
                <div class="description">${e.description}</div>
                <ul class="fitur">${fiturList}</ul>
                <div class="cta">
                    <b>${e.cta}</b>
                    <a href="https://wa.me/${whatsApp}?text=${encodeURIComponent(pesan)}" target="_blank"><i class="fa fa-shopping-cart"></i>Pesan Sekarang</a>
                </div>
            </div>
            `;
            console.log(fiturList);
        })
    } catch {
        console.error("Error", error);
    }
}
const openNavigation = document.getElementById("open-navigation");
window.onresize = function(){
    openNavigation.checked = false;
}
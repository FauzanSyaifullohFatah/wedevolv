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
                        <li><a href="${e.download}">Download</a></li>
                        <li><button onclick="donate();">Donate</button></li>
                    </ul>
                </div>
            </article>
            `;
        })
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
                        <b>Rp${e.price}</b>
                        <small>${e.selling} terjual online</small>
                    </div>
                    <div class="rating">
                        <i class="wd-star"> 4.8</i> <a href="${e.link}" target="_blank"> Beli Sekarang Juga</a>
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
const openNavigation = document.getElementById("open-navigation");
window.onresize = function(){
    openNavigation.checked = false;
}

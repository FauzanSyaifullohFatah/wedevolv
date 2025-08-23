const myText = ["WEDEVOLV.COM"];
const dplText = document.getElementById("text");
let textIndex = 0;
let charIndex = 0;
let deleting = false;
function typeEffect() {
    let currentText = myText[textIndex];
    if (!deleting) {
        dplText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentText.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        dplText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            deleting = false;
            textIndex = (textIndex + 1) % myText.length;
        }
    }
    setTimeout(typeEffect, deleting ? 50 : 100);
}
typeEffect();
// NAVBAR
const nav = document.querySelectorAll(".nav");
const menu = document.querySelectorAll(".menu");
nav.forEach((el, i) => {
    el.onclick = function(event){
        event.preventDefault();
        nav.forEach(n => n.classList.remove("active"));
        menu.forEach(m => (m.classList.remove("actSection")));
        el.classList.add("active");
        menu[i].classList.add("actSection");
    }
});
// FILTER
const product = document.getElementsByClassName("product")[0];
const filterProduct = document.querySelectorAll(".filter");
filterProduct.forEach((el) => {
    el.onclick = function(event){
        event.preventDefault();
        const itemsProduct = document.querySelectorAll(".items");
        filterProduct.forEach(f => f.classList.remove("active"));
        el.classList.add("active");
        var filter = el.getAttribute("data-filter");
        if (filter !== "all"){
            itemsProduct.forEach((i) => {
                var category = i.getAttribute("data-category");
                if (category === filter){
                    i.style.display = "block";
                } else {
                    i.style.display = "none";
                }
            });
        } else {
            itemsProduct.forEach(i => (i.style.display = "block"));
        }
        itemsProduct.forEach((e) => {
            e.onclick = function(){
                var linkProduct = e.getElementsByTagName("a")[0];
                linkProduct.click();
            }
        })
    }
})
const boxDonation = document.getElementsByClassName("donation")[0];
function donation(){
    boxDonation.classList.add("openDonate");
    var back = document.getElementById("closeDonate");
    back.onclick = function(){
        boxDonation.classList.remove("openDonate");
    }
}
const mySourceCode = document.getElementsByClassName("mySourceCode")[0];
async function getData(){
    try {
        const response = await fetch("data.json");
        const data = await response.json();
        data.source.sort((a, b) => b.id - a.id);
        data.source.forEach(e => {
            mySourceCode.innerHTML += `
            <article class="source-code">
                <div class="preview">
                    <img src="assets/img/sc/sc${e.id}.png" alt="Preview" loading="lazy">
                </div>
                <div class="information">
                    <h3>${e.title}</h3>
                    <div class="text">${e.description}</div>
                    <div class="btn">
                        <a href="${e.link}" target="_blank">
                            <i class="fa fa-external-link"> Lihat</i>
                        </a>
                        <button><i class="fa fa-clone"></i> Copy Source Code</button>
                        <button onclick="donation();"><i class="fa fa-usd"></i> Donate</button>
                    </div>
                </div>
            </article>
            `;
        })
        data.product.sort((a, b) => b.id - a.id);
        data.product.forEach(e => {
            product.innerHTML += `
            <article class="items" data-category="${e.category}">
                <div class="top">
                    <img src="assets/img/product/product${e.id}.jpg" alt="${e.category}">
                </div>
                <div class="bottom">
                    <div class="title">${e.title}</div>
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
        document.querySelectorAll(".items").forEach((e) => {
            e.onclick = function(){
                var linkProduct = e.getElementsByTagName("a")[0];
                linkProduct.click();
            }
        })
    } catch {
        console.error("Error", error);
    }
}
getData();

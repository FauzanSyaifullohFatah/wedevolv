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
const filterProduct = document.querySelectorAll(".filter");
const itemsProduct = document.querySelectorAll(".items");
filterProduct.forEach((el) => {
    el.onclick = function(event){
        event.preventDefault();
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
    }
})

const boxDonation = document.getElementsByClassName("donation")[0];
const donate = document.querySelectorAll(".donate");
donate.forEach((el) => {
    el.onclick = function(){
        boxDonation.classList.add("openDonate");
        var back = document.getElementById("closeDonate");
        back.onclick = function(){
            boxDonation.classList.remove("openDonate");
        }
    }
})
const productItems = document.querySelectorAll(".items");
productItems.forEach((e) => {
    e.onclick = function(){
        var linkProduct = e.getElementsByTagName("a")[0];
        linkProduct.click();
    }
})
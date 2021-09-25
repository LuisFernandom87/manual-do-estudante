const btnMobile = document.querySelector("#btn-mobile");


function toggleMenu(event) {
    if(event.type === "toutchstat") event.preventDefault();
    const nav = document.querySelector("#nav");
    nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("toutchstart", toggleMenu);
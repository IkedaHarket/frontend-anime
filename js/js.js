

addEventListener("scroll", (e) =>{
    let header = document.querySelector(".header__header");
        header.classList.toggle("header__fixed",scrollY>0)  
});
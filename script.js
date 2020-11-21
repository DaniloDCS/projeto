var divIntroducao = document.getElementById("introducao");
var divHomepage = document.getElementById("homepage");
divHomepage.style.display = "none";

setTimeout(() => {
    divIntroducao.style.display = "none";
    divHomepage.style.display = "block";
}, 5000);
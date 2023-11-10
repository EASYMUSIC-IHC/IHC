const ritmo = document.querySelector("#ritmo");
const tema = document.querySelector("#tema");

/*Menu Ritmo */
ritmo.addEventListener("click", (s) =>{
    s.preventDefault();
    const sectionS = document.querySelector(".ritmo");
    sectionS.scrollIntoView({behavior:"smooth"});
})

/*Menu Tema */
tema.addEventListener("click", (p) =>{
    p.preventDefault();
    const sectionP = document.querySelector(".tema");
    sectionP.scrollIntoView({behavior:"smooth"});
})
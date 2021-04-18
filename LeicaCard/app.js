//mouvement animation pour la carte
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//mouvement animation pour les items
const title = document.querySelector(".title");
const camera = document.querySelector(".camera img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const lentilles = document.querySelector(".lentilles");

//donner la rotation a la carte
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20; //le dernier chiffre  (20) vient bloquer la rotation 
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });
//Animation a l'entree  
container.addEventListener("mouseenter", (e) => { // une transition dans le CSS s'appliquerait a tout, je veux uniquement sur la sortie et l'entree
    card.style.transition = "none";
    //popout
    title.style.transform = "translateZ(75px)"
    camera.style.transform = "translateZ(150px)"
    purchase.style.transform = "translateZ(75px)"
});
//Animation a la sortie
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease"; // transition sortie
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //popback
    title.style.transform = "translateZ(0px)"
    camera.style.transform = "translateZ(0px)"
    purchase.style.transform = "translateZ(0px)"
});


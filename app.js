// Animation sur l'image
const card = document.querySelector(".card");
const imageZoom = document.querySelector('.image-zoom')
const blocFocusTop = document.querySelector(".bloc-focus-top");
const blocFocusBottom = document.querySelector(".bloc-focus-bottom");
const blocContent = document.querySelector(".bloc-content-show");
const title = document.querySelector(".bloc-content-show h2");
const separation = document.querySelector("hr");
const allTxt = document.querySelectorAll(".bloc-content-show p");

const TLANIM = gsap.timeline({ paused: true });

// On part d'un état 1 (scale 1) pour arrivé à l'état 2 (scale :2) qui va zoomer l'image +100 sur Y et -200 sur X, l'animation va duré 0.4 sec et sera déclencher par l'entrée ou le retrait de la souris sur l'image.
TLANIM
     //ExpoScaleEase permet que l'image ne soit pas pixelisé avec l'animation
  .fromTo(imageZoom, {scale: 1}, {scale: 2, y: +50, x:-200, duration: 0.4,  ease:ExpoScaleEase.config(1, 2,"power2.inOut")})
  .to(blocFocusTop, {top: -50, left: -50, duration: 0.1}, 0.5)
  .to(blocFocusBottom, {bottom: -50, right: -50, duration: 0.1}, '-=0.1')
  .to(blocContent, {bottom: 200, duration:0.2}, '-=0.1')
  .from(title, {opacity: 0, duration: 0.2}, '-=0.1')
  .from(separation, { width: 0, duration:0.3}, '-=0.2')
  .from(allTxt, {opacity: 0, duration: 0.3, stagger: 0.2})
  // Stagger est applicable sur les query selector all (qui crée un tableau d'élément), ce qui permet une attente d'apparition des éléments p

  card.addEventListener("mouseenter", () => {
    TLANIM.play();
  });
  
  card.addEventListener("mouseleave", () => {
       TLANIM.reverse();
  });
  
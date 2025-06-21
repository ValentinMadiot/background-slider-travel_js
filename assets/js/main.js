/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu Show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu Hide */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SWIPER JS ====================*/
let galleryThumbs = new Swiper(".gallery-thumbs", {
  spaceBetween: 0,
  slidesPerView: 0,
});

let galleryTop = new Swiper(".gallery-top", {
  effect: "fade",
  loop: true,

  thumbs: {
    swiper: galleryThumbs,
  },
});

/*==================== POPUP ====================*/
const btnOpenVideo = document.querySelectorAll(".islands__video-content");
const islandsPopup = document.getElementById("popup");

function poPup() {
  islandsPopup.classList.add("show-popup");
}
btnOpenVideo.forEach((b) => b.addEventListener("click", poPup));

const btnCloseVideo = document.getElementById("popup-close");

btnCloseVideo.addEventListener("click", () => {
  islandsPopup.classList.remove("show-popup");
});

/*==================== GSAP ANIMATION ====================*/
const controlImg = document.querySelectorAll(".controls__img");

function scrollAnimation() {
  gsap.from(".islands__subtitle", {
    opacity: 0,
    duration: 0.2,
    delay: 0.2,
    y: -20,
  });
  gsap.from(".islands__title", {
    opacity: 0,
    duration: 0.3,
    delay: 0.3,
    y: -20,
  });
  gsap.from(".islands__description", {
    opacity: 0,
    duration: 0.4,
    delay: 0.4,
    y: -20,
  });
  gsap.from(".islands__button", {
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    y: -20,
  });
  gsap.from(".islands__video-content", {
    opacity: 0,
    duration: 0.6,
    delay: 0.6,
    y: -20,
  });

  islandsPopup.classList.remove("show-popup");
}

controlImg.forEach((c) => c.addEventListener("click", scrollAnimation));

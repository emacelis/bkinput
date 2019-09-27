const encabezado = document.querySelector(".encabezado");
const parrafo = document.querySelector(".parrafo");
const ring3 = document.querySelector(".ring3");
const display = document.querySelector(".display-4 ");
const parrafo1 = document.querySelector(".parrafo1");
const buttos = document.querySelector(".buttos");
const imagen2 = document.querySelector(".imagen2");

const tl = new TimelineMax();
tl.fromTo(ring3, 1.5, {
    opacity: 0,
}, {
    opacity: 1,
    ease: Power2.easeInOut
},"=.1")
.fromTo(display, 2, {
    opacity: 0,
}, {
    opacity: 1,
    ease: Power2.easeInOut
},"=.1")
.fromTo(parrafo, 1, {
    opacity: 0,
}, {
    opacity: 1,
    ease: Power2.easeInOut
})
.fromTo(parrafo1, 1, {
    opacity: 0,
}, {
    opacity: 1,
    ease: Power2.easeInOut
})
.fromTo(buttos, 1, {
    opacity: 0,
}, {
    opacity: 1,
    ease: Power2.easeInOut
})
.fromTo(encabezado, 1, {
    x: "-100%",
    opacity: 0,
}, {
    x: "0%",
    opacity: 1,
    ease: Power2.easeInOut
})
.fromTo(imagen2, 1.5, {
    opacity: 0,
}, {
    opacity: 1,
    ease: Power2.easeInOut
},"=-2");

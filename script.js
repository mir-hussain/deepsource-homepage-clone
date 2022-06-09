gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.from(".main-body", {
  opacity: 0,
  duration: 1.5,
}).from(".new-feature", {
  opacity: 0,
  y: -50,
  duration: 1,
  ease: "bounce",
});

gsap.from(".navbar-background", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".navbar-background",
    start: "top top",
    toggleActions: "restart pause reverse pause",
    scrub: 1.5,
  },
});

gsap.to(".hero-text", {
  opacity: 0,
  y: -50,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".hero-text",
    start: "bottom 20%",
    end: "top top",
    toggleActions: "restart pause reverse pause",
    scrub: 1.5,
  },
});

gsap.to(".hero-image", {
  transform: "perspective(800px) rotateX(0deg)",
  scrollTrigger: {
    trigger: ".hero-image",
    start: "top bottom",
    end: "bottom bottom",
    toggleActions: "restart pause reverse pause",
    scrub: 1,
  },
});

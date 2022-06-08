gsap.registerPlugin(ScrollTrigger);

gsap.to(".hero-text", {
  opacity: 0,
  y: -50,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".hero-text",
    markers: true,
    start: "bottom 20%",
    end: "top top",
    toggleActions: "restart pause reverse pause",
    scrub: 1.5,
  },
});

gsap.from(".hero-image", {
  transform: "perspective(800px) rotateX(20deg)",
});

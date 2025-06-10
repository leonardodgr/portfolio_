
gsap.registerPlugin(ScrollTrigger);

gsap.from(".a1-logo", {
  x: -100,
  scale: 0.5,
  opacity: 0,
  duration: 1.5,
  ease: "back.out(1.7)",
});

gsap.fromTo(
  ".box-2",
  { x: 600 },
  { duration: 1.9, x: 0, ease: "elastic.out(1.3, 0.8)" }
);

gsap.from("#footer", {
  scrollTrigger: {
    trigger: "#footer",
    start: "top 90%",
    toggleActions: "play none none none",
    onEnter: () => console.log("Footer entrou na tela"),
  },
  x: -500,
  opacity: 0,
  duration: 1.9,
  ease: "elastic.out(1, 1)",
});

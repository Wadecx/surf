gsap.registerPlugin(ScrollTrigger);

gsap.from(".main_content", {
  scrollTrigger: {
    trigger: ".main_content",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});

gsap.from(".products", {
  scrollTrigger: {
    trigger: ".main_content",
    start: "top 10%",
    toggleActions: "play none none none",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});

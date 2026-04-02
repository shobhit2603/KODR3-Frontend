gsap.from(".nav", {
  opacity: 0,
  y: -100,
  duration: 0.8,
  ease: "power3.out",
});

gsap.from(".hero h1", {
  delay: 0.5,
  y: 500,
  duration: 1,
  ease: "power3.out",
  stagger: 0.3,
});

gsap.from(".about p", {
  delay: 1,
  y: 500,
  duration: 0.7,
  ease: "power3.out",
  stagger: 1,
});

gsap.from(".about span", {
  opacity: 0,
  delay: 1.3,
  y: 100,
  duration: 0.7,
  ease: "power3.out",
});

gsap.from(".divider", {
  scaleX: 0,
  transformOrigin: "left",
  duration: 1.7,
  delay: 1.5,
  ease: "power3.out",
});
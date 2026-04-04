gsap.registerPlugin(ScrollTrigger);

const locomotive = new LocomotiveScroll();

// Navbar Animation
gsap.from(".nav", {
  opacity: 0,
  y: -100,
  duration: 0.8,
  ease: "power3.out",
});

// Hero Section Animation
gsap.from(".hero h1", {
  delay: 0.5,
  y: 500,
  duration: 1,
  ease: "power3.out",
  stagger: 0.3,
});

// About Section Text Animation
gsap.from(".about p", {
  delay: 1,
  y: 500,
  duration: 0.7,
  ease: "power3.out",
  stagger: 1,
});

// About Section Text Animation
gsap.from(".about span", {
  opacity: 0,
  delay: 1.3,
  y: 100,
  duration: 0.7,
  ease: "power3.out",
});

// Dash Expand Animation
gsap.to(".dash", {
  width: "150vw",
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top 10%",
    end: "bottom top",
    scrub: 1,
  },
});

// Continuous Down Arrow Animation
let arrowTl = gsap.timeline({ repeat: -1 });

arrowTl
  .fromTo(
    ".down-arrow",
    { y: "-100%" },
    { y: "0%", duration: 0.6, ease: "power3.out" },
  )

  .to(".down-arrow", { y: "100%", duration: 0.3, ease: "power3.in" }, "+=0.8");

// Divider Animation
gsap.utils.toArray(".divider-l").forEach((divider) => {
  gsap.from(divider, {
    scaleX: 0,
    transformOrigin: "left",
    duration: 1.7,
    ease: "power3.out",
    scrollTrigger: {
      trigger: divider,
      start: "top 85%",
    },
  });
});

// Divider Animation
gsap.utils.toArray(".divider-r").forEach((divider) => {
  gsap.from(divider, {
    scaleX: 0,
    transformOrigin: "right",
    duration: 1.7,
    ease: "power3.out",
    scrollTrigger: {
      trigger: divider, 
      start: "top 85%",
    },
  });
});

// Animate text moving to the left (Right-aligned text)
gsap.utils.toArray(".project-text-r").forEach((text) => {
  gsap.to(text, {
    x: "-30%", // Adjusted slightly so you don't run out of text too fast
    ease: "none",
    scrollTrigger: {
      trigger: text.parentElement, // Ties the animation to its specific container
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });
});

// Animate text moving to the right (Left-aligned text)
gsap.utils.toArray(".project-text-l").forEach((text) => {
  gsap.to(text, {
    x: "30%", 
    ease: "none",
    scrollTrigger: {
      trigger: text.parentElement, 
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });
});
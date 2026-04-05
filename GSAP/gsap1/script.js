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
    duration: 2,
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
    duration: 2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: divider,
      start: "top 85%",
    },
  });
});

// Animate text moving to the left
gsap.utils.toArray(".project-text-r").forEach((text) => {
  gsap.to(text, {
    x: "-30%",
    ease: "none",
    scrollTrigger: {
      trigger: text.parentElement,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });
});

// Animate text moving to the right
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

// Third Section Line-by-Line Reveal Animation
const thirdSectionTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".third-section",
    start: "top 60%",
  },
});

thirdSectionTl
  .from(".section-label", {
    y: "100%",
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  })

  .from(
    ".line-anim",
    {
      y: "150%",
      duration: 1.2,
      stagger: 0.15,
      ease: "power4.out",
    },
    "-=0.4",
  );

// Final Section Animation
const finalSectionTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".final-section",
    start: "top 75%",
  },
});

finalSectionTl
  // Animate the awards list items
  .from(".award-item", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power3.out",
  })

  .from(
    ".info-block",
    {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    },
    "-=0.6",
  );

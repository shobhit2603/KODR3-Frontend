gsap.registerPlugin(ScrollTrigger);

const locomotive = new LocomotiveScroll();

const counter = document.querySelector(".counter");

let count = 0;

const master = gsap.timeline({ paused: true });

const interval = setInterval(() => {
  count++;
  counter.textContent = count;
  if (count === 100) {
    clearInterval(interval);
    master.play();
  }
}, 15);

function loaderAnimation() {
  const tl = gsap.timeline();
  tl.to(counter, {
    opacity: 0,
    duration: 0.3,
    ease: "power2.out",
  }).to(".loader", {
    y: "-100%",
    duration: 0.8,
    ease: "power3.inOut",
  });
  return tl;
}

function imageAnimation() {
  return gsap.from(".image-container", {
    scale: 1.2,
    duration: 1.2,
    ease: "power3.inOut",
  });
}

function navAnimation() {
  const tl = gsap.timeline();
  tl.from(".logo, .links a, .btn", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "power3.out",
  });
  return tl;
}

function titleAnimation() {
  const tl = gsap.timeline();
  tl.from(".title", {
    y: 150,
    duration: 0.8,
    ease: "power3.out",
  }).from(
    ".subtitle",
    {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.6",
  );
  return tl;
}

master
  .add(loaderAnimation())
  .add(imageAnimation(), "-=0.9")
  .add(navAnimation(), "-=0.7")
  .add(titleAnimation(), "-=0.7");

// expandImage();

// function expandImage() {
//   gsap.from(".section-image", {
//     scrollTrigger: {
//       markers: true,
//       trigger: ".section-image",
//       start: "top 80%",
//       end: "bottom 20%",
//       scrub: 1,
//     },
//     y:-100,
//     duration: 1.2,
//     ease: "power3.out",
//   });
// }

function horizontalScroll() {
  const wrapper = document.querySelector(".scroll-wrapper");

  let scrollDistance = wrapper.scrollWidth - window.innerWidth;

  gsap.to(wrapper, {
    x: -scrollDistance,
    ease: "none",
    scrollTrigger: {
      trigger: ".horizontal-section",
      pin: true,
      scrub: 1,
      start: "top top",
      end: () => "+=" + scrollDistance,
    },
  });

  const tl = gsap.timeline();
  tl.from(
    ".title2",
    {
      scrollTrigger: {
        trigger: ".horizontal-section",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
      },
      x: 100,
      duration: 1,
      ease: "power3.out",
    },
    "-=0.5",
  );
}

horizontalScroll();

function animateText() {
  const textElement = document.querySelector(".wrapper-text");
  let textScrollDistance = textElement.scrollWidth - window.innerWidth;

  gsap.to(".wrapper-text", {
    x: -textScrollDistance,
    ease: "none",
    scrollTrigger: {
      trigger: ".wrapper-section",
      pin: true,
      scrub: 1,
      start: "top top",
      end: () => "+=" + textScrollDistance,
    },
  });
}

animateText();
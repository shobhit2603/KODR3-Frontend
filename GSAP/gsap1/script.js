// gsap.method(Element, {
//     property: value,
// })

// GSAP TO is used to animate an element from its current state to a new state.

// gsap.to(".box", {
//     x: 200,
//     y: 200,
//     delay: 1,
//     duration: 1,
//     ease: "bounce.out",
//     repeat: -1,
//     yoyo: true,
//     borderRadius: "50%",
//     backgroundColor: "blue",
//     scale: 1.5,
//     rotate: 360,
// });

// GSAP FROM is used to animate an element from a new state to its current state.

// gsap.from(".box", {
//     x: 100,
//     y: 100,
//     delay: 1,
//     duration: 1,
//     ease: "power1.out",
//     repeat: -1,
//     yoyo: true,
//     borderRadius: "50%",
//     backgroundColor: "blue",
//     scale: 1.5,
//     rotate: 360,
// });

// GSAP FROMTO is used to animate an element from a new state to its current state and vice versa.

// gsap.fromTo(".box", {
//     opacity: 0,
//     scale: 0,
//     rotate: -180,
//     borderRadius: "100%",
//     backgroundColor: "blue",
// }, {
//     x: 100,
//     y: 100,
//     opacity: 1,
//     scale: 1,
//     rotate: 360,
//     borderRadius: "10%",
//     backgroundColor: "red",
//     duration: 1,
//     delay: 1,
//     ease: "power2.out",
//     repeat: -1,
//     yoyo: true,
// });

// const links = document.querySelectorAll("#nav-links li");
// const logo = document.querySelector(".logo");

// gsap.from(".logo", {
//   opacity: 0,
//   y: -100,
//   duration: 0.5,
//   ease: "power1.out",
// });

// gsap.from(".links", {
//   opacity: 0,
//   y: -100,
//   duration: 0.3,
//   ease: "power1.out",
//   stagger: {
//     each: 0.2,
//     from: "end",
//   },
//   delay: 0.3,
// });

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
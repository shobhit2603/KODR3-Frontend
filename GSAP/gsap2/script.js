const tl = gsap.timeline({
  paused: true,
});

tl.to(".box1", {
  x: 1300,
  duration: 1,
  ease: "power1.inOut",
  repeat: -1,
  yoyo: true,
})
  .to(".box2", {
    x: 1300,
    duration: 1,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
  })
  .to(".box3", {
    x: 1300,
    duration: 1,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
  })
  .to(".box4", {
    x: 1300,
    duration: 1,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
  });

// tl.to(".container div", {
//   x: 500,
//   duration: 1,
//   delay: 1,
//   repeat: -1,
//   yoyo: true,
//   ease: "power1.inOut",
//   stagger: 0.5,
// });

const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const reverse = document.querySelector(".reverse");
const restart = document.querySelector(".restart");
const seek = document.querySelector(".seek");
const slow = document.querySelector(".slow");
const fast = document.querySelector(".fast");
const normal = document.querySelector(".normal");

play.addEventListener("click", () => {
  tl.play();
});

pause.addEventListener("click", () => {
  tl.pause();
});

reverse.addEventListener("click", () => {
  tl.reverse();
});

restart.addEventListener("click", () => {
  tl.restart();
});

seek.addEventListener("click", () => {
  tl.seek(0.5);
});

slow.addEventListener("click", () => {
  tl.timeScale(0.2);
});

fast.addEventListener("click", () => {
  tl.timeScale(5);
});

normal.addEventListener("click", () => {
  tl.timeScale(1);
});

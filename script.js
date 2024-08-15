var h5timer = document.querySelector("#loader-part1 h5");

var glow = 0;
var timerInterval = setInterval(() => {
  if (glow < 100) {
    glow++;
    h5timer.innerHTML = glow;
    // clearInterval(timerInterval)
  }
  if (glow >= 100) {
    console.log("h");

    clearInterval(timerInterval);
  }
}, 35);

// tl.from("#loader .elem h1", {
//   y: 100,
//   stagger: 0.4,
//   duration: 0.6,
//   delay: 0.6,
// });

var tl = gsap.timeline();

tl.from("#loader .elem h1", {
  y: 100,
  stagger: 0.4,
  duration: 0.6,
  delay: 0.6,
});


tl.from("#loader-part1 ", {
  opacity: 0,
});
tl.to(".elem h2",{
    animatioName:"anime",
    opacity:1
})

tl.to("#loader", {
  opacity: 0,
  duration: 0.4,
  delay: 4,
});

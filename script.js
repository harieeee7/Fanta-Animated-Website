// === Scroll animation for Section Two ===
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "top 90%",
    end: "bottom 50%",
    scrub: true,
  }
});

tl.to("#fanta", {
  top: "120%",
  left: "0%",
  ease: "power1.out"
}, 'orange')
.to("#orange-cut", {
  top: "160%",
  left: "23%",
  ease: "power1.out"
}, 'orange')
.to("#orange", {
  width: "15%",
  top: "160%",
  right: "10%",
  ease: "power1.out"
}, 'orange')
.to("#leaf", {
  top: "110%",
  rotate: "130deg",
  left: "70%",
  ease: "power1.out"
}, 'orange')
.to("#leaf2", {
  top: "110%",
  rotate: "130deg",
  left: "0%",
  ease: "power1.out"
}, 'orange');

// === Scroll animation for Section Three ===
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "top 90%",
    end: "bottom 50%",
    scrub: true,
  }
});

tl2.from(".lemon", {
  rotate: "-90deg",
  left: "-100%",
  top: "110%",
  ease: "power1.out"
}, 'ca')
.from("#cocacola", {
  rotate: "-90deg",
  top: "110%",
  left: "-100%",
  ease: "power1.out"
}, 'ca')
.from("#pepsi", {
  rotate: "90deg",
  top: "110%",
  left: "100%",
  ease: "power1.out"
}, 'ca')
.to("#orange-cut", {
  width: "18%",
  left: "42%",
  top: "204%",
  ease: "power1.out"
}, 'ca')
.to("#fanta", {
  width: "35%",
  top: "210%",
  left: "33%",
  ease: "power1.out"
}, 'ca');



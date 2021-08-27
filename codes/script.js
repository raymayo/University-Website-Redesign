const hero = gsap.timeline({ defaults: { duration: 1, ease: Power3.easeOut } });

hero.from(".mainText", { y: "-100%", opacity: 0 });
hero.from(".headText", { opacity: 0 });
hero.from(".bottomText", { opacity: 0, y: "20vw" });

const tl = gsap.timeline();
tl.to("#container", 5, { xPercent: -100 });
tl.to("#container", 5, { xPercent: -200 });

ScrollTrigger.create({
  animation: tl,
  trigger: "#container",
  start: "top top",
  end: "+=4000",
  scrub: 1,
  pin: true,
  // snap: { snapTo: [0, 0.5, 1], duration: 0.8, delay: 0 },
});

gsap.to("progress", {
  value: 100,
  ease: "none",

  scrollTrigger: {
    trigger: "body",
    scrub: 1,
    start: "top top",
    end: "bottom bottom",
  },
});

gsap.to("#mainLogo", {
  scrollTrigger: {
    trigger: "#mainLogo",
    markers: true,
    start: "center center",
    scrub: 1,
  },
  y: "100%",
  duration: 3,
});

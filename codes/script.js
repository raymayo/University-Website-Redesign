
const tl = gsap.timeline();
tl.to(".section", 5, { xPercent: -100 });
tl.to(".section2", 5, { xPercent: -200 });

ScrollTrigger.create({
  animation: tl,
  trigger: "#container",
  start: "top top",
  end: "+=4000",
  scrub: 1,
  pin: true,
});

// PROGRESS BAR
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

let scrollAnimation = gsap.timeline()

scrollAnimation.fromTo('.mainText',{x:0, autoAlpha:1 },{x:'1000', autoAlpha:0, duration:1});
scrollAnimation.fromTo('.headText', {y:0, autoAlpha:1}, {y:'-500', autoAlpha:0, duration:1});
scrollAnimation.fromTo('.bottomText', {y:0, autoAlpha:1}, {y:'500', autoAlpha:0, duration:1},'<');
scrollAnimation.fromTo('#mainLogo', {y:0,}, {y:'900',  duration:1});


ScrollTrigger.create({
  trigger:'.hero',
  start:'70% 50%',
  end:'180% 50%',
  animation: scrollAnimation,
  scrub:1,
  markers: true,
})




//INITIAL HERO PAGE ANIMATION
let initialAnimation = gsap.timeline()
initialAnimation.fromTo('#mainLogo', {y:'900',}, {y:0,  duration:1, ease:Power4.easeOut});
initialAnimation.fromTo('.mainText',{x:'1000', autoAlpha:0 },{x:0, autoAlpha:1, duration:1, ease: Power4.easeOut,});
initialAnimation.fromTo('.headText', {y:'-500', autoAlpha:0}, {y:0, autoAlpha:1, duration:1, ease:Power4.easeOut});
initialAnimation.fromTo('.bottomText', {y:'500', autoAlpha:0}, {y:0, autoAlpha:1, duration:1, ease:Power4.easeOut},'<');


// let headText = gsap.timeline()
// headText.fromTo('.headText', {y:'-1000'}, {y:0, duration:1, ease:Power4.easeOut});

ScrollTrigger.create({
  trigger: '.hero',
  start:"-10% top",
  animation: initialAnimation,
  toggleActions: 'play none none none',
});




// ScrollTrigger.create({
//   trigger:'.hero',
//   start:'-1% top',
//   animation: headText,
//   toggleActions:'play none none none'
// })


// let scrollText = gsap.timeline()
// scrollText.fromTo('.mainText', {y:0}, {y:'-500', duration:1, ease: Power4.easeOut,});
// // scrollText.fromTo('.headText', {y:0}, {y:'-200', duration:1, ease:Power4.easeOut});
// // scrollText.fromTo('.bottomText', {y:0}, {y:'500', duration:1, ease:Power4.easeOut});


// ScrollTrigger.create({
//   trigger: '.hero',
//   start:"top top",
//   animation: scrollText,
//   scrub:1,
//   markers:true,
// });



// let initHead = gsap.timeline()
// initHead.fromTo('.headText' , {y:0}, {y:'-600', duration:1, ease:Power4.easeOut,});

// ScrollTrigger.create({
//   trigger:'.hero',
//   start:'center center',
//   animation: initHead,
//   scrub:1,
//   markers:true,
// })

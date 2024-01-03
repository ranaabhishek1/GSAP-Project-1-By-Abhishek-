gsap.from("#nav img, #nav p, #nav button",{
    y:-100,
    duration:1,
    delay:.5,
    opacity:0,
    stagger:0.2,

})

let tl=gsap.timeline();

tl.from("#text-box h1",{
    y:100,
    duration:1,
    delay:.8,
    opacity:0,
    stagger:0.3,

})
    
gsap.from("#images img",{
    scale:0,
    duration:1,
    delay:.8,
    opacity:0,
})

gsap.from("#icons",{
    y:100,
    duration:1,
    delay:.6,
    opacity:0,
})

gsap.from("#down-text",{
    opacity:0,
    scale:0,
    duration:1,
    delay:0.7,
})

gsap.to("#down-text",{
    y:10,
    delay:0.7,
    duration:0.5,
    repeat:-1,
    yoyo:true,
})











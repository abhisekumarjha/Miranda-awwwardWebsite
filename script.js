const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


let tl = gsap.timeline();

tl.to("#page1", {
    y: "100%",
})

tl.to("#page1", {
    y: "25%",
    duration: 1,
    scale: 0
})

tl.to("#page1", {
    y: "0%",
    rotate: 360,
    scale: 1,
    duration: 1.5
})
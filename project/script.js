



var tl = gsap.timeline()
tl.from(".line h1",{
    y:100,
    stagger:0.25,
    duration:0.5,
    delay:0.1
})
tl.from("#line-part1,.line h2",{
    opacity:0,

    onStart:function(){
        var h5timer = document.querySelector("#line1-part1 h5")
var grow =0
setInterval(function(){
    if(grow<100){
        h5timer.innerHTML=grow++
        // grow++
        // console.log(grow)
    }else{
        h5timer.innerHTML=grow
        // grow=100
        // console.log(grow)
    }
},30)
    }
})
tl.to('.line h2',{
    animationName:"anime",
    opacity:1
})
tl.to("#loader",{
    opacity:0,
    duration:0.2,
    delay:3.5,
})
tl.from("#page1",{
    delay:0.2,
    y:1600,
    duration:0.5,
    ease:power4
})
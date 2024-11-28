


tl = gsap.timeline();
tl.from(".line h1",{
    y : 150,
    stagger : 0.25,
    duration : 0.6,
    delay : 0.4
})
tl.from('.line1-part1', {
    opacity : 0,
    onStart : function(){
        var h5timer = document.querySelector('.line1-part1 h5')
        var grow = 0;
setInterval(function(){
    if(grow < 100){
        grow++;
        h5timer.innerHTML = grow;
    }else{
        grow = 100;
        h5timer.innerHTML = grow;
    }  
} , 33);
},
});
tl.to('.line h2' , {
    anmationName : 'anime',
    opacity : 1
} )

tl.to(".loader",{
    opacity  : 0,
    duration : 0.2,
    delay : 4,
});
document.addEventListener('DOMContentLoaded' , function(){
    tl.from(".page1",{
        y : 1200,
        opacity : 0,
        delay:0.2,
        duration : 0.5,
        ease:"power3" // ye kaam nhi kr rha hai
    })
})

t1.to(".loader" , {
    display :"none"
})
var h5timer = document.querySelector('#loader-part1 h5')

var glow = 0
var timerInterval= setInterval(() => {
    if (glow<100) {
        
        glow++
        h5timer.innerHTML=glow
        // clearInterval(timerInterval)
    }
    if (glow>=100) {
        console.log('h');
        
        clearInterval(timerInterval)
    }
}, 35);


gsap.from("#loader .elem h1",{
    y:100,
    stagger:0.4,
duration:0.6,
delay:0.6
})

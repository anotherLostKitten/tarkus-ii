const start = document.getElementById("circle");
const c = document.getElementById("playground");
const ctx = c.getContext("2d");


var clear=()=>{
    ctx.clearRect(0,0,c.width,c.height);
    ctx.beginPath(); // prevetns ghost line from last click before clearing
};

var raydius = 0;
var inc = true;
var id = 0;

var elps = ()=>{
    id=window.requestAnimationFrame(elps);
    clear();
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.ellipse(250,250,raydius,raydius,0,0,2*Math.PI);
    ctx.fill();
    if(raydius>4){
	ctx.fillStyle = "#056ACE";
	ctx.beginPath();
	ctx.ellipse(250,250,raydius-4,raydius-4,0,0,2*Math.PI);
	ctx.fill();
    }
    
    raydius+=inc?1:-1;
    if(raydius<=0||raydius>=250)inc=!inc;
};

var stop = ()=>{
    window.cancelAnimationFrame(id);
};

start.addEventListener("click",()=>{stop();elps();});

document.getElementById("stop").addEventListener("click",stop);

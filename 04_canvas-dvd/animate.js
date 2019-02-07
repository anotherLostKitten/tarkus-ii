const start = document.getElementById("circle");
const c = document.getElementById("playground");
const ctx = c.getContext("2d");

var id = 0;

var clear=()=>{
    ctx.clearRect(0,0,c.width,c.height);
    ctx.beginPath(); // prevetns ghost line from last click before clearing
};

var stop = ()=>{
    window.cancelAnimationFrame(id);
};

start.addEventListener("click",()=>{
	stop();
	var raydius = 0;
	var inc = true;
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
		if(raydius<=0||raydius>=c.width/2)inc=!inc;
	};
	elps();
});

document.getElementById("stop").addEventListener("click",stop);


document.getElementById("dvd").addEventListener("click",()=>{
	stop();
    var rectWidth = 100;
	var rectHeight = 50;
	var rectX = Math.floor( Math.random() * (c.width-rectWidth) );
	var rectY = Math.floor( Math.random() * (c.height-rectHeight) );
	var xVel = 1;
	var yVel = 1;
	var logo = new Image();
	logo.src = "logo_dvd.jpg";
	var dvd=()=>{
		id=window.requestAnimationFrame(dvd);
		clear();
		ctx.drawImage(logo,rectX,rectY,100,100);
		rectX+=xVel;
		rectY+=yVel;
		if(rectX<=0||rectX>=c.width-100)
			xVel*=-1;
		if(rectY<=0||rectY>=c.width-100)
			yVel*=-1;
	};
	dvd();
});

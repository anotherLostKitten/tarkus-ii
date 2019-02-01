/*
  Team Lilac-Mykolyk : Theodore Peters & Mai Rachlevsky
  softdev 07
  01 -- and i want to paint it better
  2019-02-01
*/

document.addEventListener("DOMContentLoaded",()=>{ // waits until page has loaded
    const c = document.getElementById("playground");
    const ctx = c.getContext("2d");

    document.getElementById("clear").addEventListener("click",()=>{
	ctx.clearRect(0,0,c.width,c.height);
	ctx.beginPath(); // prevetns ghost line from last click before clearing
    });

    c.addEventListener("click",(e)=>{
	var x = e.offsetX; // comments stimpky
	var y = e.offsetY; // cordinates relative to target elemtn

	ctx.lineTo(x,y); // draw line to cilk from last dot
	ctx.stroke(); // rener

	ctx.beginPath(); // starts drawign area defined by eclipse
	ctx.ellipse(x,y,10,10,0,0,2*Math.PI); // Math.PI is actually pi
	ctx.fill(); // fills ellipse pth

	ctx.beginPath(); // set up cur/ dpt fopr dawr line
	ctx.moveTo(x,y); // ^
	
    });
});

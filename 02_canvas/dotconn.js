/*
  Team Lilac-Mykolyk : Theodore Peters & Mai Rachlevsky
  softdev 07
  02 -- conncting the dorts
  2019-20-04
*/

document.addEventListener("DOMContentLoaded",()=>{ // waits until page has loaded
    const c = document.getElementById("playground");
    const ctx = c.getContext("2d");

    var sad1 = -1;
    var sad2 = -1;
    
    document.getElementById("clear").addEventListener("click",()=>{
	ctx.clearRect(0,0,c.width,c.height);
	ctx.beginPath(); // prevetns ghost line from last click before clearing
	sad1 = -1;
	sad2 = -1;
    });

    c.addEventListener("click",(e)=>{
	var x = e.offsetX; // comments stimpky
	var y = e.offsetY; // cordinates relative to target elemtn

	ctx.lineTo(x,y); // draw line to cilk from last dot
	ctx.stroke(); // rener


	if(sad1>=0&&sad2>=0){
	    ctx.beginPath(); // starts drawign area defined by eclipse
	    ctx.ellipse(sad1,sad2,10,10,0,0,2*Math.PI); // Math.PI is actually pi
	    ctx.fill(); // fills ellipse pth

	    
	    ctx.fillStyle = "#d4a1ea";
	    ctx.beginPath(); // starts drawign area defined by eclipse
	    ctx.ellipse(sad1,sad2,7,7,0,0,2*Math.PI); // Math.PI is actually pi
	    ctx.fill(); // fills ellipse pth
	}
	ctx.fillStyle = "#000000";

	ctx.beginPath(); // starts drawign area defined by eclipse
	ctx.ellipse(x,y,10,10,0,0,2*Math.PI); // Math.PI is actually pi
	    ctx.fill(); // fills ellipse pth
	    
	ctx.fillStyle = "#d4a1ea";
	ctx.beginPath(); // starts drawign area defined by eclipse
	ctx.ellipse(x,y,7,7,0,0,2*Math.PI); // Math.PI is actually pi
	ctx.fill(); // fills ellipse pth

	ctx.fillStyle = "#000000";
	ctx.beginPath(); // set up cur/ dpt fopr dawr line
	ctx.moveTo(x,y); // ^

	sad1 = x;
	sad2 = y;
    });
});

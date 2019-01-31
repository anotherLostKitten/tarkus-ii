/*
  Team Lilac-Mykolyk : Theodore Peters & Mai Rachlevsky
  softdev 07
  01 -- and i want to paint it better
  2019-02-01
*/

document.addEventListener("DOMContentLoaded",()=>{ // waits until page has loaded
    var drawRect = true; // state val for whether drawing [] or o
    const c = document.getElementById("slate");
    const ctx = c.getContext("2d");

    const tgl = document.getElementById("toggle");
    tgl.addEventListener("click",()=>{
	drawRect = !drawRect;
    });

    document.getElementById("clear").addEventListener("click",()=>{
	ctx.clearRect(0,0,c.width,c.height);
    });

    c.addEventListener("click",(e)=>{
	console.log(e);
	var x = e.offsetX; // comments stimpky
	var y = e.offsetY; // cordinates relative to target elemtn
	if(drawRect)
	    ctx.fillRect(x-10,y-10,20,20);
	else{
	    ctx.beginPath(); // starts drawign area defined by ellipse
	    ctx.ellipse(x,y,10,10,0,0,2*Math.PI); // Math.PI is actually pi
	    ctx.fill(); // fills ellipse path
	}
	e.preventDefault();
    });
});

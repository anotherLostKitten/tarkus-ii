document.addEventListener("DOMContentLoaded",()=>{
    var drawRect = true;
    const c = document.getElementById("slate");
    const ctx = c.getContext("2d");

    const tgl = document.getElementById("toggle");
    tgl.addEventListener("click",()=>{
		drawRect = !drawRect;
		tgl.innerHTML = drawRect?"now drawing rectangle":"now drawing circle";
    });

    document.getElementById("clear").addEventListener("click",()=>{
		ctx.clearRect(0,0,c.width,c.height);
    }); 

    c.addEventListener("click",(e)=>{
		console.log(e);
		console.log(c.getBoundingClientRect());
		var x = e.clientX - c.getBoundingClientRect().x;
		var y = e.clientY - c.getBoundingClientRect().y;
		if(drawRect)
			ctx.fillRect(x-10,y-10,20,20);
		else{
			ctx.beginPath();
			ctx.ellipse(x,y,10,10,0,0,2*Math.PI);
			ctx.fill();
		}
    });
});

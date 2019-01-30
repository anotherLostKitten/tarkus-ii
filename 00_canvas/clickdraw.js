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

    c.addEventListener("click",()=>{
	
    });
});

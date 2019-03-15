var pic=document.getElementById("vimage");
document.getElementById("clear").addEventListener("click",()=>{
	pic.innerHTML="";
});
var click=(x,y)=>{
	let c=document.createElementNS("http://www.w3.org/2000/svg","circle");
	c.setAttribute("cx",x);
	c.setAttribute("cy",y);
	c.setAttribute("r","20");
	c.setAttribute("fill","red");
	c.setAttribute("stroke","black");
	c.addEventListener("click",(e)=>{
		e.preventDefault();
		e.stopPropagation();
		c.setAttribute("fill","purple");
		c.addEventListener("click",(e)=>{
			e.preventDefault();
			e.stopPropagation();
			c.remove();
			click(Math.random()*pic.width.baseVal.value,Math.random()*pic.height.baseVal.value);
		});
	});
	pic.appendChild(c);
};
pic.addEventListener("click",(e)=>{
	e.preventDefault();
	click(e.offsetX,e.offsetY);
});

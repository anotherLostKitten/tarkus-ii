var pic = document.getElementById("vimage");
var rect=pic.getBoundingClientRect();
var last=[];
document.getElementById("clear").addEventListener("click",()=>{
	pic.innerHTML="";
	last=[];
});
pic.addEventListener("click",(e)=>{
	if (last.length>0){
		var c = document.createElementNS("http://www.w3.org/2000/svg","line");
		c.setAttribute( "x1", e.clientX-rect.left);
		c.setAttribute( "y1", e.clientY-rect.top);
		c.setAttribute("x2",last[0]);
		c.setAttribute("y2",last[1]);
		c.setAttribute( "stroke", "black");
		pic.appendChild(c);
		var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
		c.setAttribute("cx",last[0]);
		c.setAttribute("cy",last[1]);
		c.setAttribute( "r", "5");
		c.setAttribute( "fill", "red");
		c.setAttribute( "stroke", "black");
		pic.appendChild(c);
	}
	var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
	c.setAttribute( "cx", e.clientX-rect.left);
	c.setAttribute( "cy", e.clientY-rect.top);
	c.setAttribute( "r", "5");
	c.setAttribute( "fill", "red");
	c.setAttribute( "stroke", "black");
	pic.appendChild(c);
	last=[e.clientX-rect.left,e.clientY-rect.top];
});

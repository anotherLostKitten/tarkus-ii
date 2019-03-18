var pic=document.getElementById("vimage");
var id=0;
var width=pic.width.baseVal.value;
var height=pic.height.baseVal.value;
document.getElementById("clear").addEventListener("click",()=>{
	pic.innerHTML="";
	stop();
});
var stop=()=>{
    window.cancelAnimationFrame(id);
};
var click=(x,y)=>{
	let c=document.createElementNS("http://www.w3.org/2000/svg","circle");
	c.setAttribute("cx",x);
	c.setAttribute("cy",y);
	c.setAttribute("x_vel",0);
	c.setAttribute("y_vel",0);
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
			click(Math.random()*width,Math.random()*height);
		});
	});
	pic.appendChild(c);
};
document.getElementById("move").addEventListener("click",()=>{
	stop();
	let balls=document.getElementsByTagName("circle");
	for(var i=0;i<balls.length;i++){
		balls[i].setAttribute("x_vel",3);
		balls[i].setAttribute("y_vel",4);
	}
	var bmove=()=>{
		id=window.requestAnimationFrame(bmove);
		for(var i=0;i<balls.length;i++){
			if(balls[i].getAttribute("cx")<parseInt(balls[i].getAttribute("r")))
				balls[i].setAttribute("x_vel",Math.abs(balls[i].getAttribute("x_vel")));
			if(balls[i].getAttribute("cx")>width-balls[i].getAttribute("r"))
				balls[i].setAttribute("x_vel",-1*Math.abs(balls[i].getAttribute("x_vel")));
			if(balls[i].getAttribute("cy")<parseInt(balls[i].getAttribute("r")))
				balls[i].setAttribute("y_vel",Math.abs(balls[i].getAttribute("y_vel")));
			if(balls[i].getAttribute("cy")>height-balls[i].getAttribute("r"))
				balls[i].setAttribute("y_vel",-1*Math.abs(balls[i].getAttribute("y_vel")));
			balls[i].setAttribute("cx",parseInt(balls[i].getAttribute("cx"))+parseInt(balls[i].getAttribute("x_vel")));
			balls[i].setAttribute("cy",parseInt(balls[i].getAttribute("cy"))+parseInt(balls[i].getAttribute("y_vel")));
		}
	};
	bmove();
});
document.getElementById("biggify").addEventListener("click",()=>{
	let ballls=document.getElementsByTagName("circle");
	for(var i=0;i<ballls.length;i++){
		ballls[i].setAttribute("r",5+parseInt(ballls[i].getAttribute("r")));
	}
});
pic.addEventListener("click",(e)=>{
	e.preventDefault();
	click(e.offsetX,e.offsetY);
});

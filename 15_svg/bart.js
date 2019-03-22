var x,y,chart,bar;
d3.tsv("data.tsv").then((data)=>{
	data.forEach(type);
	console.log(data);
	x=d3.scaleLinear().domain([d3.min(data,(d)=>{return d.lon;}),d3.max(data,(d)=>{return d.lon;})]).range([20,280]);
	y=d3.scaleLinear().domain([d3.min(data,(d)=>{return d.lat;}),d3.max(data,(d)=>{return d.lat;})]).range([280,20]);
	chart=d3.select("svg").attr("width",300).attr("height",300);
	bar=chart.selectAll("div").data(data).enter().append("circle").attr("cx",(d)=>{return x(d.lon);}).attr("cy",(d)=>{return y(d.lat);}).attr("r",5).attr("fill","red");
});

var type = (d)=>{
	d.lat = +d.lat;
	d.lon = + d.lon;
	return d;
};

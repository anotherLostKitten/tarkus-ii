var width=420,barHeight=20;
var data=[4,8,15,16,23,42];
var x=d3.scaleLinear().domain([0,d3.max(data)]).range([0,width]); // function that scales data values to width so largest data will be the max size of container, domain -> range used to generate fxn here
var chart=d3.select(".chart").attr("width",width).attr("height",barHeight*data.length); // sets the chart div to right sizes based on number of datapoints
var bar=chart.selectAll("g").data(data).enter().append("g").attr("transform",(d,i)=>{return"translate(0,"+i*barHeight+")";}); // appends svg container "g" to chart for all the values d, indecies i in data
// bar is a selection of all the "g"s
bar.append("rect").attr("width",x).attr("height",barHeight-1); // appends a rectangle to all of the g's with scale function to get width
bar.append("text").attr("x",function(d){return x(d)-3;}).attr("y",barHeight/2).attr("dy",".35em").text(function(d){return d;}); // adds text to all the g;s near the right side by setting x&y vals
// tsv files were not loading as an array but iterating through each element of the tsv for some reason i don;t know why and could find no documentation relating to this but also it seemed extra to making the bar chart so i didn't really pursue it further.

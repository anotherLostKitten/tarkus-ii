var data = [1,2,3]
d3.select(".table").selectAll("tr").selectAll("td").append("text").data(data).text((d)=>{return d;});

var letters = [
    {name: "A", frequency: .08167},
    {name: "B", frequency: .01492},
    {name: "C", frequency: .02780},
    {name: "D", frequency: .04253},
    {name: "E", frequency: .12702}
];
d3.select(".letters1").selectAll("td").data(letters).text((d)=>{return d.name + ":" + d.frequency;});

d3.select(".letters2").selectAll("td").data([{name:"E"},{name:"J"},{name:"B"},{name:"C"},{name:"A"}]);
var bazinga = d3.select(".letters2").selectAll("td").data(letters,(d)=>{return d.name;});
bazinga.text((d)=>{return d.name + ":" + d.frequency;});
bazinga.exit().text((d)=>{return d.name + ":exit";});
console.log(bazinga.enter());

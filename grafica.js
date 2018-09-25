//Datos procesados de las 50 ciudades con mayores niveles de accidentalidad
var data=[
{ ciudad: "MED" , choques: 20869 , heridos: 32797 , muertos: 154 , total: 53820},
{ ciudad: "BOG" , choques: 24276 , heridos: 19885 , muertos: 853 , total: 45014},
{ ciudad: "CAL" , choques: 9074 , heridos: 7007 , muertos: 130 , total: 16211},
{ ciudad: "BAR" , choques: 5621 , heridos: 1421 , muertos: 72 , total: 7114},
{ ciudad: "BEL" , choques: 1981 , heridos: 4780 , muertos: 36 , total: 6797},
{ ciudad: "CAR" , choques: 3914 , heridos: 1841 , muertos: 78 , total: 5833},
{ ciudad: "ITA" , choques: 2290 , heridos: 2800 , muertos: 37 , total: 5127},
{ ciudad: "PER" , choques: 3483 , heridos: 1570 , muertos: 32 , total: 5085},
{ ciudad: "ENVI" , choques: 2858 , heridos: 1578 , muertos: 28 , total: 4464},
{ ciudad: "BUC" , choques: 1980 , heridos: 1985 , muertos: 36 , total: 4001},
{ ciudad: "ARM" , choques: 1594 , heridos: 1891 , muertos: 50 , total: 3535},
{ ciudad: "MAN" , choques: 2018 , heridos: 1469 , muertos: 43 , total: 3530},
{ ciudad: "VILL" , choques: 1241 , heridos: 1562 , muertos: 43 , total: 2846},
{ ciudad: "PAS" , choques: 919 , heridos: 1720 , muertos: 34 , total: 2673},
{ ciudad: "SAB" , choques: 1249 , heridos: 995 , muertos: 7 , total: 2251},
{ ciudad: "PAL" , choques: 1078 , heridos: 1039 , muertos: 45 , total: 2162},
{ ciudad: "RIO" , choques: 1168 , heridos: 901 , muertos: 21 , total: 2090},
{ ciudad: "IBA" , choques: 1113 , heridos: 720 , muertos: 20 , total: 1853},
{ ciudad: "NEI" , choques: 952 , heridos: 806 , muertos: 22 , total: 1780},
{ ciudad: "DOS" , choques: 762 , heridos: 791 , muertos: 15 , total: 1568},
{ ciudad: "MON" , choques: 726 , heridos: 781 , muertos: 39 , total: 1546},
{ ciudad: "LA EST" , choques: 414 , heridos: 1107 , muertos: 10 , total: 1531},
{ ciudad: "POP" , choques: 966 , heridos: 351 , muertos: 29 , total: 1346},
{ ciudad: "COP" , choques: 473 , heridos: 819 , muertos: 22 , total: 1314},
{ ciudad: "SOA" , choques: 851 , heridos: 391 , muertos: 21 , total: 1263},
{ ciudad: "SAN" , choques: 928 , heridos: 286 , muertos: 40 , total: 1254},
{ ciudad: "FLO" , choques: 777 , heridos: 320 , muertos: 10 , total: 1107},
{ ciudad: "GIR" , choques: 244 , heridos: 804 , muertos: 11 , total: 1059},
{ ciudad: "TUL" , choques: 309 , heridos: 599 , muertos: 15 , total: 923},
{ ciudad: "TUN" , choques: 656 , heridos: 215 , muertos: 13 , total: 884},
{ ciudad: "VIL" , choques: 576 , heridos: 213 , muertos: 39 , total: 828},
{ ciudad: "BAR" , choques: 346 , heridos: 448 , muertos: 19 , total: 813},
{ ciudad: "CHI" , choques: 596 , heridos: 122 , muertos: 11 , total: 729},
{ ciudad: "CALD" , choques: 338 , heridos: 359 , muertos: 4 , total: 701},
{ ciudad: "CUC" , choques: 6 , heridos: 636 , muertos: 28 , total: 670},
{ ciudad: "CARO" , choques: 255 , heridos: 402 , muertos: 12 , total: 669},
{ ciudad: "YOP" , choques: 338 , heridos: 282 , muertos: 22 , total: 642},
{ ciudad: "FUS" , choques: 433 , heridos: 193 , muertos: 15 , total: 641},
{ ciudad: "GIR" , choques: 442 , heridos: 173 , muertos: 7 , total: 622},
{ ciudad: "MOS" , choques: 437 , heridos: 141 , muertos: 15 , total: 593},
{ ciudad: "PIE" , choques: 361 , heridos: 206 , muertos: 15 , total: 582},
{ ciudad: "CAN" , choques: 231 , heridos: 302 , muertos: 27 , total: 560},
{ ciudad: "BUE" , choques: 418 , heridos: 102 , muertos: 26 , total: 546},
{ ciudad: "VAL" , choques: 430 , heridos: 102 , muertos: 13 , total: 545},
{ ciudad: "CAJ" , choques: 348 , heridos: 126 , muertos: 28 , total: 502},
{ ciudad: "APA" , choques: 313 , heridos: 148 , muertos: 18 , total: 479},
{ ciudad: "CALA" , choques: 267 , heridos: 201 , muertos: 4 , total: 472},
{ ciudad: "YUM" , choques: 244 , heridos: 201 , muertos: 5 , total: 450},
{ ciudad: "SIB" , choques: 318 , heridos: 79 , muertos: 11 , total: 408},

]

function actualizar(myData){
var svg = d3.select("svg"), 
    margin = {left: 80, right: 50, top: 50, bottom: 20},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x = d3.scaleBand()
   .rangeRound([0, width])
   .paddingInner(0.05)
   .align(0.1);
    
var y = d3.scaleLinear()
   .rangeRound([height, 0]);
    
var z = d3.scaleOrdinal()
   .range(d3.schemeCategory10);
    
    var keys = (["choques","heridos","muertos"]);
    x.domain(data.map(function(d) { return d.ciudad; }));
    y.domain([0, d3.max(data, function(d) { return d.total; })]).nice();
    z.domain(keys);

       g.append("g")
        .selectAll("g")
        .data(d3.stack().keys(keys)(data))
        .enter().append("g")
         .attr("fill", function(d) { return z(d.key); })
        .selectAll("rect")
        .data(function(d) { return d; })
        .enter().append("rect")
         .attr("x", function(d) { return x(d.data.ciudad); })
         .attr("y", function(d) { return y(d[1]); })
         .attr("height", function(d) { return y(d[0]) - y(d[1]); })
         .attr("width", x.bandwidth());

       g.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

       g.append("g")
         .attr("class", "axis")
         .call(d3.axisLeft(y).ticks(null, "s"))
        .append("text")
         .attr("x", 2)
         .attr("y", y(y.ticks().pop()) + 0.5)
         .attr("dy", "0.32em")
         .attr("fill", "#000")
         .attr("font-weight", "bold")
         .attr("text-anchor", "start")
         .text("Registros de accidentes 2017");
    
      var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      var legend = g.append("g")
         .attr("font-family", "sans-serif")
         .attr("font-size",20)
         .attr("text-anchor", "end")
        .selectAll("g")
        .data(keys.slice().reverse())
        .enter().append("g")
         .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

        legend.append("rect")
          .attr("x", width - 19)
          .attr("width", 19)
          .attr("height", 19)
          .attr("fill", z);

        legend.append("text")
          .attr("x", width - 24)
          .attr("y", 9.5)
          .attr("dy", "0.32em")
          .text(function(d) { return d; });

      var num = g.append("g")
         .attr("font-family", "sans-serif")
         .attr("font-size", 18)
         .attr("text-anchor", "end");

        //g.append("g").enter().num.append("text")
        // .transition().duration(800)
        //    .attr("x",function (d){ return x(d.data.ciudad); })
        // .transition().duration(800)
        //    .attr("y", function(d) { return y(d[1]); })
        //    .text(function(d) {return d.total;});
    
}
actualizar(data)

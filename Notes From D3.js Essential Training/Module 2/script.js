const width = document.documentElement.clientWidth;
const height = document.documentElement.clientHeight;
const dataArray = [5, 11, 16]

const svg = d3.select("body").append("svg")
        .attr("height", "100%")
        .attr("width", "100%")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .attr("preserveAspectRatio", "xMidYMid meet");

svg.selectAll("rect") // []
        .data(dataArray) // [5, 11, 16]
        .enter() // [nn, nn, nn]
        .append("rect") // [ rect, rect, rect]
        .attr("height", d => d * 15)
        .attr("width", 50)
        .attr("x", (d, i) => i*60)
        .attr("y", d => 400 - (d * 15))

svg.selectAll("circle").data(dataArray)
        .enter()
        .append("circle")
        .attr("r", 5)
        .attr("width", 50)
        .attr("cx", (d, i) => i * 60 + 25)
        .attr("cy", d => 400 - (d * 15))
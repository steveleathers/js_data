d3.csv("/data/bikethefts20072014.csv", function(data){
	data.forEach(function(d){
		d["Address Type"] = +d["Address Type"];
		d["Case Year"] = +d["Case Year"];
		d["Case Num"] = +d["Case Num"];
		d.District = +d.District;
		d.Status = +d.Status;
		d.X = +d.X;
		d.Y = +d.Y;
		d.ZIP_Code = +d.ZIP_Code;
		d.lat = +d.lat;
		d.lng = +d.lng;
	});
	console.log(data[0]);
});
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

var articles = [{
    "id": 1,
    "name": "vacuum cleaner",
    "weight": 9.9,
    "price": 89.9,
    "brand_id": 2
}, {
    "id": 2,
    "name": "washing machine",
    "weight": 540,
    "price": 230,
    "brand_id": 1
}, {
    "id": 3,
    "name": "hair dryer",
    "weight": 1.2,
    "price": 24.99,
    "brand_id": 2
}, {
    "id": 4,
    "name": "super fast laptop",
    "weight": 400,
    "price": 899.9,
    "brand_id": 3
}];

var brands = [{
    "id": 1,
    "name": "SuperKitchen"
}, {
    "id": 2,
    "name": "HomeSweetHome"
}];

function join(lookupTable, mainTable, lookupKey, mainKey, select){
	var l = lookupTable.length,
	    m = mainTable.length,
	    lookupIndex = [],
	    output = [];
	for (var i = 0; i < l; i++){
		var row = lookupTable[i];
		lookupIndex[row[lookupKey]] = row;
	}
	for (var j = 0; j < m; j++){
		var y = mainTable[j];
		var x = lookupIndex[y[mainKey]];
		output.push(select(y, x));
	}

	return output;
}

var results = join(brands, articles, "id", "brand_id", function(article, brand){
	return {
		id: article.id,
		name: article.name,
		weight: article.weight,
		price: article.price,
		brand: (brand !== undefined) ? brand.name : null
	};
});
console.log(results);
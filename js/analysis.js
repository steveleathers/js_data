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

articles.forEach(function(article){
	var result = brands.filter(function(brand){
		return brand.id === article.brand_id;
	});
	delete article.brand_id;
	article.brand = (result[0] !== undefined) ? result[0].name : null;
});

console.log(articles)
var name;
var weight;
var price;

$(document).ready(function() {
    console.log( "ready!");
    console.log(JSON.stringify());
});

$.getJSON('../product.json', function(json) {
    console.log("JSON file");
    console.log(json); // this will show the info it in firebug console
    console.log(json.list[0].product_name);

    console.log("List of items");
    for(var i = 0; i < json.list.length; i++){

        name = json.list[i].product_name;
        weight = json.list[i].net_weight;
        price = json.list[i].shelf_width;

        console.log(name);
        console.log(weight);
        console.log(price);
    }
});

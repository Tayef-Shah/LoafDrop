'use strict';

//var json = require("./product.json")
var parsed = JSON.parse("../product.json");

var name;
var weight;
var price;

console.log(parsed.list[0]);

function printJson(){

    for(var i = 0; i < parsed.length; i++){
        
        name = parsed.list[i].product_name;
        weight = parsed.list[i].gross_weight;
        price = parsed.list[i].shelf_width;

        console.log(name);
        console.log(weight);
        console.log(price);
    }
}
printJson();

// function getItems(){

//     for(var i = 0; i < parsed.length; i++){
//         name = parsed[i].product_name;
//         weight = parsed[i].gross_weight;
//         price = parsed[i].shelf_width;
//     }
    
// }
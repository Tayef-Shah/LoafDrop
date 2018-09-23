'use strict';

//var json = require("./product.json")
var parsed = JSON.parse("../product.json");

var name = json.product_name;
var weight = json.gross_weight;
var price = json.shelf_width;

function printJson(){

    for(var i = 0; i < parsed.length; i++){
        console.log(parsed[i]);
    }
}
printJson();

function getItems(){

    for(var i = 0; i < parsed.length; i++){
        name = parsed[i].product_name;
        weight = parsed[i].gross_weight;
        price = parsed[i].shelf_width;
    }
    
}
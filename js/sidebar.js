$(document).ready(function() {
    console.log( "ready!");
    console.log(JSON.stringify());
});

$.getJSON('../product.json', function(json) {
    console.log(json); // this will show the info it in firebug console
});

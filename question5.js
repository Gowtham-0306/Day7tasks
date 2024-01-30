var req = new XMLHttpRequest();

// Step 02: Specify the API which you are going to use.
req.open("GET", "https://restcountries.com/v2/all");

// Step 03: Sending the Request 
req.send();
 req.onload = function() {
var inp = JSON.parse(req.response);

console.log(inp);

 }
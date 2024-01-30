var req = new XMLHttpRequest();

// Step 02: Specify the API which you are going to use.
req.open("GET", "https://restcountries.com/v2/all");

// Step 03: Sending the Request 
req.send();

req.onload = function() {
    var result = JSON.parse(req.response);

    // Filter countries in the "Europe" region
    var res = result.filter(data => data.region === "Asia");

  console.log("Below are name of the asian continent/region countries");
        
    res.filter (names => console.log(names.name) )

   

    
}




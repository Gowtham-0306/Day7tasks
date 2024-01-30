var req = new XMLHttpRequest();

// Step 02: Specify the API which you are going to use.
req.open("GET", "https://restcountries.com/v2/all");

// Step 03: Sending the Request 
req.send();

req.onload = function() {
    var Userinput = JSON.parse(req.response);

    // Filter countries with a population less than 200,000
    var population = Userinput.filter(country => country.population < 200000);
    console.log("Less then 200000 population countries ");
    var countries = population.filter ( coun => console.log(coun.name)



    );
    console.log(countries);
}

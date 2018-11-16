// from data.js
var tableData = data;

// get a reference to the table body
var tableBody = d3.select("tbody");

// add each row of data to the table
tableData.forEach((sighting) => {
    //get a new row
    var row = tableBody.append("tr");

    //add each entry in a separate column
    Object.entries(sighting).forEach(([key, value]) => {
        var entry = row.append("td");
        entry.text(value);
    });
});

// filtering table
// select date button
var dateButton = d3.select("#filter-btn-date");

// create a function to handle selection
dateButton.on("click", function() {

    //prevent page from refreshing
    d3.event.preventDefault();

    //select the input element
    var inputElement = d3.select("#datetime");

    //get the actual input
    var inputValue = inputElement.property("value");

    //use the input to filter date
    var ofDate = tableData.filter(function(sighting) {
        return sighting.datetime === inputValue;
    });

    //select the table body
    var tbody = d3.select("tbody");

    //clear the text
    tbody.text("");

    //render the filtered table
    ofDate.forEach((sighting) => {
        var row = tbody.append("tr");

        Object.entries(sighting).forEach(([key, value]) => {
            var entry = row.append("td");
            entry.text(value);
        });
    });
});

//filter by city
var cityButton = d3.select("#filter-btn-city");

// create a function to handle selection
cityButton.on("click", function() {

    //prevent page from refreshing
    d3.event.preventDefault();

    //select the input element
    var inputElement = d3.select("#city");

    //get the actual input
    var inputValue = inputElement.property("value");

    //use the input to filter date
    var ofCity = tableData.filter(function(sighting) {
        return sighting.city === inputValue;
    });

    //select the table body
    var tbody = d3.select("tbody");

    //clear the text
    tbody.text("");

    //render the filtered table
    ofCity.forEach((sighting) => {
        var row = tbody.append("tr");

        Object.entries(sighting).forEach(([key, value]) => {
            var entry = row.append("td");
            entry.text(value);
        });
    });
});

//filter by state
var stateButton = d3.select("#filter-btn-state");

// create a function to handle selection
stateButton.on("click", function() {

    //prevent page from refreshing
    d3.event.preventDefault();

    //select the input element
    var inputElement = d3.select("#state");

    //get the actual input
    var inputValue = inputElement.property("value");

    //use the input to filter date
    var ofState = tableData.filter(function(sighting) {
        return sighting.state === inputValue;
    });

    //select the table body
    var tbody = d3.select("tbody");

    //clear the text
    tbody.text("");

    //render the filtered table
    ofState.forEach((sighting) => {
        var row = tbody.append("tr");

        Object.entries(sighting).forEach(([key, value]) => {
            var entry = row.append("td");
            entry.text(value);
        });
    });
});

//filter by country
var countryButton = d3.select("#filter-btn-country");

// create a function to handle selection
countryButton.on("click", function() {

    //prevent page from refreshing
    d3.event.preventDefault();

    //select the input element
    var inputElement = d3.select("#country");

    //get the actual input
    var inputValue = inputElement.property("value");

    //use the input to filter date
    var ofCountry = tableData.filter(function(sighting) {
        return sighting.country === inputValue;
    });

    //select the table body
    var tbody = d3.select("tbody");

    //clear the text
    tbody.text("");

    //render the filtered table
    ofCountry.forEach((sighting) => {
        var row = tbody.append("tr");

        Object.entries(sighting).forEach(([key, value]) => {
            var entry = row.append("td");
            entry.text(value);
        });
    });
});

//filter by shape
var shapeButton = d3.select("#filter-btn-shape");

// create a function to handle selection
shapeButton.on("click", function() {

    //prevent page from refreshing
    d3.event.preventDefault();

    //select the input element
    var inputElement = d3.select("#shape");

    //get the actual input
    var inputValue = inputElement.property("value");

    //use the input to filter date
    var ofShape = tableData.filter(function(sighting) {
        return sighting.shape === inputValue;
    });

    //select the table body
    var tbody = d3.select("tbody");

    //clear the text
    tbody.text("");

    //render the filtered table
    ofShape.forEach((sighting) => {
        var row = tbody.append("tr");

        Object.entries(sighting).forEach(([key, value]) => {
            var entry = row.append("td");
            entry.text(value);
        });
    });
});

//button to reset table
var resetButton = d3.select("#filter-btn-reload");

//reset function
resetButton.on("click", function() {

    //prevent reload
    d3.event.preventDefault();

    //select table body
    var tbody = d3.select("tbody");

    //clear the text
    tbody.text("");

    //render the original table
    tableData.forEach((sighting) => {
        //get a new row
        var row = tableBody.append("tr");
    
        //add each entry in a separate column
        Object.entries(sighting).forEach(([key, value]) => {
            var entry = row.append("td");
            entry.text(value);
        });
    });
});

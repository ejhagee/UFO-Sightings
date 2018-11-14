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

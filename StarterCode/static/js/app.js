// from data.js
var tableData = data;

tbody = d3.select("tbody")

// write code that appends a table to web and adds new rows of data 
// for each UFO

function displayData(data){
    tbody.text("")
    data.forEach(function(ufoSighting){
        new_tr = tbody.append("tr")
        Object.entries(ufoSighting).forEach(function([key, value]){
            new_td = new_tr.append("td").text(value)
        })
    })
}

displayData(tableData)

// columns to include: date, city, state, country, shape, comment

// listen for events, search through the date/time to find rows that match user input

var dateInput = d3.select("#datetime")
var click = d3.select("filter-btn")

function pressButton(){
    d3.event.preventDefault();
    console.log(dateInput.property("value"));

    // table showing filtered data from user input

    var inputData = tableData.filter(sighting.datetime===dateInput.property("value"))

    displayData(inputData);
}

dateInput.on("change, pressButton")

// YOUR CODE HERE!

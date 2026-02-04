var cityPop = [
	{ 
		city: 'Madison',
		population: 233209
	},
	{
		city: 'Milwaukee',
		population: 594833
	},
	{
		city: 'Green Bay',
		population: 104057
	},
	{
		city: 'Superior',
		population: 27244
	}
];

// This function I added to create the initial table so that it could be modified by the below functions
// This creates city and population columns and then fills in the data from above.
function addTable(cityPop){
    var table = document.createElement('table');
    table.id = 'cityTable';
    var thead = table.createTHead();
    var headerRow = thead.insertRow();
    headerRow.insertCell().outerHTML = '<th>City</th>';
    headerRow.insertCell().outerHTML = '<th>Population</th>';

    var tbody = table.createTBody();
    cityPop.forEach(function(item){
        var row = tbody.insertRow();
        var cellCity = row.insertCell();
        cellCity.textContent = item.city;
        var cellPop = row.insertCell();
        cellPop.textContent = item.population;
    });

    document.body.appendChild(table);
}

// This function adds a new column called City Size that assigns
// a size classifier based on population.
function addColumns(cityPop){
    
    document.querySelectorAll("tr").forEach(function(row, i){

    	if (i == 0){
    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
    	} else {

    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};

			row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
    	};
    });
};

// Add events to table
function addEvents(){

	// This event randomly sets the background color for the table when you move your mouse over it
	document.querySelector("table").addEventListener("mouseover", function()
	{
		var color = "rgb(";

		for (var i=0; i<3; i++){

				var random = Math.round(Math.random() * 255);

				color += random;

				if (i<2){
					color += ",";
				
				} else {
					color += ")";
			};
		}
		document.querySelector("table").style.backgroundColor = color;
	});

	function clickme(){
		alert('Hey, you clicked me!');
	};

	// This event alerts the user when they click the table
	document.querySelector("table").addEventListener("click", clickme)
}
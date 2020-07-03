const searchElement = document.querySelector("input");
let countryList = {};

getCountryList();

const search = () => {
	const value = searchElement.value.toLowerCase().trim();
	const findedCountry = countryList.find(function(item){
	return  item.country.toLowerCase().startsWith(value);
})

if(!findedCountry){
	document.querySelector('div').innerHTML = "NotFound";
} else {
	document.querySelector('div').innerHTML = findedCountry.city;
}

if (findedCountry.country == "Armenia"){
	document.querySelector("img").src = "armenia/flag.jpg";
} else if (findedCountry.country ==  "Russian Federation" ) {
	document.querySelector("img").src = "russia/flag.jpg";
} else {
	document.querySelector("img").src = ""
}
	
}

function getCountryList() {
	fetch("https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-capital-city.json")
	.then(response => response.json())
	.then(json => {
		countryList = json;
	});
}
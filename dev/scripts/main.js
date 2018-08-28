const app = {};

app.apiKeyMapbox = 'pk.eyJ1Ijoiam9uYXRoYW5ob3kiLCJhIjoiY2psOXNtN29tMGVzNDNrbzV6MDdkajZnbyJ9.uM-tD0Q7WPAZUdT_0y9zqg';
app.apiKeyDarkSky = 'aabc3958afb1ab39dcbe55a9d3801b80';

app.createMap = function(lat = 43.6532, lng = -79.3832){
	var mymap = L.map('mapid').setView([lat, lng], 15);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoiam9uYXRoYW5ob3kiLCJhIjoiY2psOXNtN29tMGVzNDNrbzV6MDdkajZnbyJ9.uM-tD0Q7WPAZUdT_0y9zqg', {
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox.streets',
		accessToken: app.apiKeyMapbox
	}).addTo(mymap);
};

app.getWeather = function(lat = 43.6532, lng = -79.3832){
	$.ajax({
		url: `https://api.darksky.net/forecast/${app.apiKeyDarkSky}/${lat},${lng}`,
		dataType: 'JSONP',
		method: 'GET',
	}).then((data) => {
		console.log(data);
	})
}

app.getCoordinates = function(){
	navigator.geolocation.getCurrentPosition(function(position){
		const lat = position.coords.latitude;
		const lng = position.coords.longitude;
		console.log(`Latitude: ${lat}, Longitude: ${lng}`);
		// app.createMap(lat, lng);
		app.getWeather(lat, lng);
		console.log(position)
	});
};


app.init = function(){
	app.getCoordinates();
	// app.getWeather();
};

$(function(){
	app.init();
})
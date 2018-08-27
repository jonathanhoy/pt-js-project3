const app = {};

app.getCoordinates = function(){
	navigator.geolocation.getCurrentPosition(function(position){
		app.createMap(position.coords.latitude, position.coords.longitude);
	})
}

app.createMap = function(lat = 43.6532, lng = -79.3832){
	var mymap = L.map('mapid').setView([lat, lng], 15);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoiam9uYXRoYW5ob3kiLCJhIjoiY2psOXNtN29tMGVzNDNrbzV6MDdkajZnbyJ9.uM-tD0Q7WPAZUdT_0y9zqg', {
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox.streets',
		accessToken: 'pk.eyJ1Ijoiam9uYXRoYW5ob3kiLCJhIjoiY2psOXNtN29tMGVzNDNrbzV6MDdkajZnbyJ9.uM-tD0Q7WPAZUdT_0y9zqg'
	}).addTo(mymap);
};

app.init = function(){
	app.getCoordinates();
	// app.createMap();
}

$(function(){
	app.init();
})
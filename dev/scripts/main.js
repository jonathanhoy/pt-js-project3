const app = {};

app.apiKeyMapbox = 'pk.eyJ1Ijoiam9uYXRoYW5ob3kiLCJhIjoiY2psOXNtN29tMGVzNDNrbzV6MDdkajZnbyJ9.uM-tD0Q7WPAZUdT_0y9zqg';
app.apiKeyDarkSky = 'aabc3958afb1ab39dcbe55a9d3801b80';

app.fetchMap = function(lat = 43.6532, lng = -79.3832){
	var mymap = L.map('mapid').setView([lat, lng], 14);
	var latlng = L.latLng(lat, lng);
	var home = L.marker([lat, lng]).bindPopup('You are here / Starting Point').addTo(mymap);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoiam9uYXRoYW5ob3kiLCJhIjoiY2psOXNtN29tMGVzNDNrbzV6MDdkajZnbyJ9.uM-tD0Q7WPAZUdT_0y9zqg', {
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		minZoom: 13,
		center: latlng,
		id: 'mapbox.streets',
		accessToken: app.apiKeyMapbox
	}).addTo(mymap);

	var c = new L.Control.Coordinates();
	c.addTo(mymap);
	mymap.on('click', function(e) {
		c.setCoordinates(e);
		const endLat = e.latlng.lat;
		const endLng = e.latlng.lng;
		const endRoute = [];
		endRoute.push(endLat, endLng);
		L.Routing.control({
		  waypoints: [
		    L.latLng(lat, lng),
		    L.latLng(endRoute[0], endRoute[1])
		  ]
		}).addTo(mymap);
	});
};

app.fetchWeather = function(lat = 43.6532, lng = -79.3832){
	$.ajax({
		url: `https://api.darksky.net/forecast/${app.apiKeyDarkSky}/${lat},${lng}?units=si`,
		dataType: 'JSONP',
		method: 'GET'
	}).then((data) => {
		console.log(data);
		const timeOfRun = $('#timeOfRun').val();
		const currentTemp = Math.floor(data.currently.temperature);
		const currentFeelsLike = Math.floor(data.currently.apparentTemperature);
		const currentSummary = data.currently.summary;
		const oneHourTemp = Math.floor(data.hourly.data[1].apparentTemperature);
		const oneHourFeelsLike = Math.floor(data.hourly.data[1].temperature);
		const oneHourSummary = data.hourly.data[1].summary;
		const twoHourTemp = Math.floor(data.hourly.data[2].apparentTemperature);
		const twoHourFeelsLike = Math.floor(data.hourly.data[2].temperature);
		const twoHourSummary = data.hourly.data[2].summary;
		const displayTemp = $('.temp span');
		const displayFeelsLike = $('.feelsLike span');
		const displaySummary = $('.summary span');
		if (timeOfRun === 'now') {
			displayTemp.append(currentTemp);
			displayFeelsLike.append(currentFeelsLike);
			displaySummary.append(currentSummary);
		} else if (timeOfRun === '1hour') {
			displayTemp.append(oneHourTemp);
			displayFeelsLike.append(oneHourFeelsLike);
			displaySummary.append(oneHourSummary);
		} else if (timeOfRun === '2hour') {
			displayTemp.append(twoHourTemp);
			displayFeelsLike.append(twoHourFeelsLike);
			displaySummary.append(twoHourSummary);
		};
	});
};

app.fetchCoordinates = function(){
	$('.getInfo').on('click', function(){
		$('.infoDisplay').css('display', 'block');
		navigator.geolocation.getCurrentPosition(function(position){
			const lat = position.coords.latitude;
			const lng = position.coords.longitude;
			console.log(position)
			app.fetchMap(lat, lng);
			app.fetchWeather(lat, lng);
		});
	});
};

app.init = function(){
	app.fetchCoordinates();
};

$(function(){
	app.init();
})
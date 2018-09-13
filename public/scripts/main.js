(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var app = {};

app.apiKeyMapbox = 'pk.eyJ1Ijoiam9uYXRoYW5ob3kiLCJhIjoiY2psOXNtN29tMGVzNDNrbzV6MDdkajZnbyJ9.uM-tD0Q7WPAZUdT_0y9zqg';
app.apiKeyMapQuest = 'WTMeWiTixADSCe9r4PjmwyuXzjighpwk';
app.apiKeyDarkSky = 'aabc3958afb1ab39dcbe55a9d3801b80';

app.fetchMap = function () {
	var lat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 43.6532;
	var lng = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -79.3832;

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

	var endRoute = [];

	$('.setRoute').on('click', function () {
		L.Routing.control({
			waypoints: [L.latLng(lat, lng), L.latLng(endRoute[0], endRoute[1]) // these co-ords need to be grabbed from another function?
			]
		}).addTo(mymap);
	});

	$('.clear').on('click', function () {
		L.Routing.control().removeFrom(mymap);
	});

	var c = new L.Control.Coordinates();
	c.addTo(mymap);
	mymap.on('click', function (e) {
		c.setCoordinates(e);
		var endLat = e.latlng.lat;
		var endLng = e.latlng.lng;
		console.log(e);
		console.log(endLat, endLng);
		endRoute.push(endLat);
		endRoute.push(endLng);
		console.log(endRoute);
	});
};

app.fetchWeather = function () {
	var lat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 43.6532;
	var lng = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -79.3832;

	$.ajax({
		url: 'https://api.darksky.net/forecast/' + app.apiKeyDarkSky + '/' + lat + ',' + lng + '?units=si',
		dataType: 'JSONP',
		method: 'GET'
	}).then(function (data) {
		console.log(data);
		var currentTemp = Math.floor(data.currently.temperature);
		var currentFeelsLike = Math.floor(data.currently.apparentTemperature);
		var degrees = '&deg;C';
		$('.currentTemp span').append(currentTemp + ' ' + degrees);
		$('.currentFeelsLike span').append(currentFeelsLike + ' ' + degrees);
	});
};

app.fetchCoordinates = function () {
	navigator.geolocation.getCurrentPosition(function (position) {
		var lat = position.coords.latitude;
		var lng = position.coords.longitude;
		console.log(position);
		app.fetchMap(lat, lng);
		app.fetchWeather(lat, lng);
	});
};

app.init = function () {
	app.fetchCoordinates();
};

$(function () {
	app.init();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFNLE1BQU0sRUFBWjs7QUFFQSxJQUFJLFlBQUosR0FBbUIsZ0dBQW5CO0FBQ0EsSUFBSSxjQUFKLEdBQXFCLGtDQUFyQjtBQUNBLElBQUksYUFBSixHQUFvQixrQ0FBcEI7O0FBRUEsSUFBSSxRQUFKLEdBQWUsWUFBdUM7QUFBQSxLQUE5QixHQUE4Qix1RUFBeEIsT0FBd0I7QUFBQSxLQUFmLEdBQWUsdUVBQVQsQ0FBQyxPQUFROztBQUNyRCxLQUFJLFFBQVEsRUFBRSxHQUFGLENBQU0sT0FBTixFQUFlLE9BQWYsQ0FBdUIsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUF2QixFQUFtQyxFQUFuQyxDQUFaO0FBQ0EsS0FBSSxTQUFTLEVBQUUsTUFBRixDQUFTLEdBQVQsRUFBYyxHQUFkLENBQWI7QUFDQSxLQUFJLE9BQU8sRUFBRSxNQUFGLENBQVMsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFULEVBQXFCLFNBQXJCLENBQStCLCtCQUEvQixFQUFnRSxLQUFoRSxDQUFzRSxLQUF0RSxDQUFYO0FBQ0EsR0FBRSxTQUFGLENBQVksa0tBQVosRUFBZ0w7QUFDL0ssZUFBYSx5TkFEa0s7QUFFL0ssV0FBUyxFQUZzSztBQUcvSyxXQUFTLEVBSHNLO0FBSS9LLFVBQVEsTUFKdUs7QUFLL0ssTUFBSSxnQkFMMks7QUFNL0ssZUFBYSxJQUFJO0FBTjhKLEVBQWhMLEVBT0csS0FQSCxDQU9TLEtBUFQ7O0FBU0EsS0FBTSxXQUFXLEVBQWpCOztBQUVBLEdBQUUsV0FBRixFQUFlLEVBQWYsQ0FBa0IsT0FBbEIsRUFBMkIsWUFBVTtBQUNwQyxJQUFFLE9BQUYsQ0FBVSxPQUFWLENBQWtCO0FBQ2hCLGNBQVcsQ0FDVCxFQUFFLE1BQUYsQ0FBUyxHQUFULEVBQWMsR0FBZCxDQURTLEVBRVQsRUFBRSxNQUFGLENBQVMsU0FBUyxDQUFULENBQVQsRUFBc0IsU0FBUyxDQUFULENBQXRCLENBRlMsQ0FFMEI7QUFGMUI7QUFESyxHQUFsQixFQUtHLEtBTEgsQ0FLUyxLQUxUO0FBTUEsRUFQRDs7QUFTQSxHQUFFLFFBQUYsRUFBWSxFQUFaLENBQWUsT0FBZixFQUF3QixZQUFVO0FBQ2pDLElBQUUsT0FBRixDQUFVLE9BQVYsR0FBb0IsVUFBcEIsQ0FBK0IsS0FBL0I7QUFDQSxFQUZEOztBQUlBLEtBQUksSUFBSSxJQUFJLEVBQUUsT0FBRixDQUFVLFdBQWQsRUFBUjtBQUNBLEdBQUUsS0FBRixDQUFRLEtBQVI7QUFDQSxPQUFNLEVBQU4sQ0FBUyxPQUFULEVBQWtCLFVBQVMsQ0FBVCxFQUFZO0FBQzdCLElBQUUsY0FBRixDQUFpQixDQUFqQjtBQUNBLE1BQU0sU0FBUyxFQUFFLE1BQUYsQ0FBUyxHQUF4QjtBQUNBLE1BQU0sU0FBUyxFQUFFLE1BQUYsQ0FBUyxHQUF4QjtBQUNBLFVBQVEsR0FBUixDQUFZLENBQVo7QUFDQSxVQUFRLEdBQVIsQ0FBWSxNQUFaLEVBQW9CLE1BQXBCO0FBQ0EsV0FBUyxJQUFULENBQWMsTUFBZDtBQUNBLFdBQVMsSUFBVCxDQUFjLE1BQWQ7QUFDQSxVQUFRLEdBQVIsQ0FBWSxRQUFaO0FBRUEsRUFWRDtBQVdBLENBekNEOztBQTJDQSxJQUFJLFlBQUosR0FBbUIsWUFBdUM7QUFBQSxLQUE5QixHQUE4Qix1RUFBeEIsT0FBd0I7QUFBQSxLQUFmLEdBQWUsdUVBQVQsQ0FBQyxPQUFROztBQUN6RCxHQUFFLElBQUYsQ0FBTztBQUNOLDZDQUF5QyxJQUFJLGFBQTdDLFNBQThELEdBQTlELFNBQXFFLEdBQXJFLGNBRE07QUFFTixZQUFVLE9BRko7QUFHTixVQUFRO0FBSEYsRUFBUCxFQUlHLElBSkgsQ0FJUSxVQUFDLElBQUQsRUFBVTtBQUNqQixVQUFRLEdBQVIsQ0FBWSxJQUFaO0FBQ0EsTUFBTSxjQUFjLEtBQUssS0FBTCxDQUFXLEtBQUssU0FBTCxDQUFlLFdBQTFCLENBQXBCO0FBQ0EsTUFBTSxtQkFBbUIsS0FBSyxLQUFMLENBQVcsS0FBSyxTQUFMLENBQWUsbUJBQTFCLENBQXpCO0FBQ0EsTUFBTSxVQUFVLFFBQWhCO0FBQ0EsSUFBRSxtQkFBRixFQUF1QixNQUF2QixDQUFpQyxXQUFqQyxTQUFnRCxPQUFoRDtBQUNBLElBQUUsd0JBQUYsRUFBNEIsTUFBNUIsQ0FBc0MsZ0JBQXRDLFNBQTBELE9BQTFEO0FBQ0EsRUFYRDtBQVlBLENBYkQ7O0FBZUEsSUFBSSxnQkFBSixHQUF1QixZQUFVO0FBQ2hDLFdBQVUsV0FBVixDQUFzQixrQkFBdEIsQ0FBeUMsVUFBUyxRQUFULEVBQWtCO0FBQzFELE1BQU0sTUFBTSxTQUFTLE1BQVQsQ0FBZ0IsUUFBNUI7QUFDQSxNQUFNLE1BQU0sU0FBUyxNQUFULENBQWdCLFNBQTVCO0FBQ0EsVUFBUSxHQUFSLENBQVksUUFBWjtBQUNBLE1BQUksUUFBSixDQUFhLEdBQWIsRUFBa0IsR0FBbEI7QUFDQSxNQUFJLFlBQUosQ0FBaUIsR0FBakIsRUFBc0IsR0FBdEI7QUFDQSxFQU5EO0FBT0EsQ0FSRDs7QUFVQSxJQUFJLElBQUosR0FBVyxZQUFVO0FBQ3BCLEtBQUksZ0JBQUo7QUFDQSxDQUZEOztBQUlBLEVBQUUsWUFBVTtBQUNYLEtBQUksSUFBSjtBQUNBLENBRkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBhcHAgPSB7fTtcblxuYXBwLmFwaUtleU1hcGJveCA9ICdway5leUoxSWpvaWFtOXVZWFJvWVc1b2Iza2lMQ0poSWpvaVkycHNPWE50TjI5dE1HVnpORE5yYnpWNk1EZGthalpuYnlKOS51TS10RDBRN1dQQVpVZFRfMHk5enFnJztcbmFwcC5hcGlLZXlNYXBRdWVzdCA9ICdXVE1lV2lUaXhBRFNDZTlyNFBqbXd5dVh6amlnaHB3ayc7XG5hcHAuYXBpS2V5RGFya1NreSA9ICdhYWJjMzk1OGFmYjFhYjM5ZGNiZTU1YTlkMzgwMWI4MCc7XG5cbmFwcC5mZXRjaE1hcCA9IGZ1bmN0aW9uKGxhdCA9IDQzLjY1MzIsIGxuZyA9IC03OS4zODMyKXtcblx0dmFyIG15bWFwID0gTC5tYXAoJ21hcGlkJykuc2V0VmlldyhbbGF0LCBsbmddLCAxNCk7XG5cdHZhciBsYXRsbmcgPSBMLmxhdExuZyhsYXQsIGxuZyk7XG5cdHZhciBob21lID0gTC5tYXJrZXIoW2xhdCwgbG5nXSkuYmluZFBvcHVwKCdZb3UgYXJlIGhlcmUgLyBTdGFydGluZyBQb2ludCcpLmFkZFRvKG15bWFwKTtcblx0TC50aWxlTGF5ZXIoJ2h0dHBzOi8vYXBpLnRpbGVzLm1hcGJveC5jb20vdjQve2lkfS97en0ve3h9L3t5fS5wbmc/YWNjZXNzX3Rva2VuPXBrLmV5SjFJam9pYW05dVlYUm9ZVzVvYjNraUxDSmhJam9pWTJwc09YTnROMjl0TUdWek5ETnJielY2TURka2FqWm5ieUo5LnVNLXREMFE3V1BBWlVkVF8weTl6cWcnLCB7XG5cdFx0YXR0cmlidXRpb246ICdNYXAgZGF0YSAmY29weTsgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnL1wiPk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9ycywgPGEgaHJlZj1cImh0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1zYS8yLjAvXCI+Q0MtQlktU0E8L2E+LCBJbWFnZXJ5IMKpIDxhIGhyZWY9XCJodHRwczovL3d3dy5tYXBib3guY29tL1wiPk1hcGJveDwvYT4nLFxuXHRcdG1heFpvb206IDE4LFxuXHRcdG1pblpvb206IDEzLFxuXHRcdGNlbnRlcjogbGF0bG5nLFxuXHRcdGlkOiAnbWFwYm94LnN0cmVldHMnLFxuXHRcdGFjY2Vzc1Rva2VuOiBhcHAuYXBpS2V5TWFwYm94XG5cdH0pLmFkZFRvKG15bWFwKTtcblxuXHRjb25zdCBlbmRSb3V0ZSA9IFtdO1xuXG5cdCQoJy5zZXRSb3V0ZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0TC5Sb3V0aW5nLmNvbnRyb2woe1xuXHRcdCAgd2F5cG9pbnRzOiBbXG5cdFx0ICAgIEwubGF0TG5nKGxhdCwgbG5nKSxcblx0XHQgICAgTC5sYXRMbmcoZW5kUm91dGVbMF0sIGVuZFJvdXRlWzFdKSAvLyB0aGVzZSBjby1vcmRzIG5lZWQgdG8gYmUgZ3JhYmJlZCBmcm9tIGFub3RoZXIgZnVuY3Rpb24/XG5cdFx0ICBdXG5cdFx0fSkuYWRkVG8obXltYXApO1xuXHR9KTtcblxuXHQkKCcuY2xlYXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdEwuUm91dGluZy5jb250cm9sKCkucmVtb3ZlRnJvbShteW1hcCk7XG5cdH0pO1xuXG5cdHZhciBjID0gbmV3IEwuQ29udHJvbC5Db29yZGluYXRlcygpO1xuXHRjLmFkZFRvKG15bWFwKTtcblx0bXltYXAub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdGMuc2V0Q29vcmRpbmF0ZXMoZSk7XG5cdFx0Y29uc3QgZW5kTGF0ID0gZS5sYXRsbmcubGF0O1xuXHRcdGNvbnN0IGVuZExuZyA9IGUubGF0bG5nLmxuZztcblx0XHRjb25zb2xlLmxvZyhlKTtcblx0XHRjb25zb2xlLmxvZyhlbmRMYXQsIGVuZExuZyk7XG5cdFx0ZW5kUm91dGUucHVzaChlbmRMYXQpO1xuXHRcdGVuZFJvdXRlLnB1c2goZW5kTG5nKTtcblx0XHRjb25zb2xlLmxvZyhlbmRSb3V0ZSk7XG5cblx0fSk7XHRcbn07XG5cbmFwcC5mZXRjaFdlYXRoZXIgPSBmdW5jdGlvbihsYXQgPSA0My42NTMyLCBsbmcgPSAtNzkuMzgzMil7XG5cdCQuYWpheCh7XG5cdFx0dXJsOiBgaHR0cHM6Ly9hcGkuZGFya3NreS5uZXQvZm9yZWNhc3QvJHthcHAuYXBpS2V5RGFya1NreX0vJHtsYXR9LCR7bG5nfT91bml0cz1zaWAsXG5cdFx0ZGF0YVR5cGU6ICdKU09OUCcsXG5cdFx0bWV0aG9kOiAnR0VUJ1xuXHR9KS50aGVuKChkYXRhKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XG5cdFx0Y29uc3QgY3VycmVudFRlbXAgPSBNYXRoLmZsb29yKGRhdGEuY3VycmVudGx5LnRlbXBlcmF0dXJlKTtcblx0XHRjb25zdCBjdXJyZW50RmVlbHNMaWtlID0gTWF0aC5mbG9vcihkYXRhLmN1cnJlbnRseS5hcHBhcmVudFRlbXBlcmF0dXJlKTtcblx0XHRjb25zdCBkZWdyZWVzID0gJyZkZWc7Qyc7XG5cdFx0JCgnLmN1cnJlbnRUZW1wIHNwYW4nKS5hcHBlbmQoYCR7Y3VycmVudFRlbXB9ICR7ZGVncmVlc31gKTtcblx0XHQkKCcuY3VycmVudEZlZWxzTGlrZSBzcGFuJykuYXBwZW5kKGAke2N1cnJlbnRGZWVsc0xpa2V9ICR7ZGVncmVlc31gKTtcblx0fSk7XG59O1xuXG5hcHAuZmV0Y2hDb29yZGluYXRlcyA9IGZ1bmN0aW9uKCl7XG5cdG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oZnVuY3Rpb24ocG9zaXRpb24pe1xuXHRcdGNvbnN0IGxhdCA9IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZTtcblx0XHRjb25zdCBsbmcgPSBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlO1xuXHRcdGNvbnNvbGUubG9nKHBvc2l0aW9uKVxuXHRcdGFwcC5mZXRjaE1hcChsYXQsIGxuZyk7XG5cdFx0YXBwLmZldGNoV2VhdGhlcihsYXQsIGxuZyk7XG5cdH0pO1xufTtcblxuYXBwLmluaXQgPSBmdW5jdGlvbigpe1xuXHRhcHAuZmV0Y2hDb29yZGluYXRlcygpO1xufTtcblxuJChmdW5jdGlvbigpe1xuXHRhcHAuaW5pdCgpO1xufSkiXX0=

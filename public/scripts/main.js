(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var app = {};

app.apiKeyMapbox = 'pk.eyJ1Ijoiam9uYXRoYW5ob3kiLCJhIjoiY2psOXNtN29tMGVzNDNrbzV6MDdkajZnbyJ9.uM-tD0Q7WPAZUdT_0y9zqg';
app.apiKeyDarkSky = 'aabc3958afb1ab39dcbe55a9d3801b80';

app.createMap = function () {
	var lat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 43.6532;
	var lng = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -79.3832;

	var mymap = L.map('mapid').setView([lat, lng], 15);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoiam9uYXRoYW5ob3kiLCJhIjoiY2psOXNtN29tMGVzNDNrbzV6MDdkajZnbyJ9.uM-tD0Q7WPAZUdT_0y9zqg', {
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox.streets',
		accessToken: app.apiKeyMapbox
	}).addTo(mymap);
};

app.getWeather = function () {
	var lat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 43.6532;
	var lng = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -79.3832;

	$.ajax({
		url: 'https://api.darksky.net/forecast/' + app.apiKeyDarkSky + '/' + lat + ',' + lng,
		dataType: 'JSONP',
		method: 'GET'
	}).then(function (data) {
		console.log(data);
	});
};

app.getCoordinates = function () {
	navigator.geolocation.getCurrentPosition(function (position) {
		var lat = position.coords.latitude;
		var lng = position.coords.longitude;
		console.log('Latitude: ' + lat + ', Longitude: ' + lng);
		// app.createMap(lat, lng);
		app.getWeather(lat, lng);
		console.log(position);
	});
};

app.init = function () {
	app.getCoordinates();
	// app.getWeather();
};

$(function () {
	app.init();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFNLE1BQU0sRUFBWjs7QUFFQSxJQUFJLFlBQUosR0FBbUIsZ0dBQW5CO0FBQ0EsSUFBSSxhQUFKLEdBQW9CLGtDQUFwQjs7QUFFQSxJQUFJLFNBQUosR0FBZ0IsWUFBdUM7QUFBQSxLQUE5QixHQUE4Qix1RUFBeEIsT0FBd0I7QUFBQSxLQUFmLEdBQWUsdUVBQVQsQ0FBQyxPQUFROztBQUN0RCxLQUFJLFFBQVEsRUFBRSxHQUFGLENBQU0sT0FBTixFQUFlLE9BQWYsQ0FBdUIsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUF2QixFQUFtQyxFQUFuQyxDQUFaO0FBQ0EsR0FBRSxTQUFGLENBQVksa0tBQVosRUFBZ0w7QUFDL0ssZUFBYSx5TkFEa0s7QUFFL0ssV0FBUyxFQUZzSztBQUcvSyxNQUFJLGdCQUgySztBQUkvSyxlQUFhLElBQUk7QUFKOEosRUFBaEwsRUFLRyxLQUxILENBS1MsS0FMVDtBQU1BLENBUkQ7O0FBVUEsSUFBSSxVQUFKLEdBQWlCLFlBQXVDO0FBQUEsS0FBOUIsR0FBOEIsdUVBQXhCLE9BQXdCO0FBQUEsS0FBZixHQUFlLHVFQUFULENBQUMsT0FBUTs7QUFDdkQsR0FBRSxJQUFGLENBQU87QUFDTiw2Q0FBeUMsSUFBSSxhQUE3QyxTQUE4RCxHQUE5RCxTQUFxRSxHQUQvRDtBQUVOLFlBQVUsT0FGSjtBQUdOLFVBQVE7QUFIRixFQUFQLEVBSUcsSUFKSCxDQUlRLFVBQUMsSUFBRCxFQUFVO0FBQ2pCLFVBQVEsR0FBUixDQUFZLElBQVo7QUFDQSxFQU5EO0FBT0EsQ0FSRDs7QUFVQSxJQUFJLGNBQUosR0FBcUIsWUFBVTtBQUM5QixXQUFVLFdBQVYsQ0FBc0Isa0JBQXRCLENBQXlDLFVBQVMsUUFBVCxFQUFrQjtBQUMxRCxNQUFNLE1BQU0sU0FBUyxNQUFULENBQWdCLFFBQTVCO0FBQ0EsTUFBTSxNQUFNLFNBQVMsTUFBVCxDQUFnQixTQUE1QjtBQUNBLFVBQVEsR0FBUixnQkFBeUIsR0FBekIscUJBQTRDLEdBQTVDO0FBQ0E7QUFDQSxNQUFJLFVBQUosQ0FBZSxHQUFmLEVBQW9CLEdBQXBCO0FBQ0EsVUFBUSxHQUFSLENBQVksUUFBWjtBQUNBLEVBUEQ7QUFRQSxDQVREOztBQVlBLElBQUksSUFBSixHQUFXLFlBQVU7QUFDcEIsS0FBSSxjQUFKO0FBQ0E7QUFDQSxDQUhEOztBQUtBLEVBQUUsWUFBVTtBQUNYLEtBQUksSUFBSjtBQUNBLENBRkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBhcHAgPSB7fTtcblxuYXBwLmFwaUtleU1hcGJveCA9ICdway5leUoxSWpvaWFtOXVZWFJvWVc1b2Iza2lMQ0poSWpvaVkycHNPWE50TjI5dE1HVnpORE5yYnpWNk1EZGthalpuYnlKOS51TS10RDBRN1dQQVpVZFRfMHk5enFnJztcbmFwcC5hcGlLZXlEYXJrU2t5ID0gJ2FhYmMzOTU4YWZiMWFiMzlkY2JlNTVhOWQzODAxYjgwJztcblxuYXBwLmNyZWF0ZU1hcCA9IGZ1bmN0aW9uKGxhdCA9IDQzLjY1MzIsIGxuZyA9IC03OS4zODMyKXtcblx0dmFyIG15bWFwID0gTC5tYXAoJ21hcGlkJykuc2V0VmlldyhbbGF0LCBsbmddLCAxNSk7XG5cdEwudGlsZUxheWVyKCdodHRwczovL2FwaS50aWxlcy5tYXBib3guY29tL3Y0L3tpZH0ve3p9L3t4fS97eX0ucG5nP2FjY2Vzc190b2tlbj1way5leUoxSWpvaWFtOXVZWFJvWVc1b2Iza2lMQ0poSWpvaVkycHNPWE50TjI5dE1HVnpORE5yYnpWNk1EZGthalpuYnlKOS51TS10RDBRN1dQQVpVZFRfMHk5enFnJywge1xuXHRcdGF0dHJpYnV0aW9uOiAnTWFwIGRhdGEgJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9cIj5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMsIDxhIGhyZWY9XCJodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvMi4wL1wiPkNDLUJZLVNBPC9hPiwgSW1hZ2VyeSDCqSA8YSBocmVmPVwiaHR0cHM6Ly93d3cubWFwYm94LmNvbS9cIj5NYXBib3g8L2E+Jyxcblx0XHRtYXhab29tOiAxOCxcblx0XHRpZDogJ21hcGJveC5zdHJlZXRzJyxcblx0XHRhY2Nlc3NUb2tlbjogYXBwLmFwaUtleU1hcGJveFxuXHR9KS5hZGRUbyhteW1hcCk7XG59O1xuXG5hcHAuZ2V0V2VhdGhlciA9IGZ1bmN0aW9uKGxhdCA9IDQzLjY1MzIsIGxuZyA9IC03OS4zODMyKXtcblx0JC5hamF4KHtcblx0XHR1cmw6IGBodHRwczovL2FwaS5kYXJrc2t5Lm5ldC9mb3JlY2FzdC8ke2FwcC5hcGlLZXlEYXJrU2t5fS8ke2xhdH0sJHtsbmd9YCxcblx0XHRkYXRhVHlwZTogJ0pTT05QJyxcblx0XHRtZXRob2Q6ICdHRVQnLFxuXHR9KS50aGVuKChkYXRhKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XG5cdH0pXG59XG5cbmFwcC5nZXRDb29yZGluYXRlcyA9IGZ1bmN0aW9uKCl7XG5cdG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oZnVuY3Rpb24ocG9zaXRpb24pe1xuXHRcdGNvbnN0IGxhdCA9IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZTtcblx0XHRjb25zdCBsbmcgPSBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlO1xuXHRcdGNvbnNvbGUubG9nKGBMYXRpdHVkZTogJHtsYXR9LCBMb25naXR1ZGU6ICR7bG5nfWApO1xuXHRcdC8vIGFwcC5jcmVhdGVNYXAobGF0LCBsbmcpO1xuXHRcdGFwcC5nZXRXZWF0aGVyKGxhdCwgbG5nKTtcblx0XHRjb25zb2xlLmxvZyhwb3NpdGlvbilcblx0fSk7XG59O1xuXG5cbmFwcC5pbml0ID0gZnVuY3Rpb24oKXtcblx0YXBwLmdldENvb3JkaW5hdGVzKCk7XG5cdC8vIGFwcC5nZXRXZWF0aGVyKCk7XG59O1xuXG4kKGZ1bmN0aW9uKCl7XG5cdGFwcC5pbml0KCk7XG59KSJdfQ==

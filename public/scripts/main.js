(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var app = {};

app.getCoordinates = function () {
	navigator.geolocation.getCurrentPosition(function (position) {
		app.createMap(position.coords.latitude, position.coords.longitude);
	});
};

app.createMap = function () {
	var lat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 43.6532;
	var lng = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -79.3832;

	var mymap = L.map('mapid').setView([lat, lng], 15);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoiam9uYXRoYW5ob3kiLCJhIjoiY2psOXNtN29tMGVzNDNrbzV6MDdkajZnbyJ9.uM-tD0Q7WPAZUdT_0y9zqg', {
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox.streets',
		accessToken: 'pk.eyJ1Ijoiam9uYXRoYW5ob3kiLCJhIjoiY2psOXNtN29tMGVzNDNrbzV6MDdkajZnbyJ9.uM-tD0Q7WPAZUdT_0y9zqg'
	}).addTo(mymap);
};

app.init = function () {
	app.getCoordinates();
	// app.createMap();
};

$(function () {
	app.init();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFNLE1BQU0sRUFBWjs7QUFFQSxJQUFJLGNBQUosR0FBcUIsWUFBVTtBQUM5QixXQUFVLFdBQVYsQ0FBc0Isa0JBQXRCLENBQXlDLFVBQVMsUUFBVCxFQUFrQjtBQUMxRCxNQUFJLFNBQUosQ0FBYyxTQUFTLE1BQVQsQ0FBZ0IsUUFBOUIsRUFBd0MsU0FBUyxNQUFULENBQWdCLFNBQXhEO0FBQ0EsRUFGRDtBQUdBLENBSkQ7O0FBTUEsSUFBSSxTQUFKLEdBQWdCLFlBQXVDO0FBQUEsS0FBOUIsR0FBOEIsdUVBQXhCLE9BQXdCO0FBQUEsS0FBZixHQUFlLHVFQUFULENBQUMsT0FBUTs7QUFDdEQsS0FBSSxRQUFRLEVBQUUsR0FBRixDQUFNLE9BQU4sRUFBZSxPQUFmLENBQXVCLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBdkIsRUFBbUMsRUFBbkMsQ0FBWjtBQUNBLEdBQUUsU0FBRixDQUFZLGtLQUFaLEVBQWdMO0FBQy9LLGVBQWEseU5BRGtLO0FBRS9LLFdBQVMsRUFGc0s7QUFHL0ssTUFBSSxnQkFIMks7QUFJL0ssZUFBYTtBQUprSyxFQUFoTCxFQUtHLEtBTEgsQ0FLUyxLQUxUO0FBTUEsQ0FSRDs7QUFVQSxJQUFJLElBQUosR0FBVyxZQUFVO0FBQ3BCLEtBQUksY0FBSjtBQUNBO0FBQ0EsQ0FIRDs7QUFLQSxFQUFFLFlBQVU7QUFDWCxLQUFJLElBQUo7QUFDQSxDQUZEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgYXBwID0ge307XG5cbmFwcC5nZXRDb29yZGluYXRlcyA9IGZ1bmN0aW9uKCl7XG5cdG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oZnVuY3Rpb24ocG9zaXRpb24pe1xuXHRcdGFwcC5jcmVhdGVNYXAocG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLCBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlKTtcblx0fSlcbn1cblxuYXBwLmNyZWF0ZU1hcCA9IGZ1bmN0aW9uKGxhdCA9IDQzLjY1MzIsIGxuZyA9IC03OS4zODMyKXtcblx0dmFyIG15bWFwID0gTC5tYXAoJ21hcGlkJykuc2V0VmlldyhbbGF0LCBsbmddLCAxNSk7XG5cdEwudGlsZUxheWVyKCdodHRwczovL2FwaS50aWxlcy5tYXBib3guY29tL3Y0L3tpZH0ve3p9L3t4fS97eX0ucG5nP2FjY2Vzc190b2tlbj1way5leUoxSWpvaWFtOXVZWFJvWVc1b2Iza2lMQ0poSWpvaVkycHNPWE50TjI5dE1HVnpORE5yYnpWNk1EZGthalpuYnlKOS51TS10RDBRN1dQQVpVZFRfMHk5enFnJywge1xuXHRcdGF0dHJpYnV0aW9uOiAnTWFwIGRhdGEgJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9cIj5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMsIDxhIGhyZWY9XCJodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvMi4wL1wiPkNDLUJZLVNBPC9hPiwgSW1hZ2VyeSDCqSA8YSBocmVmPVwiaHR0cHM6Ly93d3cubWFwYm94LmNvbS9cIj5NYXBib3g8L2E+Jyxcblx0XHRtYXhab29tOiAxOCxcblx0XHRpZDogJ21hcGJveC5zdHJlZXRzJyxcblx0XHRhY2Nlc3NUb2tlbjogJ3BrLmV5SjFJam9pYW05dVlYUm9ZVzVvYjNraUxDSmhJam9pWTJwc09YTnROMjl0TUdWek5ETnJielY2TURka2FqWm5ieUo5LnVNLXREMFE3V1BBWlVkVF8weTl6cWcnXG5cdH0pLmFkZFRvKG15bWFwKTtcbn07XG5cbmFwcC5pbml0ID0gZnVuY3Rpb24oKXtcblx0YXBwLmdldENvb3JkaW5hdGVzKCk7XG5cdC8vIGFwcC5jcmVhdGVNYXAoKTtcbn1cblxuJChmdW5jdGlvbigpe1xuXHRhcHAuaW5pdCgpO1xufSkiXX0=

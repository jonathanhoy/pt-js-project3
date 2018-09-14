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

	var c = new L.Control.Coordinates();
	c.addTo(mymap);
	mymap.on('click', function (e) {
		c.setCoordinates(e);
		var endLat = e.latlng.lat;
		var endLng = e.latlng.lng;
		var endRoute = [];
		endRoute.push(endLat);
		endRoute.push(endLng);
		console.log(endRoute);
		L.Routing.control({
			waypoints: [L.latLng(lat, lng), L.latLng(endRoute[0], endRoute[1])]
		}).addTo(mymap);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFNLE1BQU0sRUFBWjs7QUFFQSxJQUFJLFlBQUosR0FBbUIsZ0dBQW5CO0FBQ0EsSUFBSSxjQUFKLEdBQXFCLGtDQUFyQjtBQUNBLElBQUksYUFBSixHQUFvQixrQ0FBcEI7O0FBRUEsSUFBSSxRQUFKLEdBQWUsWUFBdUM7QUFBQSxLQUE5QixHQUE4Qix1RUFBeEIsT0FBd0I7QUFBQSxLQUFmLEdBQWUsdUVBQVQsQ0FBQyxPQUFROztBQUNyRCxLQUFJLFFBQVEsRUFBRSxHQUFGLENBQU0sT0FBTixFQUFlLE9BQWYsQ0FBdUIsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUF2QixFQUFtQyxFQUFuQyxDQUFaO0FBQ0EsS0FBSSxTQUFTLEVBQUUsTUFBRixDQUFTLEdBQVQsRUFBYyxHQUFkLENBQWI7QUFDQSxLQUFJLE9BQU8sRUFBRSxNQUFGLENBQVMsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFULEVBQXFCLFNBQXJCLENBQStCLCtCQUEvQixFQUFnRSxLQUFoRSxDQUFzRSxLQUF0RSxDQUFYO0FBQ0EsR0FBRSxTQUFGLENBQVksa0tBQVosRUFBZ0w7QUFDL0ssZUFBYSx5TkFEa0s7QUFFL0ssV0FBUyxFQUZzSztBQUcvSyxXQUFTLEVBSHNLO0FBSS9LLFVBQVEsTUFKdUs7QUFLL0ssTUFBSSxnQkFMMks7QUFNL0ssZUFBYSxJQUFJO0FBTjhKLEVBQWhMLEVBT0csS0FQSCxDQU9TLEtBUFQ7O0FBU0EsS0FBSSxJQUFJLElBQUksRUFBRSxPQUFGLENBQVUsV0FBZCxFQUFSO0FBQ0EsR0FBRSxLQUFGLENBQVEsS0FBUjtBQUNBLE9BQU0sRUFBTixDQUFTLE9BQVQsRUFBa0IsVUFBUyxDQUFULEVBQVk7QUFDN0IsSUFBRSxjQUFGLENBQWlCLENBQWpCO0FBQ0EsTUFBTSxTQUFTLEVBQUUsTUFBRixDQUFTLEdBQXhCO0FBQ0EsTUFBTSxTQUFTLEVBQUUsTUFBRixDQUFTLEdBQXhCO0FBQ0EsTUFBTSxXQUFXLEVBQWpCO0FBQ0EsV0FBUyxJQUFULENBQWMsTUFBZDtBQUNBLFdBQVMsSUFBVCxDQUFjLE1BQWQ7QUFDQSxVQUFRLEdBQVIsQ0FBWSxRQUFaO0FBQ0EsSUFBRSxPQUFGLENBQVUsT0FBVixDQUFrQjtBQUNoQixjQUFXLENBQ1QsRUFBRSxNQUFGLENBQVMsR0FBVCxFQUFjLEdBQWQsQ0FEUyxFQUVULEVBQUUsTUFBRixDQUFTLFNBQVMsQ0FBVCxDQUFULEVBQXNCLFNBQVMsQ0FBVCxDQUF0QixDQUZTO0FBREssR0FBbEIsRUFLRyxLQUxILENBS1MsS0FMVDtBQU1BLEVBZEQ7QUFlQSxDQTlCRDs7QUFnQ0EsSUFBSSxZQUFKLEdBQW1CLFlBQXVDO0FBQUEsS0FBOUIsR0FBOEIsdUVBQXhCLE9BQXdCO0FBQUEsS0FBZixHQUFlLHVFQUFULENBQUMsT0FBUTs7QUFDekQsR0FBRSxJQUFGLENBQU87QUFDTiw2Q0FBeUMsSUFBSSxhQUE3QyxTQUE4RCxHQUE5RCxTQUFxRSxHQUFyRSxjQURNO0FBRU4sWUFBVSxPQUZKO0FBR04sVUFBUTtBQUhGLEVBQVAsRUFJRyxJQUpILENBSVEsVUFBQyxJQUFELEVBQVU7QUFDakIsVUFBUSxHQUFSLENBQVksSUFBWjtBQUNBLE1BQU0sY0FBYyxLQUFLLEtBQUwsQ0FBVyxLQUFLLFNBQUwsQ0FBZSxXQUExQixDQUFwQjtBQUNBLE1BQU0sbUJBQW1CLEtBQUssS0FBTCxDQUFXLEtBQUssU0FBTCxDQUFlLG1CQUExQixDQUF6QjtBQUNBLE1BQU0sVUFBVSxRQUFoQjtBQUNBLElBQUUsbUJBQUYsRUFBdUIsTUFBdkIsQ0FBaUMsV0FBakMsU0FBZ0QsT0FBaEQ7QUFDQSxJQUFFLHdCQUFGLEVBQTRCLE1BQTVCLENBQXNDLGdCQUF0QyxTQUEwRCxPQUExRDtBQUNBLEVBWEQ7QUFZQSxDQWJEOztBQWVBLElBQUksZ0JBQUosR0FBdUIsWUFBVTtBQUNoQyxXQUFVLFdBQVYsQ0FBc0Isa0JBQXRCLENBQXlDLFVBQVMsUUFBVCxFQUFrQjtBQUMxRCxNQUFNLE1BQU0sU0FBUyxNQUFULENBQWdCLFFBQTVCO0FBQ0EsTUFBTSxNQUFNLFNBQVMsTUFBVCxDQUFnQixTQUE1QjtBQUNBLFVBQVEsR0FBUixDQUFZLFFBQVo7QUFDQSxNQUFJLFFBQUosQ0FBYSxHQUFiLEVBQWtCLEdBQWxCO0FBQ0EsTUFBSSxZQUFKLENBQWlCLEdBQWpCLEVBQXNCLEdBQXRCO0FBQ0EsRUFORDtBQU9BLENBUkQ7O0FBVUEsSUFBSSxJQUFKLEdBQVcsWUFBVTtBQUNwQixLQUFJLGdCQUFKO0FBQ0EsQ0FGRDs7QUFJQSxFQUFFLFlBQVU7QUFDWCxLQUFJLElBQUo7QUFDQSxDQUZEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgYXBwID0ge307XG5cbmFwcC5hcGlLZXlNYXBib3ggPSAncGsuZXlKMUlqb2lhbTl1WVhSb1lXNW9iM2tpTENKaElqb2lZMnBzT1hOdE4yOXRNR1Z6TkROcmJ6VjZNRGRrYWpabmJ5SjkudU0tdEQwUTdXUEFaVWRUXzB5OXpxZyc7XG5hcHAuYXBpS2V5TWFwUXVlc3QgPSAnV1RNZVdpVGl4QURTQ2U5cjRQam13eXVYemppZ2hwd2snO1xuYXBwLmFwaUtleURhcmtTa3kgPSAnYWFiYzM5NThhZmIxYWIzOWRjYmU1NWE5ZDM4MDFiODAnO1xuXG5hcHAuZmV0Y2hNYXAgPSBmdW5jdGlvbihsYXQgPSA0My42NTMyLCBsbmcgPSAtNzkuMzgzMil7XG5cdHZhciBteW1hcCA9IEwubWFwKCdtYXBpZCcpLnNldFZpZXcoW2xhdCwgbG5nXSwgMTQpO1xuXHR2YXIgbGF0bG5nID0gTC5sYXRMbmcobGF0LCBsbmcpO1xuXHR2YXIgaG9tZSA9IEwubWFya2VyKFtsYXQsIGxuZ10pLmJpbmRQb3B1cCgnWW91IGFyZSBoZXJlIC8gU3RhcnRpbmcgUG9pbnQnKS5hZGRUbyhteW1hcCk7XG5cdEwudGlsZUxheWVyKCdodHRwczovL2FwaS50aWxlcy5tYXBib3guY29tL3Y0L3tpZH0ve3p9L3t4fS97eX0ucG5nP2FjY2Vzc190b2tlbj1way5leUoxSWpvaWFtOXVZWFJvWVc1b2Iza2lMQ0poSWpvaVkycHNPWE50TjI5dE1HVnpORE5yYnpWNk1EZGthalpuYnlKOS51TS10RDBRN1dQQVpVZFRfMHk5enFnJywge1xuXHRcdGF0dHJpYnV0aW9uOiAnTWFwIGRhdGEgJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9cIj5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMsIDxhIGhyZWY9XCJodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvMi4wL1wiPkNDLUJZLVNBPC9hPiwgSW1hZ2VyeSDCqSA8YSBocmVmPVwiaHR0cHM6Ly93d3cubWFwYm94LmNvbS9cIj5NYXBib3g8L2E+Jyxcblx0XHRtYXhab29tOiAxOCxcblx0XHRtaW5ab29tOiAxMyxcblx0XHRjZW50ZXI6IGxhdGxuZyxcblx0XHRpZDogJ21hcGJveC5zdHJlZXRzJyxcblx0XHRhY2Nlc3NUb2tlbjogYXBwLmFwaUtleU1hcGJveFxuXHR9KS5hZGRUbyhteW1hcCk7XG5cblx0dmFyIGMgPSBuZXcgTC5Db250cm9sLkNvb3JkaW5hdGVzKCk7XG5cdGMuYWRkVG8obXltYXApO1xuXHRteW1hcC5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0Yy5zZXRDb29yZGluYXRlcyhlKTtcblx0XHRjb25zdCBlbmRMYXQgPSBlLmxhdGxuZy5sYXQ7XG5cdFx0Y29uc3QgZW5kTG5nID0gZS5sYXRsbmcubG5nO1xuXHRcdGNvbnN0IGVuZFJvdXRlID0gW107XG5cdFx0ZW5kUm91dGUucHVzaChlbmRMYXQpO1xuXHRcdGVuZFJvdXRlLnB1c2goZW5kTG5nKTtcblx0XHRjb25zb2xlLmxvZyhlbmRSb3V0ZSk7XG5cdFx0TC5Sb3V0aW5nLmNvbnRyb2woe1xuXHRcdCAgd2F5cG9pbnRzOiBbXG5cdFx0ICAgIEwubGF0TG5nKGxhdCwgbG5nKSxcblx0XHQgICAgTC5sYXRMbmcoZW5kUm91dGVbMF0sIGVuZFJvdXRlWzFdKVxuXHRcdCAgXVxuXHRcdH0pLmFkZFRvKG15bWFwKTtcblx0fSk7XG59O1xuXG5hcHAuZmV0Y2hXZWF0aGVyID0gZnVuY3Rpb24obGF0ID0gNDMuNjUzMiwgbG5nID0gLTc5LjM4MzIpe1xuXHQkLmFqYXgoe1xuXHRcdHVybDogYGh0dHBzOi8vYXBpLmRhcmtza3kubmV0L2ZvcmVjYXN0LyR7YXBwLmFwaUtleURhcmtTa3l9LyR7bGF0fSwke2xuZ30/dW5pdHM9c2lgLFxuXHRcdGRhdGFUeXBlOiAnSlNPTlAnLFxuXHRcdG1ldGhvZDogJ0dFVCdcblx0fSkudGhlbigoZGF0YSkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKGRhdGEpO1xuXHRcdGNvbnN0IGN1cnJlbnRUZW1wID0gTWF0aC5mbG9vcihkYXRhLmN1cnJlbnRseS50ZW1wZXJhdHVyZSk7XG5cdFx0Y29uc3QgY3VycmVudEZlZWxzTGlrZSA9IE1hdGguZmxvb3IoZGF0YS5jdXJyZW50bHkuYXBwYXJlbnRUZW1wZXJhdHVyZSk7XG5cdFx0Y29uc3QgZGVncmVlcyA9ICcmZGVnO0MnO1xuXHRcdCQoJy5jdXJyZW50VGVtcCBzcGFuJykuYXBwZW5kKGAke2N1cnJlbnRUZW1wfSAke2RlZ3JlZXN9YCk7XG5cdFx0JCgnLmN1cnJlbnRGZWVsc0xpa2Ugc3BhbicpLmFwcGVuZChgJHtjdXJyZW50RmVlbHNMaWtlfSAke2RlZ3JlZXN9YCk7XG5cdH0pO1xufTtcblxuYXBwLmZldGNoQ29vcmRpbmF0ZXMgPSBmdW5jdGlvbigpe1xuXHRuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGZ1bmN0aW9uKHBvc2l0aW9uKXtcblx0XHRjb25zdCBsYXQgPSBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGU7XG5cdFx0Y29uc3QgbG5nID0gcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZTtcblx0XHRjb25zb2xlLmxvZyhwb3NpdGlvbilcblx0XHRhcHAuZmV0Y2hNYXAobGF0LCBsbmcpO1xuXHRcdGFwcC5mZXRjaFdlYXRoZXIobGF0LCBsbmcpO1xuXHR9KTtcbn07XG5cbmFwcC5pbml0ID0gZnVuY3Rpb24oKXtcblx0YXBwLmZldGNoQ29vcmRpbmF0ZXMoKTtcbn07XG5cbiQoZnVuY3Rpb24oKXtcblx0YXBwLmluaXQoKTtcbn0pIl19

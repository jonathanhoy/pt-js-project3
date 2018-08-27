(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var app = {};

var mymap = L.map('mapid').setView([43.6532, -79.3832], 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoiam9uYXRoYW5ob3kiLCJhIjoiY2psOXNtN29tMGVzNDNrbzV6MDdkajZnbyJ9.uM-tD0Q7WPAZUdT_0y9zqg', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1Ijoiam9uYXRoYW5ob3kiLCJhIjoiY2psOXNtN29tMGVzNDNrbzV6MDdkajZnbyJ9.uM-tD0Q7WPAZUdT_0y9zqg'
}).addTo(mymap);

app.init = function () {};

$(function () {
  app.init();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFNLE1BQU0sRUFBWjs7QUFHQSxJQUFJLFFBQVEsRUFBRSxHQUFGLENBQU0sT0FBTixFQUFlLE9BQWYsQ0FBdUIsQ0FBQyxPQUFELEVBQVUsQ0FBQyxPQUFYLENBQXZCLEVBQTRDLEVBQTVDLENBQVo7O0FBRUEsRUFBRSxTQUFGLENBQVksa0tBQVosRUFBZ0w7QUFDL0ssZUFBYSx5TkFEa0s7QUFFOUssV0FBUyxFQUZxSztBQUc5SyxNQUFJLGdCQUgwSztBQUk5SyxlQUFhO0FBSmlLLENBQWhMLEVBS0csS0FMSCxDQUtTLEtBTFQ7O0FBU0EsSUFBSSxJQUFKLEdBQVcsWUFBVSxDQUVwQixDQUZEOztBQUlBLEVBQUUsWUFBVTtBQUNYLE1BQUksSUFBSjtBQUNBLENBRkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBhcHAgPSB7fTtcblxuXG52YXIgbXltYXAgPSBMLm1hcCgnbWFwaWQnKS5zZXRWaWV3KFs0My42NTMyLCAtNzkuMzgzMl0sIDE1KTtcblxuTC50aWxlTGF5ZXIoJ2h0dHBzOi8vYXBpLnRpbGVzLm1hcGJveC5jb20vdjQve2lkfS97en0ve3h9L3t5fS5wbmc/YWNjZXNzX3Rva2VuPXBrLmV5SjFJam9pYW05dVlYUm9ZVzVvYjNraUxDSmhJam9pWTJwc09YTnROMjl0TUdWek5ETnJielY2TURka2FqWm5ieUo5LnVNLXREMFE3V1BBWlVkVF8weTl6cWcnLCB7XG5cdGF0dHJpYnV0aW9uOiAnTWFwIGRhdGEgJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9cIj5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMsIDxhIGhyZWY9XCJodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvMi4wL1wiPkNDLUJZLVNBPC9hPiwgSW1hZ2VyeSDCqSA8YSBocmVmPVwiaHR0cHM6Ly93d3cubWFwYm94LmNvbS9cIj5NYXBib3g8L2E+JyxcbiAgbWF4Wm9vbTogMTgsXG4gIGlkOiAnbWFwYm94LnN0cmVldHMnLFxuICBhY2Nlc3NUb2tlbjogJ3BrLmV5SjFJam9pYW05dVlYUm9ZVzVvYjNraUxDSmhJam9pWTJwc09YTnROMjl0TUdWek5ETnJielY2TURka2FqWm5ieUo5LnVNLXREMFE3V1BBWlVkVF8weTl6cWcnXG59KS5hZGRUbyhteW1hcCk7XG5cblxuXG5hcHAuaW5pdCA9IGZ1bmN0aW9uKCl7XG5cdFxufVxuXG4kKGZ1bmN0aW9uKCl7XG5cdGFwcC5pbml0KCk7XG59KSJdfQ==

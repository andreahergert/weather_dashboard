// Seattle Geocodes Geo coords [47.6062, -122.3321]
// api key bd55593ecb666c01d38f4ec9276324e8
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}";
var apiKey = "bd55593ecb666c01d38f4ec9276324e8";
var searchFormEl = document.querySelector('#search-form');
var searchInputEl = document.querySelector('#search-input');
var pastSearchButtonEl = document.querySelector("#past-search-buttons");
var resultTextCurrentEl = document.querySelector('#result-text-current');
var resultContentEl = document.querySelector('#result-content');
var resultTextFiveDayEl = document.querySelector('#result-text-five-day');
var resultFiveDayE1 = document.querySelector('#five-day-container');


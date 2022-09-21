// Seattle Geocodes Geo coords [47.6062, -122.3321]
// api key bd55593ecb666c01d38f4ec9276324e8
// Need Dates (dt) converted to something readable
// Need 5-day forecast
// Need search button to event listen for var weather?
// Need local storage
// Need UV Index
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={city name}&units=imperial&appid={API key}";
var city;
var apiKey = "bd55593ecb666c01d38f4ec9276324e8";
var searchFormEl = document.querySelector('#search-form');
var searchInputEl = document.querySelector('#search-input');
var pastSearchButtonEl = document.querySelector("#past-search-buttons");
var resultTextCurrentEl = document.querySelector('#result-text-current');
var tempContentEl = document.querySelector('#temp-content');
var windContentEl = document.querySelector('#wind-content');
var humContentEl = document.querySelector('#hum-content');
var uvContentEl = document.querySelector('#uv-content');
var resultTextFiveDayEl = document.querySelector('#result-text-five-day');
var resultFiveDayE1 = document.querySelector('#five-day-container');
var fetchButton = document.getElementById('fetch-button');

var weather = {
    fetchWeather: function (city) {
fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey)
.then((response) => response.json())
.then((data) => this.displayWeather(data));
},
displayWeather: function(data){
    var { name } = data;
    var { dt } = data;
    var { icon } = data.weather[0];
    var { temp } = data.main;
    var { speed } = data.wind;
    var { humidity } = data.main;
    console.log(name, dt, icon, temp, speed, humidity)
    resultTextCurrentEl.innerText = name +" "+ dt +" "+ icon;
    tempContentEl.innerText = temp;
    windContentEl.innerText = speed;
    humContentEl.innerText = humidity;
}
}



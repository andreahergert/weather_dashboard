// var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey;
// var uvUrl = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + apiKey;
// var forecastedUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial&exclude=current,minutely,hourly,alerts&appid=" + apiKey;
// weather.fetchWeather ("Seattle") in console
// Seattle Geocodes Geo coords [47.6062, -122.3321]
// Need Dates (dt) converted to something readable, moment?
// Need 5-day forecast
// Need search button to event listen for var weather?
// Need local storage
// Need UV Index


var apiKey = "bd55593ecb666c01d38f4ec9276324e8";
var currentDate = moment().format('l');
var searchedCities = [];

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
}
}
// var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey;

// var forecastedUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial&exclude=current,minutely,hourly,alerts&appid=" + apiKey;

// var futureDate = moment().add(i + 1, "days").format("MM/DD/YYYY");

// Seattle Geocodes Geo coords [47.6062, -122.3321]
// Need 5-day forecast
// Need local storage


var apiKey = "bd55593ecb666c01d38f4ec9276324e8";
var currentDate = moment().format('l');
var userFormEl = document.querySelector('#user-form');
var cityInputEl = document.querySelector('#city');
var containerEl = document.querySelector("#current-city");
var btnInsert = document.querySelector('#fetch-button');
var lsOutput = document.querySelector('#past-search-buttons')
var lat = "47.6062";
var lon = "-122.3321";

// btnInsert.onclick = function () {
//     for (var i = 0; i < localStorage.length; i++)
//     if (localStorage.getItem("city") !== null) {
//         cityInputEl = JSON.parse(localStorage.getItem("city"));
//     }
//     lsOutput.innerHTML(`${city} ${value}`);
//     localStorage.setItem("city", JSON.stringify(cityInputEl));
// }


var formSubmitHandler = function (event) {
    event.preventDefault();
    var city = cityInputEl.value.trim();
    if (city) {
        fetchWeather(city);
        cityInputEl.value = '';
        lsOutput.innerHTML = city;
    } else {
        alert('Please enter a City');
    }
};

// Fetches weather by city (default is Seattle) from third party api
var fetchWeather = function (city) {
    // inserted &units=imperial into link so that this will display fahrenheit 
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey)
        .then((response) => {
            if (!response.ok) {
                alert("No weather found.");
            }
            return response.json();
        })
        .then((data) => this.displayWeather(data));
};

// var displayWeather is made by using a function to gather what data we want from the third party api.  
var displayWeather = function (data) {
    var { name } = data;
    var { icon } = data.weather[0];
    var { temp } = data.main;
    var { speed } = data.wind;
    var { humidity } = data.main;
    console.log(name, icon, temp, speed, humidity)
    document.querySelector(".city-shown").innerText = name;
    // currentDate pulled from moment due to strange date format from openweather api
    document.querySelector(".date").innerText = currentDate;
    // icon made by copying the icon url and inserting the specific icon code into the icon field
    document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".temp").innerText = "Temp: " + temp + "°F";
    document.querySelector(".wind").innerText =
        "Wind: " + speed + " MPH";
    document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";

};

var fetchWeatherFiveDay = function (lat, lon) {
    // inserted &units=imperial into link so that this will display fahrenheit 
    fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial&exclude=current,minutely,hourly,alerts&appid=" + apiKey)
        .then((response) => {
            if (!response.ok) {
                alert("No weather found.");
            }
            return response.json();
        })
        .then((data) => this.displayWeatherFiveDay(data));

};

var displayWeatherFiveDay = function (data) {
    var { icon } = data.list.weather[0];
    var { temp } = data.list.main;
    var { speed } = data.list.wind;
    var { humidity } = data.list.main;
    console.log(icon, temp, speed, humidity)
    // currentDate pulled from moment due to strange date format from openweather api
    // document.querySelector(".date1").innerText = currentDate;
    // icon made by copying the icon url and inserting the specific icon code into the icon field
    document.querySelector(".icon1").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".temp1").innerText = "Temp: " + temp + "°F";
    document.querySelector(".wind1").innerText =
        "Wind: " + speed + " MPH";
    document.querySelector(".humidity1").innerText =
        "Humidity: " + humidity + "%";
};



// Default city Seattle on page load
fetchWeather("Seattle");
fetchWeatherFiveDay("47.6062", "-122.3321");
userFormEl.addEventListener('submit', formSubmitHandler);
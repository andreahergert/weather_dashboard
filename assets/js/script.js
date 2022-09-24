// var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey;
// var uvUrl = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + apiKey;
// var forecastedUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial&exclude=current,minutely,hourly,alerts&appid=" + apiKey;


// Seattle Geocodes Geo coords [47.6062, -122.3321]
// Need 5-day forecast
// Need local storage



var apiKey = "bd55593ecb666c01d38f4ec9276324e8";
var currentDate = moment().format('l');
var userFormEl = document.querySelector('#user-form');
var cityInputEl = document.querySelector('#city');
var containerEl = document.querySelector("#current-city")

var formSubmitHandler = function (event) {
    event.preventDefault();

    var city = cityInputEl.value.trim();

    if (city) {
        fetchWeather(city);

        containerEl.textContent = '';
        cityInputEl.value = '';
    } else {
        alert('Please enter a City');
    }
};

var fetchWeather = function (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey)

        .then((response) => {
            if (!response.ok) {
                alert("No weather found.");
            }
            return response.json();
        })
        .then((data) => this.displayWeather(data));
};


var displayWeather = function (data) {
    var { name } = data;
    var { icon } = data.weather[0];
    var { temp } = data.main;
    var { speed } = data.wind;
    var { humidity } = data.main;
    console.log(name, icon, temp, speed, humidity)
    document.querySelector(".city-shown").innerText = name;
    // currentDate pulled from moment
    document.querySelector(".date").innerText = currentDate;
    document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".temp").innerText = "Temp: " + temp + "°F";
    document.querySelector(".wind").innerText =
        "Wind: " + speed + " MPH";
    document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
};

fetchWeather("Seattle");
userFormEl.addEventListener('submit', formSubmitHandler);
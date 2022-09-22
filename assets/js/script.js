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

            .then((response) => {
                if (!response.ok) {
                    alert("No weather found.");
                    throw new Error("No weather found.");
                }
                return response.json();
            })
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        var { name } = data;
        var { dt } = data;
        var { icon } = data.weather[0];
        var { temp } = data.main;
        var { speed } = data.wind;
        var { humidity } = data.main;
        console.log(name, dt, icon, temp, speed, humidity)
        document.querySelector(".city").innerText = name;
        document.querySelector(".date").innerText = currentDate;
        document.querySelector(".icon").src =
            "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".temp").innerText ="Temp: "+ temp + "°F";
        document.querySelector(".wind").innerText =
        "Wind: " + speed + " MPH";
        document.querySelector(".humidity").innerText =
            "Humidity: " + humidity + "%";
    },
};

weather.fetchWeather("Seattle");
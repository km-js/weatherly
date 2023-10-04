//console.log("hello world")
const apiKey = 'dce0febb5c274abc907131431230210'
let searchInput = document.getElementById("searchInput");
let searchButton = document.getElementById("searchButton");
let locationName = document.getElementById("locationName")
let tempElement = document.getElementById("temp");
let tempImage = document.getElementById("tempImage");
let humidityElement = document.getElementById("humidity");
let windElement = document.getElementById("wind");
let error = document.getElementById("error")

let elocation;

searchInput.addEventListener("change", function(event) {
    //console.log(event.target.value)
    elocation = event.target.value;
})

function checkWeather() {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${elocation}`)
        .then(response => response.json())
        .then(data => {
            currentWeather = data.current;
            temp = currentWeather.temp_c;
            humidity = currentWeather.humidity;
            wind = currentWeather.wind_kph;
            condition = currentWeather.condition;
            city = data.location.name;
            
            //console.log(elocation);
            locationName.innerHTML = city;
            //console.log(condition);
            tempImage.src = condition.icon;
            // console.log("temp: ",temp)
            tempElement.innerHTML = `${Math.round(temp)}°C`
            // console.log("Humidity: ",humidity)
            humidityElement.innerHTML = `${humidity}%`
            //console.log("Wind: ",wind)
            windElement.innerHTML = `${Math.round(wind)}km/h`
        })
        .catch(error => {
            console.log("Error: ", error)

        })
}



searchInput.addEventListener("keyup", function() {
    checkWeather();
})

searchButton.addEventListener("click", function() {
    //console.log("search button clicked")
    checkWeather();
})











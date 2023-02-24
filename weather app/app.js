let weather = {
    fetchWeather: function (city) {
        apiKey: " 488bccc47bda4bd480a132726231302",
        fetch("http://api.weatherapi.com/v1/current.json?key=488bccc47bda4bd480a132726231302&q=" + city + "&aqi=no")
            .then((response) => response.json())
            .then((data) => this.displayWeather(data))
    },
    displayWeather: function (data) {
        const { location: { name, country, localtime } } = data
        const { current: { condition: { icon, text } } } = data
        const { current: { temp_c, humidity, wind_kph } } = data
        console.log(name, country, localtime, temp_c, humidity, wind_kph, icon)
        document.querySelector(".city").innerHTML = "Weather in " + name
        document.querySelector(".icon").src = icon
        document.querySelector(".description").innerHTML = text
        document.querySelector(".temp").innerHTML = temp_c + " °C"
        document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%"
        document.querySelector(".wind").innerHTML = "Wind speed:" + wind_kph + "km/h"
        document.querySelector(".time").innerHTML = localtime
    },
    search: function () {
        this.fetchWeather(search.value)
    }
}
//targeting html dom
const seachBtn = document.querySelector("#button")
const search = document.querySelector(".search-bar")

seachBtn.addEventListener("click", function () {
    weather.search()
})
search.addEventListener("keyup" ,function (e) {
    if(event.key === "Enter") {
        weather.search()
    }
})
const apiKey = "8888252b890764cf763c2f9dceacdc33";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".wheather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (!response.ok) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".wheather").style.display = "none";
    return;
  } else {
    var data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML =
      Math.round(data.main.humidity) + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "wheather_images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "wheather_images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "wheather_images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "wheather_images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "wheather_images/mist.png";
    }
    document.querySelector(".wheather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

//7353ddaccd307ccda62b2d5d07737874 :- api key
const api = "7353ddaccd307ccda62b2d5d07737874";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const main = document.querySelector(".main");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${api}`);
  let data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main === "Clouds") {
    weatherIcon.src = "images/clouds.png";
    main.style.backgroundImage = "url('images/cloudyBackground.jpg')";
  } else if (data.weather[0].main === "Clear") {
    weatherIcon.src = "images/clear.png";
    main.style.backgroundImage = "url('images/clearWeather.jpeg')";
  } else if (data.weather[0].main === "Rain") {
    weatherIcon.src = "images/rain.png";
    main.style.backgroundImage = "url('images/rainyBackground.jpg')";
  } else if (data.weather[0].main === "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
    main.style.backgroundImage = "url('images/drizzleBackground.jpg')";
  } else if (data.weather[0].main === "Mist") {
    weatherIcon.src = "images/mist.png";
    main.style.backgroundImage = "url('images/mistBackground.jpg')";
  } else if (data.weather[0].main === "Snow") {
    weatherIcon.src = "images/snow.png";
    main.style.backgroundImage = "url('images/snowBackground.jpg')";
  }
  document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

checkWeather();

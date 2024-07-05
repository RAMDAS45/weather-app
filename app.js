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
    weatherIcon.src = "clouds.png";
    main.style.backgroundImage = "url('cloudyBackground.jpg')";
  } else if (data.weather[0].main === "Clear") {
    weatherIcon.src = "clear.png";
    main.style.backgroundImage = "url('clearWeather.jpeg')";
  } else if (data.weather[0].main === "Rain") {
    weatherIcon.src = "rain.png";
    main.style.backgroundImage = "url('rainyBackground.jpg')";
  } else if (data.weather[0].main === "Drizzle") {
    weatherIcon.src = "drizzle.png";
    main.style.backgroundImage = "url('drizzleBackground.jpg')";
  } else if (data.weather[0].main === "Mist") {
    weatherIcon.src = "mist.png";
    main.style.backgroundImage = "url('mistBackground.jpg')";
  } else if (data.weather[0].main === "Snow") {
    weatherIcon.src = "snow.png";
    main.style.backgroundImage = "url('snowBackground.jpg')";
  }
  document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

checkWeather();

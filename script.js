const searchField = document.getElementById('search-input');
const searchButton = document.getElementById('search');
const cityName = document.getElementById('city-name');
const timeInfo = document.getElementById('time-info');
const weatherIcon = document.getElementById('weather-icon');
const temperature = document.getElementById('temperature');
const generalCondition = document.getElementById('condition-txt');
const feelsLike = document.getElementById('feels-like');
const airHumidity = document.getElementById('air-humidity');
const windSpeed = document.getElementById('wind-speed');

function displayWeatherInfo(city) {
  fetch(`https://api.weatherapi.com/v1/current.json?key=6ed58b3a105f45a8b2565252232603&q=${city}`, { mode: 'cors' })
    .then((response) => response.json())
    .then((response) => {
      cityName.textContent = city.charAt(0).toUpperCase() + city.slice(1);
      timeInfo.textContent = response.location.localtime;
      weatherIcon.src = response.current.condition.icon;
      temperature.textContent = `${response.current.temp_c} °C`;
      generalCondition.textContent = response.current.condition.text;
      feelsLike.textContent = `Fells like: ${response.current.feelslike_c}  °C`;
      airHumidity.textContent = `Humidity: ${response.current.humidity} %`;
      windSpeed.textContent = `Wind speed: ${response.current.wind_kph} km/h`;
    })
    .catch((e) => {
      console.log(e);
    });
}

searchButton.addEventListener('click', () => {
  const inputString = searchField.value;
  if (inputString) {
    displayWeatherInfo(inputString);
  }
});
window.onload = displayWeatherInfo('sibiu');

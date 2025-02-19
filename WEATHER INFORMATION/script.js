const apiKey = 'caedece35a0aa569526717515eeb7aae'; // Correct the typo here
const getWeatherButton = document.getElementById('getWeatherButton');
const cityNameInput = document.getElementById('cityNameInput');
const weatherInfoDiv = document.getElementById('weatherInfo');
const temperature = document.getElementById('temperature');

getWeatherButton.addEventListener('click', async () => {
    const cityName = cityNameInput.value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`); // Corrected API key variable
    const data = await response.json();
    
    if (data.main && data.main.temp) {
        temperature.textContent = `Temperature in ${cityName}: ${data.main.temp}°C`;
        weatherInfoDiv.classList.remove('hidden');
    } else {
        weatherInfoDiv.classList.add('hidden');
    }
});

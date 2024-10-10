const apiKey = '410d67e25d95b637f0b0e838857dd770';

document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    if (city) {
        fetchWeather(city);
    } else {
        alert('Please enter a city name.');
    }
});

function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            document.getElementById('weather').innerText = error.message;
        });
}

function displayWeather(data) {
    const weatherDiv = document.getElementById('weather');
    const temp = data.main.temp;
    const description = data.weather[0].description;
    const city = data.name;

    weatherDiv.innerHTML = `
        <h2>Weather in ${city}</h2>
        <p>Temperature: ${temp} °C</p>
        <p>Description: ${description}</p>
    `;
}

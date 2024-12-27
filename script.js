const url = 'https://weather-api138.p.rapidapi.com/weather?city_name=Delhi';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '0f5728718emsh4ccefd6381b885ep1a2f48jsn43f3815ec5b6',
        'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
    }
};

async function fetchWeather() {
    try {
        const response = await fetch(url, options);
        const result = await response.json(); // Parse the response as JSON
        console.log(result);

        // Extract weather attributes from the response
        const temp = result.main.temp;
        const feels_like = result.main.feels_like;
        const temp_min = result.main.temp_min;
        const temp_max = result.main.temp_max;
        const pressure = result.main.pressure;
        const humidity = result.main.humidity;
        const sea_level = result.main.sea_level;
        const grnd_level = result.main.grnd_level;

        // Update the DOM with the extracted attributes
        document.getElementById('temp').innerHTML = `  ${temp}`;
        document.getElementById('feels_like').innerHTML = `  ${feels_like}`;
        document.getElementById('temp_min').innerHTML = `  ${temp_min}`;
        document.getElementById('temp_max').innerHTML = `  ${temp_max}`;
        document.getElementById('pressure').innerHTML = `  ${pressure}`;
        document.getElementById('humidity').innerHTML = `  ${humidity}`;
        document.getElementById('sea_level').innerHTML = `  ${sea_level}`;
        document.getElementById('grnd_level').innerHTML = ` ${grnd_level}`;
    } catch (error) {
        console.error(error);
    }
}

fetchWeather();


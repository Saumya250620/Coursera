document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);

function showweatherDetails(event){
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = '5fd0f51c1ec18ae77668a8c030574c69'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if(!response.ok){
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data =>{
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp} &#8451;</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            document.getElementById('weatherInfo').innerHTML = 
            `<p style="color:red;">${error.message}</p>`
        });
}


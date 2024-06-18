const inputBox = document.querySelector('.input-box');

const searchBtn = document.getElementById('searchbtn');

const waether_img = document.querySelector('.weather-img');

const temprature = document.querySelector('.temprature');

const description = document.querySelector('.description');

const humidity = document.getElementById('humidity');

const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body')

async function checkweather(city){
    const api_key = "185dcb04cbfd8dba9c6ca4f7cc7d6f43";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());

    if(weather_data.cod === '404'){
        location_not_found.style.display = 'flex';
        weather_body.style.display = "none";
        return;
    }

    location_not_found.style.display = 'none';
    weather_body.style.display = "flex";
    temprature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;

    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            waether_img.src = "./Asset/cloud.png";
            break;
        case 'Clear':
            waether_img.src = "./Asset/clear.png";
            break;
        case 'Rain':
            waether_img.src = "./Asset/rain.png";
            break;
        case 'Mist':
            waether_img.src = "./Asset/mist.png";
            break;
        case 'Snow':
            waether_img.src = "./Asset/snow.png";
            break;
    }
}

searchBtn.addEventListener('click', ()=>{
    checkweather(inputBox.value);
})


const container = document.querySelector(".container");
const weatherBox = document.querySelector(".container__weather-box");
const weatherDetails = document.querySelector(".container__weather-details");
const error404 = document.querySelector(".container--not-found");

export function apiCallAndFillCard() {
    const APIKey = "cb63a34f11480979784143dcb403fabb";
    const city = document.querySelector(".container__search input").value;

    if (city === '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then(response => response.json())
    .then(json => {
        if (json.cod === "404") {
            container.style.height = "400px";
            weatherBox.style.display = "none";
            weatherDetails.style.display = "none";
            error404.style.display = "block";
            error404.classList.add("fadeIn");
            return;
        }

        error404.style.display = "none";
        error404.classList.remove("fadeIn");

        const image = document.querySelector(".container__weather-box img");
        const temperature = document.querySelector(".container__weather-box__temperature");
        const description = document.querySelector(".container__weather-box__description");
        const humidity = document.querySelector(".container__weather-details__humidity span");
        const wind = document.querySelector(".container__weather-details__wind span");

        switch (json.weather[0].main) {
            case "Clear":
                image.src = "img/clear.png";
                break;
            case "Clouds":
                image.src = "img/cloud.png";
                break;
            case "Haze":
                image.src = "img/mist.png";
                break;
            case "Rain":
                image.src = "img/rain.png";
                break;
            case "Snow":
                image.src = "img/snow.png";
                break;
            default:
                image.src = "";
        }

        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${json.wind.speed}Km/h`;

        weatherBox.style.display = "";
        weatherDetails.style.display = "";
        weatherBox.classList.add("fadeIn");
        weatherDetails.classList.add("fadeIn");
        container.style.height = "605px"; 
    });
};
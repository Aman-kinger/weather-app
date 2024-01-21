const apiKey = '069bad46bf164d3e9b7112224242001'

const getCity = document.querySelector('.get-city')
const searchBtn = document.querySelector('.search-btn')
const locationForm = document.getElementById('locationForm')


async function getWeather(location){
    try{
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=1&aqi=yes&alerts=nos`, {mode: 'cors'})
        const weatherData = await response.json()
        const weather = {
            location: weatherData.location.name,
            condition: weatherData.current.condition.text,
            icon: weatherData.current.condition.icon,
            temp: weatherData.current.temp_c,
            feelsLike: weatherData.current.feelslike_c,
            high: weatherData.forecast.forecastday[0].day.maxtemp_c,
            low: weatherData.forecast.forecastday[0].day.mintemp_c,
        }
        return weather
    } catch(error){
        console.log(error)
    }
}

const displayWeather = (e) => {
    e.preventDefault()
    let location = getCity.value
    weather = getWeather(location)
    weather.then(weather => {
        document.getElementById('location').innerHTML = weather.location
        document.getElementById('condition').innerHTML = weather.condition
        document.getElementById('temp').innerHTML = weather.temp + '°'
        document.getElementById('max').innerHTML = 'High: ' + weather.high + '°'
        document.getElementById('min').innerHTML = 'Min: ' + weather.low + '°'
        document.getElementById('weatherIcon').src = weather.icon
    })
}

locationForm.onsubmit = displayWeather


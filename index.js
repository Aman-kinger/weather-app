const apiKey = '069bad46bf164d3e9b7112224242001'

const getCity = document.querySelector('.get-city')
const searchBtn = document.querySelector('.search-btn')
const locationForm = document.getElementById('locationForm')


async function getWeather(location){
    try{
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`, {mode: 'cors'})
        const weatherData = await response.json()
        console.log(weatherData.current.condition.text)
        console.log(weatherData.current.temp_c)
        console.log(weatherData.current.feelslike_c)
    } catch(error){
        console.log(error)
    }
}

const displayWeather = (e) => {
    e.preventDefault()
    let location = getCity.value
    getWeather(location)
}

locationForm.onsubmit = displayWeather
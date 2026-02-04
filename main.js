import { Daily } from "./components/Daily.js";
import { Hourly } from "./components/Hourly.js";
import { render } from "./libs/render.js"

let source = document.querySelector("source")
let video = document.querySelector(".bg-video")
let weather = ""
let city = document.querySelector(".city")
let temperature = document.querySelector(".temperature")
let status = document.querySelector(".status")
let dailyBox = document.querySelector(".daily_box")
let hourlyBox = document.querySelector(".hourly_box")
let today = new Date().toISOString().slice(0, 10)
// today = "2026-02-04"
console.log(today);

fetch('https://api.open-meteo.com/v1/forecast?latitude=39.654&longitude=66.9597&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto')
    .then(res => res.json())
    .then(data => {
        console.log(data);

        render(data.daily.temperature_2m_max, dailyBox, Daily)
    })


fetch('https://api.open-meteo.com/v1/forecast?latitude=39.654&longitude=66.9597&hourly=temperature_2m,relative_humidity_2m,precipitation_probability&weathercode&timezone=auto')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        render(data.hourly.time.slice(0, 23), hourlyBox, Hourly)
        data.hourly.time.forEach((item, i) => {


            if (data.hourly.precipitation_probability.indexOf(today) >= 50) {
                weather = "rain"
            } else if (data.hourly.precipitation_probability.indexOf(today) >= 50 && data.temperature_2m <= 0) {

                weather = "snow"
            } else {

                weather = "clear"
            }
        });
        // weather = 'rain'
        // weather = "snow"
        if (weather == "rain") {
            source.setAttribute("src", "media/rain.mp4")
            video.load()
        } else if (weather == "snow") {
            source.setAttribute("src", "media/snow.mp4")
            video.load()
        } else {
            source.setAttribute("src", "media/clear.mp4")
            video.load()
        }
        status.textContent = weather
    })
fetch('https://api.open-meteo.com/v1/forecast?latitude=39.654&longitude=66.9597&current_weather=true')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        city.textContent = "Samarkand"
        temperature.textContent = data.current_weather.temperature
        console.log(weather);

    })

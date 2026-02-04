export function Hourly(elem, arr = []) {
    let hourlyItem = document.createElement("div")
    let time = document.createElement("p")
    let temp = document.createElement("p")

    time.className = "hour"
    temp.className = "hourly-degere"

    time.textContent = elem.slice(-5)
    // temp.textContent = data.hourly.temperature_2m.indexOf(elem)
    // console.log(arr);
    
    
    temp.textContent = ""
    
    hourlyItem.append(time, temp)

    return hourlyItem
}
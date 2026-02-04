export function Daily(item, arr = []) {
    let div = document.createElement("div")
    let time = document.createElement("p")
    let maxTemp = document.createElement("p")
    let minTemp = document.createElement("p")
    const todayIndex = new Date().getDay()
    // console.log(minDegree);
    // let minDegree = arr.nextElementSibling
    
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const itemIndex = arr.indexOf(item)


    const dayIndex = (todayIndex + itemIndex) % 7
    
    time.textContent = days[dayIndex]
    // minTemp.textContent = minDegree
    maxTemp.textContent = item
    if (dayIndex == todayIndex) {
        time.textContent = "Today"
        
    } else if (dayIndex - todayIndex == 1){
        
        time.textContent = "Tomorrow"

    }
    
    
    div.className = 'daily_elem'
    time.className = 'day'
    maxTemp.className = 'daily_degree'
    minTemp.className = 'daily_degree'

    div.append(time, minTemp, maxTemp)

    return div
}

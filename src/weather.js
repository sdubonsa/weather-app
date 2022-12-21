import { displayController } from "./display-controller"

class Weather {
    constructor(location) {
        this.location = location
        this.request = 'https://api.openweathermap.org/data/2.5/weather?q='+location+'&APPID=427e063197672c922665dc4483084669&units=imperial'
    }

    renderDisplay = () => {
        fetch(this.request, {mode: 'cors'})
        .then(function(response) {
            return response.json()
        })
        .then(function(response){
            const display = new displayController(response)
            display.miniDisplay()
        })
    }
}

export { Weather }
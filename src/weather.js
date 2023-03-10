import { displayController } from "./display-controller"
import { Search } from "./search"

class Weather {
    constructor(location) {
        self = this
        this.location = location
        this.request = 'https://api.openweathermap.org/data/2.5/weather?q='+location+'&APPID=427e063197672c922665dc4483084669&units=imperial'
    }

    initDisplay = (response) => {
        const display = new displayController(response)
        const search = new Search()

        // clear and render display
        display.clearDisplay()
        display.topDisplay()

        // set-up search logic
        search.searchHandler()
    }

    renderDisplay = () => {
        fetch(this.request, {mode: 'cors'})
        .then(function(response) {
            return response.json()
        })
        .then(function(response){
            self.initDisplay(response)
        })
    }
}

export { Weather }
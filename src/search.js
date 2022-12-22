import { Weather } from "./weather";

class Search {
    constructor() {
        self = this
    }

    validateSearch = (request) => {
        fetch(request, {mode: 'cors'})
        .then(function(response) {
            if(!response.ok) {
                throw new Error('Invalid Location')
            }
            
            return response.json()
        })
        .then(function(response) {
            const weather_app = new Weather(response.name)
            weather_app.renderDisplay()
        })
        .catch(function(error){
            alert('Location is not found please input valid city')
        })
    }

    searchUpdate = () => {
        const search = document.getElementById('search')
        
        search.addEventListener('submit', function(event) {
            // handle the form data
            event.preventDefault()

            const location = search.elements['location'].value
            const request = 'https://api.openweathermap.org/data/2.5/weather?q='+location+'&APPID=427e063197672c922665dc4483084669&units=imperial'

            // validate request
            self.validateSearch(request)
        });
    }
}

export { Search }
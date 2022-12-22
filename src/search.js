import { Weather } from "./weather";

class Search {
    searchForm = () => {
        const search = document.getElementById('search')

        console.log(search)
        
        search.addEventListener('submit', function(event) {
            // handle the form data
            event.preventDefault()
            const location =  search.elements['location'].value

            const weather_app = new Weather(location)
            weather_app.renderDisplay()
        });
    }
}

export { Search }
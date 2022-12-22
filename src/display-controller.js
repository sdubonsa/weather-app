class displayController {
    constructor(response) {
        self = this
        this.response = response
        this.container = document.getElementById('content')
    }

    topDisplay = () => {
        const topContainer = document.createElement('div')
        topContainer.classList.add('w-full', 'p-10', 'flex', 'justify-center', 'items-center', 'h-full')

        // STYLING
        topContainer.innerHTML = 
        '<div class="flex p-6 flex-col w-1/2">' + 
            '<div class="relative w-full pb-6">' +
                '<form id="search">'+
                    '<input type="search" id="location" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Search for a location..." required>'+
                    '<button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">'+
                        '<svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>'+
                        '<span class="sr-only">Search</span>'+
                    '</button>'+
                '</form>'+
            '</div>'+
            '<div id="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative hidden" role="alert">' +
                '<strong class="font-bold">Please input in the following format: </strong>'+
                '<span class="block sm:inline">City. City, Country. City, Country, State</span>'+
            '</div>'+
            '<div class="flex pt-3">'+
                '<div class="flex flex-col">' + 
                    `<span class="text-6xl font-bold">${Math.ceil(this.response.main.temp)}°F</span>` + 
                    `<span class="font-semibold mt-1 text-gray-500">${this.response.name}, ${this.response.sys.country}</span>` +
                '</div>'+
                `<img src="http://openweathermap.org/img/wn/${this.response.weather[0].icon}@2x.png">`+ 
            '</div>' +
        '</div>'


        console.log(this.response)

        this.container.appendChild(topContainer)
    }

    clearDisplay = () => {
        this.container.innerHTML = ''
    }
}

export { displayController }
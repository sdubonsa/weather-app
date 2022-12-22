class displayController {
    constructor(response) {
        this.response = response
        this.container = document.getElementById('content')
    }

    topDisplay = () => {
        const topContainer = document.createElement('div')
        topContainer.classList.add('w-full')

        console.log(this.response)

        // STYLING
        topContainer.innerHTML = 
        '<div class="flex justify-between p-6">' + 
            '<div class="flex flex-col">' + 
                `<span class="text-6xl font-bold">${this.response.main.temp}</span>` + 
                `<span class="font-semibold mt-1 text-gray-500">${this.response.name}, ${this.response.sys.country}</span>` +

                '<form id="search">' +
                    '<input type="text" id="location" required>' +
                    '<input type="submit">' +
                '</form>' +
            '</div>' +
        '</div>'

        this.container.appendChild(topContainer)
    }

    clearDisplay = () => {
        this.container.innerHTML = ''
    }
}

export { displayController }
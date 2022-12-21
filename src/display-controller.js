class displayController {
    constructor(response) {
        this.response = response
        this.container = document.getElementById('content')
    }

    miniDisplay = () => {
        this.container.innerHTML = this.response.main.temp
    }
}

export { displayController }
let api = 'https://www.omdbapi.com/?apikey=e6825685&t='




function SearchMovie() {
    let moviename = document.getElementById('moviename')
    let query = api+moviename.value
    fetch(query).then((data) => {
        return data.json()
    }).then((data) => {
        console.log(data)
    })
}


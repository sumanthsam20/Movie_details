let api = 'https://www.omdbapi.com/?apikey=e6825685&t='
let title = document.getElementById('title')
let director = document.getElementById('director')
let actors = document.getElementById('actors')
let collection = document.getElementById('collection')
let description = document.getElementById('description')
let awards = document.getElementById('awards')
let writer = document.getElementById('writer')
let rating = document.getElementById('rating')
let genre = document.getElementById('genre')
let released = document.getElementById('released')
let poster = document.getElementById('poster')

function SearchMovie() {
    let moviename = document.getElementById('moviename')
    let query = api+moviename.value
    fetch(query).then((data) => {
        return data.json()
    }).then((data) => {
        // console.log(data)
        document.getElementById('title').innerText = data.Title;
        document.getElementById('director').innerText = data.Director;
        document.getElementById('actors').innerText = data.Actors;
        document.getElementById('collection').innerText = data.BoxOffice;
        document.getElementById('description').innerText = data.Plot;
        document.getElementById('awards').innerText = data.Awards;
        document.getElementById('writer').innerText = data.Writer;
        document.getElementById('rating').innerText = data.Rated;
        document.getElementById('genre').innerText = data.Genre;
        document.getElementById('date').innerText = data.Released;
        // document.getElementById('released').innerText = data.Released;
        document.getElementById('poster').src = data.Poster;
    })
    moviename.value="";
}


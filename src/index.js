const fetchFilms = "http://localhost:3000/films";
const fetchFirst = "http://localhost:3000/films/1"
fetch(fetchFilms)
.then(resp => resp.json())
.then(filmList);
fetch(fetchFirst)
.then(resp => resp.json())
.then(renderFirst);

//renders first film
function renderFirst(firstFilm){
    let seatsLeft = firstFilm.capacity - firstFilm.tickets_sold;
    el('poster').src = firstFilm.poster;
    el('title').textContent = firstFilm.title;
    el('runtime').textContent = `${firstFilm.runtime} Minutes`;
    el('film-info').textContent = firstFilm.description;
    el(`showtime`).textContent = firstFilm.showtime;
    el('ticket-num').textContent = `${seatsLeft} tickets left`;

    //purchase tickets
    el('buy-ticket').addEventListener('click', () => {
        if(seatsLeft > 1){
            --seatsLeft;
            el('ticket-num').textContent = `${seatsLeft} tickets left`;
        } else {
            el('ticket-num').textContent = "Sold Out";
            el('buy-ticket').className = "sold-out";
        }
    });
}

function filmList(films){
    films.forEach(film => {
        const ul = document.querySelector("#filmlst")
        const filmLi = document.createElement("li");
        filmLi.className = "film item";
        filmLi.textContent = film.title;
        ul.append(filmLi);
    })
}

// returns the element id when I use el()
function el(id) {
    return document.getElementById(id);
}

document.addEventListener("DOMContentLoaded", () => {
})
const getMovies = async () => {
    const url = "https://portiaportia.github.io/json/movies.json";

    try {
        const reponse = await fetch(url);
        return await reponse.json();
    } catch (error) {
        console.log(error);
    }
};

const showMovies = async () => {
    let movies = await getMovies();
    let moviesSection = document.getElementById("movies-section");

    movies.forEach((movie) => {
        moviesSection.append(getMovieItem(movie));
    });
};

const getMovieItem = (movie) => {
    let section = document.createElement("section");

    let h1 = document.createElement("img");
    let url = "https://portiaportia.github.io/json/";
    h1.src = url+movie.img;
    section.append(h1);
    h1.classList.add("zoom");

    let ul = document.createElement("ul");
    section.append(ul);
    ul.append(getLi(movie.title));
    ul.append(getLi(`Director: `+movie.director));
    ul.append(getActors(movie.actors));
    ul.append(getLi(`Year: `+movie.year));
    ul.append(getGenres(movie.genres));
    ul.append(getLi(movie.description));


    return section;
};

const getLi = data => {
    const li = document.createElement("li");
    li.textContent = data;
    return li;
};

const getActors = (movie) => {
    const section = document.createElement("section");
    const h3 = document.createElement("h3");
    h3.textContent = `Actors: `;
    section.append(h3);

    movie.forEach(actor => {
        const p = document.createElement("p");
        p.textContent = actor;
        section.append(p);
    })
    return section;
};

const getGenres = (genres) => {
    const section = document.createElement("section");
    const h3 = document.createElement("h3");
    h3.textContent = `Genres: `;
    section.append(h3);

    genres.forEach(genre => {
        const p = document.createElement("p");
        p.textContent = genre;
        section.append(p);
    })
    return section;
};



window.onload = () => showMovies();
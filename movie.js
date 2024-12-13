// JavaScript source code

//make a program that generates random movie suggestion based on users selected genre
// movies can have multiple genres so can be overlap
// should include year and director
//sci-fi
//fantasy
//adventure
//drama
//comedy
//kids
//horror
//romance



const scifi = document.getElementById('scifi');
const fantasy = document.getElementById('fantasy');
const drama = document.getElementById('drama');
const adventure = document.getElementById('adventure');
const comedy = document.getElementById('comedy');
const horror = document.getElementById('horror');
const romance = document.getElementById('romance');
const kids = document.getElementById('kids');

let selectedGenre ='';

scifi.addEventListener('click', () => {
    selectedGenre = 'scifi';
    console.log(selectedGenre);
    function getRandomMovie(selectedGenre) {
        if (!movies[selectedGenre]) {
            throw new Error("Invalid option selected");
        }
        const moviesSelected = movies[selectedGenre];
        const randomIndex = Math.floor(Math.random() * moviesSelected.length);
        return moviesSelected[randomIndex];
    }
    const randomMovie = getRandomMovie(selectedGenre);

    console.log(randomMovie);
    displayResult(randomMovie);
});

fantasy.addEventListener('click', () => {
    selectedGenre = 'fantasy';
    console.log(selectedGenre);
    function getRandomMovie(selectedGenre) {
        if (!movies[selectedGenre]) {
            throw new Error("Invalid option selected");
        }
        const moviesSelected = movies[selectedGenre];
        const randomIndex = Math.floor(Math.random() * moviesSelected.length);
        return moviesSelected[randomIndex];
    }
    const randomMovie = getRandomMovie(selectedGenre);

    console.log(randomMovie);
    displayResult(randomMovie);
});

drama.addEventListener('click', () => {
    selectedGenre = 'drama';
    console.log(selectedGenre);
    function getRandomMovie(selectedGenre) {
        if (!movies[selectedGenre]) {
            throw new Error("Invalid option selected");
        }
        const moviesSelected = movies[selectedGenre];
        const randomIndex = Math.floor(Math.random() * moviesSelected.length);
        return moviesSelected[randomIndex];
    }
    const randomMovie = getRandomMovie(selectedGenre);

    console.log(randomMovie);
    displayResult(randomMovie);
});

adventure.addEventListener('click', () => {
    selectedGenre = 'adventure';
    console.log(selectedGenre);
    function getRandomMovie(selectedGenre) {
        if (!movies[selectedGenre]) {
            throw new Error("Invalid option selected");
        }
        const moviesSelected = movies[selectedGenre];
        const randomIndex = Math.floor(Math.random() * moviesSelected.length);
        return moviesSelected[randomIndex];
    }
    const randomMovie = getRandomMovie(selectedGenre);

    console.log(randomMovie);
    displayResult(randomMovie);
});

comedy.addEventListener('click', () => {
    selectedGenre = 'comedy';
    console.log(selectedGenre);
    function getRandomMovie(selectedGenre) {
        if (!movies[selectedGenre]) {
            throw new Error("Invalid option selected");
        }
        const moviesSelected = movies[selectedGenre];
        const randomIndex = Math.floor(Math.random() * moviesSelected.length);
        return moviesSelected[randomIndex];
    }
    const randomMovie = getRandomMovie(selectedGenre);

    console.log(randomMovie);
    displayResult(randomMovie);
});

horror.addEventListener('click', () => {
    selectedGenre = 'horror';
    console.log(selectedGenre);
    function getRandomMovie(selectedGenre) {
        if (!movies[selectedGenre]) {
            throw new Error("Invalid option selected");
        }
        const moviesSelected = movies[selectedGenre];
        const randomIndex = Math.floor(Math.random() * moviesSelected.length);
        return moviesSelected[randomIndex];
    }
    const randomMovie = getRandomMovie(selectedGenre);

    console.log(randomMovie);
    displayResult(randomMovie);
});

romance.addEventListener('click', () => {
    selectedGenre = 'romance';
    console.log(selectedGenre);
    function getRandomMovie(selectedGenre) {
        if (!movies[selectedGenre]) {
            throw new Error("Invalid option selected");
        }
        const moviesSelected = movies[selectedGenre];
        const randomIndex = Math.floor(Math.random() * moviesSelected.length);
        return moviesSelected[randomIndex];
    }
    const randomMovie = getRandomMovie(selectedGenre);

    console.log(randomMovie);
    displayResult(randomMovie);
});

kids.addEventListener('click', () => {
    selectedGenre = 'kids';
    console.log(selectedGenre);
    function getRandomMovie(selectedGenre) {
        if (!movies[selectedGenre]) {
            throw new Error("Invalid option selected");
        }
        const moviesSelected = movies[selectedGenre];
        const randomIndex = Math.floor(Math.random() * moviesSelected.length);
        return moviesSelected[randomIndex];
    };

    const randomMovie = getRandomMovie(selectedGenre);

    console.log(randomMovie);
    displayResult(randomMovie);

});


function displayResult(movie) {
    const title = document.getElementById('title');
    const yrDr = document.getElementById('yrDr');
    const movieDiv = document.getElementById('movie');
    movieDiv.style.display = 'flex';
    title.textContent = `${movie.title}`;
    yrDr.textContent = `(${movie.year}) - ${movie.director}`;
};
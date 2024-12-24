// get Movie or Tv Show selection

const getMovieOrTv = () => {
    const selectedRadio = document.querySelector('input[name="choice"]:checked');
    return selectedRadio ? selectedRadio.value : null;
};


// Returns the current genre selection from the dropdown menu
const getSelectedGenre = () => {
    const selectedGenre = document.getElementById('genres').value;
    return selectedGenre;
};

/* Displays the like and dislike buttons on the page
const showBtns = () => {
    const btnDiv = document.getElementById('likeOrDislikeBtns');
    btnDiv.removeAttribute('hidden');
};*/

// Clear the current movie from the screen
const clearCurrentMovie = () => {
    const posterDiv = document.getElementById('poster');
    const textDiv = document.getElementById('description');
    posterDiv.innerHTML = '';
    textDiv.innerHTML = '';
}

/*
// After liking a movie, clears the current movie from the screen and gets another random movie
const likeMovie = () => {
    clearCurrentMovie();
    showRandomMovie();
};

// After disliking a movie, clears the current movie from the screen and gets another random movie
const dislikeMovie = () => {
    clearCurrentMovie();
    showRandomMovie();
};*/

// Create HTML for movie poster
const createPoster = (posterPath) => {
    const posterUrl = `https://image.tmdb.org/t/p/original/${posterPath}`;
    const posterImg = document.createElement('img');
    posterImg.setAttribute('src', posterUrl);
    posterImg.setAttribute('id', 'poster');
    return posterImg;
};

// Create HTML for movie title
const createTitle = (title) => {
    const titleHeader = document.createElement('h2');
    titleHeader.setAttribute('id', 'title');
    titleHeader.innerHTML = title;

    return titleHeader;
};

// Create HTML for movie overview
const createOverview = (overview) => {
    const overviewParagraph = document.createElement('p');
    overviewParagraph.setAttribute('id', 'overviewText');
    overviewParagraph.innerHTML = overview;

    return overviewParagraph;
};


// Uses the DOM to create HTML to display the movie
const displayInfo = (titleInfo) => {
    const movieOrTv = getMovieOrTv();
    const posterDiv = document.getElementById('poster');

    const descriptionDiv = document.getElementById('description');
    const likeBtn = document.getElementById('likeBtn');
    const dislikeBtn = document.getElementById('dislikeBtn');


    // Create HTML content containing movie info
    const poster = createPoster(titleInfo.poster_path);
    console.log(poster);
    let titleHeader = '';
    if (movieOrTv === 'movie') {
        titleHeader = createTitle(titleInfo.title);
    } else {
        titleHeader = createTitle(titleInfo.name);
    };
    const overviewText = createOverview(titleInfo.overview);

    // Append title, poster, and overview to page
    posterDiv.appendChild(poster);
    descriptionDiv.appendChild(titleHeader);
    descriptionDiv.appendChild(overviewText);
/*
    showBtns();
    likeBtn.onclick = likeMovie;
    dislikeBtn.onclick = dislikeMovie;*/
};

// Returns a random movie from the first page of movies
const getRandomMovie = (movies) => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    const randomMovie = movies[randomIndex];
    return randomMovie;
};

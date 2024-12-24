const tmdbKey = "8f0404aa2c365770e187f395e5e614b3";
const tmdbBaseUrl = "https://api.themoviedb.org/3";
const searchBtn = document.getElementById("searchBtn");
const selectionForm = document.getElementById("selectionForm");

const apiKeyRequest = `?api_key=${tmdbKey}`;


document.addEventListener('DOMContentLoaded', () => {

    //get list of genres

    const getGenres = async () => {
        const movieOrTv = getMovieOrTv();
        const genreMovieEndpoint = "/genre/movie/list";
        const genreTvEndpoint = "/genre/tv/list";
        let urlToFetch = '';
        if (movieOrTv === 'movie') {
            urlToFetch = tmdbBaseUrl + genreMovieEndpoint + apiKeyRequest;
        } else {
            urlToFetch = tmdbBaseUrl + genreTvEndpoint + apiKeyRequest;
        }

        try {
            let response = await fetch(urlToFetch, { method: "GET" });
            if (response.ok) {
                let jsonResponse = await response.json();

                let genres = jsonResponse["genres"];

                return genres;
            }
        } catch (error) {
            console.log(error);
        }
    };
    // populate the genre dropdown based on selection of radio buttons
    const populateGenreDropdown = async () => {
        const select = document.getElementById('genres')
        const genres = await getGenres();

        select.innerHTML = '<option value="">Select a genre</option>';

        for (const genre of genres) {
            let option = document.createElement("option");
            option.value = genre.id;
            option.text = genre.name;
            select.appendChild(option);
        }
    };

    const handleRadioChange = () => {
        const genreSection = document.getElementById('genreForm');
        genreSection.classList.remove('hidden'); // Show the genre section 
        genreSection.classList.add('flex');
    };

    // update dropdown if radio button selection changes

    const radioButtons = document.querySelectorAll('input[name="choice"]');
    radioButtons.forEach(radio => {
        radio.addEventListener('change', () => {
            populateGenreDropdown();
            handleRadioChange();
        });

    });


    //get List of Tv or Movies By Genre

    const getList = async () => {
        const selectedGenre = getSelectedGenre();
        const discoverMovieEndpoint = "/discover/movie";
        const discoverTvEndpoint = "/discover/tv";
        const requestParams = `&language=en-US&with_genres=${selectedGenre}`;
        const movieOrTv = getMovieOrTv();
        let urlToFetch = '';
        if (movieOrTv === 'movie') {
            urlToFetch = tmdbBaseUrl + discoverMovieEndpoint + apiKeyRequest + requestParams;
        } else {
            urlToFetch = tmdbBaseUrl + discoverTvEndpoint + apiKeyRequest + requestParams;
        }
        console.log(urlToFetch);
        try {
            let response = await fetch(urlToFetch, { method: 'GET' });
            if (response.ok) {
                let jsonResponse = await response.json();

                let list = jsonResponse['results'];
                // console.log(list);
                return list;
            }
        } catch (error) {
            console.log(error);
        }
    };

    //get Details by Id of TV or Movie


    const getInfoById = async (title) => {
        const titleId = title.id;
        // console.log(titleId);
        const movieEndpoint = `/movie/${titleId}`;
        const tvEndpoint = `/tv/${titleId}`;
        const movieOrTv = getMovieOrTv();
        let urlToFetch = '';
        if (movieOrTv === 'movie') {
            urlToFetch = tmdbBaseUrl + movieEndpoint + apiKeyRequest;
        } else {
            urlToFetch = tmdbBaseUrl + tvEndpoint + apiKeyRequest;
        }
        try {
            let response = await fetch(urlToFetch, { method: 'GET' });
            if (response.ok) {
                let jsonResponse = await response.json();
                let infoById = jsonResponse;
                return infoById;
            }
        } catch (error) {
            console.log(error);
        }
    };


    // Gets a list of movies and ultimately displays the info of a random movie from the list
    const showRandomMovie = async () => {
        const titleInfo = document.getElementById("titleInfo");
        if (titleInfo.childNodes.length > 0) {
            clearCurrentMovie();
        }
        let list = await getList();
        console.log(list);
        let randomMovie = await getRandomMovie(list);
        console.log(randomMovie);
        let info = await getInfoById(randomMovie);
        //  console.log(info);
        displayInfo(info);
    };


    getGenres().then(populateGenreDropdown);

    //validate form has selections

    const validateForm = () => {
        let isValid = true;
        choiceError.textContent = '';
        genreError.textContent = '';
        const selectedRadio = document.querySelector('input[name="choice"]:checked');
        const genreSelect = document.getElementById('genres');
        if (!selectedRadio) {
            choiceError.textContent = 'Please select a Movie or TV Show.';
            isValid = false;
        } if (genreSelect.value === "") {
            genreError.textContent = 'Please select a genre.';
            isValid = false;
        } return isValid;
    };

    //handler for submit button - validates fields and triggers random movie

    const handleFormSubmission = (event) => {
        event.preventDefault(); // Prevent the default form submission 
        if (validateForm()) {
            const movieOrTv = getMovieOrTv();
            const genre = document.getElementById('genres').value;
            console.log('Selected Movie/TV:', movieOrTv);
            console.log('Selected Genre:', genre); // You can add further processing here, such as sending data to a server 
            showRandomMovie();
        }
    };

    // onclick

    selectionForm.addEventListener('submit', handleFormSubmission);

    //on enter

    selectionForm.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            handleFormSubmission(event);
        }
    });
});


const URL_FIRST_PART_LENGTH = 6;
const URLS_SEARCH_LENGHT = 8;
const YEAR_NUMBER_OF_DIGITS = 4;
const ACTIONS = {
    SORT_MOVIES_BY_DATE: 'SORT_MOVIES_BY_DATE',
    SORT_MOVIES_BY_RATING: 'SORT_MOVIES_BY_RATING',
    SET_DETAIL_PAGE: 'SET_DETAIL_PAGE',
    SET_MOVIE_ITEM_SECTION: 'SET_MOVIE_ITEM_SECTION',

};
const URLS = {
    GET_NOVIE: 'https://api.themoviedb.org/3/movie/',
    WITH_KEY: '?api_key=368dc4d247ee599c6bbb4611f3977a98',
    GET_IMAGE: 'https://image.tmdb.org/t/p/w1000',
    SEARCH_BY_DIRECTOR: 'https://api.themoviedb.org/3/search/person?api_key=368dc4d247ee599c6bbb4611f3977a98&language=en-US&page=1&include_adult=false&query=',
    WITH_CAST: 'https://api.themoviedb.org/3/discover/movie?with_cast=',
    WITH_CAST_KEY: '&api_key=368dc4d247ee599c6bbb4611f3977a98',
    SEARCH_BY_TITLE: 'https://api.themoviedb.org/3/search/movie?api_key=368dc4d247ee599c6bbb4611f3977a98&query=',
};

module.exports = {
    URL_FIRST_PART_LENGTH,
    URLS_SEARCH_LENGHT,
    YEAR_NUMBER_OF_DIGITS,
    ACTIONS,
    URLS,
};

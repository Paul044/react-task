const appReducer = (state, action) => {
    switch (action.type) {
    case 'SET_MOVIE_ITEM_SECTION':
        return Object.assign({}, state, { movies: action.movies });
    case 'SET_DETAIL_PAGE':
        return Object.assign({}, state, { film: action.movie });
    case 'SORT_MOVIES_BY_DATE':
        return Object.assign({}, state, { movies: state.movies.slice().sort((a, b) => a.release_date.slice(0, 4) - b.release_date.slice(0, 4)) });
    case 'SORT_MOVIES_BY_RATING':
        return Object.assign({}, state, { movies: state.movies.slice().sort((a, b) => b.vote_average - a.vote_average) });
    default:
        return {};
    }
};

export default appReducer;


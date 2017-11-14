import AppReducer from 'reducers/AppReducer';

const movieMock = {
    title: 'movieTitle',
    year: 2012,
};
const unorderedMoviesMock = {
    movies: [
        {
            title: 'a',
            release_date: '2014',
            vote_average: 6,
        },
        {
            title: 'b',
            release_date: '2010',
            vote_average: 8,
        },
    ],
};
const orderedMoviesMock = {
    movies: [
        {
            title: 'b',
            release_date: '2010',
            vote_average: 8,
        },
        {
            title: 'a',
            release_date: '2014',
            vote_average: 6,
        },
    ],
};


describe('AppReducer', () => {
    it('should return empty object as default state', () => {
        expect(AppReducer({}, {})).toEqual({});
    });

    it('should SET_DETAIL_PAGE with correct movie', () => {
        expect(AppReducer({}, { type: 'SET_DETAIL_PAGE', movie: movieMock })).toEqual(
            {
                film: movieMock,
            },
        );
    });
    it('should SORT_MOVIES_BY_DATE in correct order', () => {
        expect(AppReducer(unorderedMoviesMock, { type: 'SORT_MOVIES_BY_DATE' })).toEqual(
            orderedMoviesMock,
        );
    });
    it('should SORT_MOVIES_BY_RATING in correct order', () => {
        expect(AppReducer(unorderedMoviesMock, { type: 'SORT_MOVIES_BY_RATING' })).toEqual(
            orderedMoviesMock,
        );
    });
});

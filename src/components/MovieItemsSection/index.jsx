import React from 'react';
import MovieItem from 'components/MovieItem/index';
import AdditionalInfo from 'components/AdditionalInfo/index';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as s from './style.css';

class MovieItemsSection extends React.Component {
    componentDidMount() {
        if (this.props.location.pathname.slice(0, 8) === '/search/' ) {
            const query = this.props.location.pathname.slice(8);
            const searchParams = new URLSearchParams(location.search);
            const searchBy = searchParams.get('searchBy');
            console.log(searchBy);
            if (searchBy === 'director') {
                fetch(`https://api.themoviedb.org/3/search/person?api_key=368dc4d247ee599c6bbb4611f3977a98&language=en-US&page=1&include_adult=false&query=${query}`).then(
                    data => data.json(),
                ).then(
                    data => fetch(`https://api.themoviedb.org/3/discover/movie?with_cast=${data.results[0].id}&api_key=368dc4d247ee599c6bbb4611f3977a98`).then(
                        data => data.json(),
                    ).then(
                        data => this.props.setMoviesItemSection(data.results),
                    ));
            } else {
                fetch(`https://api.themoviedb.org/3/search/movie?api_key=368dc4d247ee599c6bbb4611f3977a98&query=${query}`).then(
                    data => data.json(),
                ).then(
                    data => this.props.setMoviesItemSection(data.results),
                );
            }
        }
    }
    componentWillReceiveProps({ location }) {
        if (location.pathname.slice(0, 8) === '/search/' && location.pathname !== this.props.location.pathname) {
            const query = location.pathname.slice(8);
            const searchParams = new URLSearchParams(location.search);
            const searchBy = searchParams.get('searchBy');
            if (searchBy === 'director') {
                fetch(`https://api.themoviedb.org/3/search/person?api_key=368dc4d247ee599c6bbb4611f3977a98&language=en-US&page=1&include_adult=false&query=${query}`).then(
                    data => data.json(),
                ).then(
                    data => fetch(`https://api.themoviedb.org/3/discover/movie?with_cast=${data.results[0].id}&api_key=368dc4d247ee599c6bbb4611f3977a98`).then(
                        data => data.json(),
                    ).then(
                        data => this.props.setMoviesItemSection(data.results),
                    ));
            } else {
                fetch(`https://api.themoviedb.org/3/search/movie?api_key=368dc4d247ee599c6bbb4611f3977a98&query=${query}`).then(
                    data => data.json(),
                ).then(
                    data => this.props.setMoviesItemSection(data.results),
                );
            }
        }
    }

    render() {
        return (
            <div className={s.movieItemsSection + ' ' + s.clearfix}>         
                <AdditionalInfo />
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={() => (
                            <div className={s.emptyState}> No items found </div>
                        )}
                    />
                    {["/search", "/film"].map(path =>
                        (<Route
                            path={path}
                            render={() => (
                                <div>
                                    {this.props.movies && this.props.movies.map(
                                        elem => (<MovieItem
                                            key={elem.id}
                                            movie={elem}
                                        />)) }
                                </div>
                            )}
                            key={path}
                        />),
                    )}
                </Switch>
            </div>
        );
    }
}


const mapStateToProps = (store) => {
    return {
        movies: store.movies || [],
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setMoviesItemSection: (movies) => {
            dispatch({
                type: 'SET_MOVIE_ITEM_SECTION',
                movies,
            });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieItemsSection);

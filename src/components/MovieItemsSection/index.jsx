import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    ACTIONS,
    URLS,
    URLS_SEARCH_LENGHT,
} from '../constants';

import MovieItem from '../MovieItem/index';
import AdditionalInfo from '../AdditionalInfo/index';

// import * as style from './style.css';
const style = {};

class MovieItemsSection extends React.Component {
    componentDidMount() {
        if (this.props.location.pathname.slice(0, URLS_SEARCH_LENGHT) === '/search/' ) {
            const query = this.props.location.pathname.slice(URLS_SEARCH_LENGHT);
            const searchParams = new URLSearchParams(location.search);
            const searchBy = searchParams.get('searchBy');
            console.log(searchBy);
            if (searchBy === 'director') {
                fetch(URLS.SEARCH_BY_DIRECTOR + query).then(
                    data => data.json(),
                ).then(
                    data => fetch(URLS.WITH_CAST + data.results[0].id + URLS.WITH_CAST_KEY).then(
                        data => data.json(),
                    ).then(
                        data => this.props.setMoviesItemSection(data.results),
                    ));
            } else {
                fetch(URLS.SEARCH_BY_TITLE + query).then(
                    data => data.json(),
                ).then(
                    data => this.props.setMoviesItemSection(data.results),
                );
            }
        }
    }
    componentWillReceiveProps({ location }) {
        if (location.pathname.slice(0, URLS_SEARCH_LENGHT) === '/search/' && location.pathname !== this.props.location.pathname) {
            const query = location.pathname.slice(URLS_SEARCH_LENGHT);
            const searchParams = new URLSearchParams(location.search);
            const searchBy = searchParams.get('searchBy');
            if (searchBy === 'director') {
                fetch(URLS.SEARCH_BY_DIRECTOR + query).then(
                    data => data.json(),
                ).then(
                    data => fetch(URLS.WITH_CAST + data.results[0].id + URLS.WITH_CAST_KEY).then(
                        data => data.json(),
                    ).then(
                        data => this.props.setMoviesItemSection(data.results),
                    ));
            } else {
                fetch(URLS.SEARCH_BY_TITLE + query).then(
                    data => data.json(),
                ).then(
                    data => this.props.setMoviesItemSection(data.results),
                );
            }
        }
    }

    render() {
        return (
            <div className={style.movieItemsSection + ' ' + style.clearfix}>
                <AdditionalInfo />
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={() => (
                            <div className={style.emptyState}> No items found </div>
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
                type: ACTIONS.SET_MOVIE_ITEM_SECTION,
                movies,
            });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieItemsSection);

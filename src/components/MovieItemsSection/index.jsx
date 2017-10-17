import React from 'react';
import MovieItem from 'components/MovieItem/index';
import movies from 'data.json';
import AdditionalInfo from 'components/AdditionalInfo/index';
import { Switch, Route } from 'react-router-dom';

import * as s from './style.css';

class MovieItemsSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies,
        };
    }

    _sortByDateClick() {
        this.setState({
            movies: this.state.movies.sort(
                (a, b) => parseInt(a.release_year, 10) - parseInt(b.release_year, 10)),
        });
    }

    _sortRatingClick() {
        this.setState({
            movies: this.state.movies.sort(
                (a, b) => parseInt(a.rating, 10) - parseInt(b.rating, 10)),
        });
    }

    render() {
        return (
            <div className={s.movieItemsSection + ' ' + s.clearfix}>
                <AdditionalInfo
                    items={movies}
                    sortByDateClick={this._sortByDateClick.bind(this)}
                    sortRatingClick={this._sortRatingClick.bind(this)}
                />
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
                                    {this.state.movies.map(
                                        elem => (<MovieItem
                                            key={elem.show_id}
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

export default MovieItemsSection;

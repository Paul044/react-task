import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { ACTIONS } from 'components/constants';

import * as style from './style.css';


class AdditionalInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'none',
        };
    }
    _sortByDateClick() {
        this.setState({
            selected: 'date',
        });
    }
    _sortRatingClick() {
        this.setState({
            selected: 'rating',
        });
    }

    render() {
        return (
            <Switch>
                <Route
                    path="/"
                    exact
                    render={() => (<div className={style.additionalInfo} />)}
                />
                <Route
                    path="/"
                    render={() => (
                        <div className={style.additionalInfo}>
                            <label>{this.props.movies && this.props.movies.length} movies found </label>
                            <div className={style.filters}>Sort by
                                <span
                                    className={this.state.selected === 'date' ? style.active : ''}
                                    onClick={() => { this.props.sortMoviesByDate(); this.setState({ selected: 'date' }); }}
                                >release date</span>
                                <span
                                    className={this.state.selected === 'rating' ? style.active : ''}
                                    onClick={() => { this.props.sortMoviesByRating(); this.setState({ selected: 'rating' }); }}
                                >raiting</span>
                            </div>
                        </div>
                    )}
                />
                
            </Switch>
        );
    }
}
/*
removing because of director property absence in API
                <Route
                    path="/film"
                    render={() => (
                        <div className={style.additionalInfo}>
                            films by {this.props.items[0].director}
                        </div>
                    )}
                />
*/
AdditionalInfo.propTypes = {
    sortByDateClick: PropTypes.func,
    sortRatingClick: PropTypes.func,
    items: PropTypes.arrayOf(PropTypes.object),
};

AdditionalInfo.defaultProps = {
    sortByDateClick: () => {},
    sortRatingClick: () => {},
    items: [],
};


const mapStateToProps = (state) => {
    return {
        movies: state.movies,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        sortMoviesByDate: () => {
            dispatch({
                type: ACTIONS.SORT_MOVIES_BY_DATE,
            });
        },
        sortMoviesByRating: () => {
            dispatch({
                type: ACTIONS.SORT_MOVIES_BY_RATING,
            });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalInfo);

import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import * as s from './style.css';

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
        this.props.sortByDateClick();
    }
    _sortRatingClick() {
        this.setState({
            selected: 'rating',
        });
        this.props.sortRatingClick();
    }

    render() {
        return (
            <Switch>
                <Route
                    path="/"
                    exact
                    render={() => (<div className={s.additionalInfo} />)} 
                />
                <Route
                    path="/search"
                    render={() => (
                        <div className={s.additionalInfo}>
                            <label>{this.props.items.length} movies found </label>
                            <div className={s.filters}>Sort by
                                <span
                                    className={this.state.selected === 'date' ? s.active : ''}
                                    onClick={this._sortByDateClick.bind(this)}
                                >release date</span>
                                <span
                                    className={this.state.selected === 'rating' ? s.active : ''}
                                    onClick={this._sortRatingClick.bind(this)}
                                >raiting</span>
                            </div>
                        </div>
                    )}
                />
                <Route
                    path="/film"
                    render={() => (
                        <div className={s.additionalInfo}>
                            films by {this.props.items[0].director}
                        </div>
                    )}
                />
            </Switch>
        );
    }
}

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
export default AdditionalInfo;

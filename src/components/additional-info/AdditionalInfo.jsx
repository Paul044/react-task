import React from 'react';
import PropTypes from 'prop-types';
import { AppStates } from 'components/app/app.constants';
import * as s from './AdditionalInfo.css';

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
        let component = {};
        switch (this.props.appState) {
        case (AppStates.EMPTY) :
            component = <div className={s.additionalInfo} />;
            break;
        case (AppStates.SEARCH) :
            component = (<div className={s.additionalInfo}>
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
            </div>);
            break;
        case (AppStates.DETAILED) :
            component = (<div className={s.additionalInfo}>
                films by {this.props.show.director}
            </div>);
            break;
        default:
        }
        return (
            component
        );
    }
}

AdditionalInfo.propTypes = {
    sortByDateClick: PropTypes.func,
    sortRatingClick: PropTypes.func,
    appState: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object),
    show: PropTypes.object,
};

AdditionalInfo.defaultProps = {
    sortByDateClick: () => {},
    sortRatingClick: () => {},
    appState: '',
    items: [],
    show: {},
};
export default AdditionalInfo;

import React from 'react';
import PropTypes from 'prop-types';
import DetailPage from 'components/detail-page/DetailPage';
import SearchForm from 'components/search-form/SearchForm';
import AdditionalInfo from 'components/additional-info/AdditionalInfo';
import { AppStates } from 'components/app/app.constants';
import { Route, Switch} from 'react-router-dom';

import * as s from './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className={s.header}>
                <div className={s.logo}>
                    <span>netflixrullete</span>
                    {this.props.appState === AppStates.DETAILED &&
                        <button
                            className={s.searchBtn}
                            onClick={this.props.goToSearchClick}
                        >SEARCH
                        </button>}
                </div>

                {this.props.children}
                <AdditionalInfo
                    appState={this.props.appState}
                    show={this.props.show}
                    items={this.props.items}
                    sortByDateClick={this.props.sortByDateClick}
                    sortRatingClick={this.props.sortRatingClick}
                />
            </div>
        );
    }
}

Header.propTypes = {
    sortByDateClick: PropTypes.func,
    sortRatingClick: PropTypes.func,
    appState: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object),
    show: PropTypes.object,
    goToSearchClick: PropTypes.func,
    searchBtnClick: PropTypes.func,
};

Header.defaultProps = {
    sortByDateClick: () => {},
    sortRatingClick: () => {},
    appState: '',
    items: [],
    show: undefined,
    goToSearchClick: () => {},
    searchBtnClick: () => {},
};

export default Header;

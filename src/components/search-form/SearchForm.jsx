import React from 'react';
import PropTypes from 'prop-types';
import * as s from './SearchForm.css';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'title',
        };
    }
    titleBtnClick() {
        this.setState({
            selected: 'title',
        });
    }
    directorBtnClick() {
        this.setState({
            selected: 'director',
        });
    }
    render() {
        return (
            <div className={s.searchForm}>
                <label>FIND YOUR MOVIE</label>
                <input type="text" />
                <div className={s.btnRow}>
                    <label>SEARCH BY</label>
                    <button
                        className={this.state.selected === 'title' ? s.active : ''}
                        onClick={this.titleBtnClick.bind(this)}
                    >TITLE</button>
                    <button
                        className={this.state.selected === 'director' ? s.active : ''}
                        onClick={this.directorBtnClick.bind(this)}
                    >DIRECTOR</button>
                    <button
                        className={s.searchBtn}
                        onClick={this.props.searchBtnClick.bind(this)}
                    >SEARCH</button>
                </div>
            </div>
        );
    }
}

SearchForm.propTypes = {
    searchBtnClick: PropTypes.func,
};

SearchForm.defaultProps = {
    searchBtnClick: () => {},
};
export default SearchForm;

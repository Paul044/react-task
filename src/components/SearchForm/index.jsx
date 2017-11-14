import React from 'react';
import { connect } from 'react-redux';
import {
    ACTIONS,
    URLS,
} from 'components/constants';
import * as style from './style.css';

function doSearch(setMoviesItemSection, location, selected) {
    if (location.pathname.slice(0, 8) === '/search/') {
        const query = location.pathname.slice(8);
        if (selected === 'director') {
            fetch(URLS.SEARCH_BY_DIRECTOR + query).then(
                data => data.json(),
            ).then(
                data => fetch(URLS.WITH_CAST + data.results[0].id + URLS.WITH_CAST_KEY).then(
                    data => data.json(),
                ).then(
                    data => setMoviesItemSection(data.results),
                ));
        } else {
            fetch(URLS.SEARCH_BY_TITLE + query).then(
                data => data.json(),
            ).then(
                data => setMoviesItemSection(data.results),
            );
        }
    }
}

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'title',
            inputValue: props.match.params.query
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

    handleSearch() {
        if (this.state.inputValue !== '') {
            this.props.history.push('/search/' + this.state.inputValue + '?searchBy=' + this.state.selected);
        }
        doSearch(this.props.setMoviesItemSection, this.props.location, this.state.selected);
    }

    updateInputValue(evt) {
        this.setState({
            inputValue: evt.target.value,
        });
    }

    render() {
        return (
            <div className={style.searchForm}>
                <label>FIND YOUR MOVIE</label>
                <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} />
                <div className={style.btnRow}>
                    <label>SEARCH BY</label>
                    <button
                        className={this.state.selected === 'title' ? style.active : ''}
                        onClick={this.titleBtnClick.bind(this)}
                    >TITLE</button>
                    <button
                        className={this.state.selected === 'director' ? style.active : ''}
                        onClick={this.directorBtnClick.bind(this)}
                    >PERSON</button>
                    <button
                        className={style.searchBtn}
                        onClick={this.handleSearch.bind(this)}
                    >SEARCH</button>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);

import React from 'react';
import { connect } from 'react-redux';
import * as s from './style.css';

function doSearch(setMoviesItemSection, location, selected) {
    if (location.pathname.slice(0, 8) === '/search/') {
        const query = location.pathname.slice(8);
        if (selected === 'director') {
            fetch(`https://api.themoviedb.org/3/search/person?api_key=368dc4d247ee599c6bbb4611f3977a98&language=en-US&page=1&include_adult=false&query=${query}`).then(
                data => data.json(),
            ).then(
                data => fetch(`https://api.themoviedb.org/3/discover/movie?with_cast=${data.results[0].id}&api_key=368dc4d247ee599c6bbb4611f3977a98`).then(
                    data => data.json(),
                ).then(
                    data => setMoviesItemSection(data.results),
                ));
        } else {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=368dc4d247ee599c6bbb4611f3977a98&query=${query}`).then(
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
            <div className={s.searchForm}>
                <label>FIND YOUR MOVIE</label>
                <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} />
                <div className={s.btnRow}>
                    <label>SEARCH BY</label>
                    <button
                        className={this.state.selected === 'title' ? s.active : ''}
                        onClick={this.titleBtnClick.bind(this)}
                    >TITLE</button>
                    <button
                        className={this.state.selected === 'director' ? s.active : ''}
                        onClick={this.directorBtnClick.bind(this)}
                    >PERSON</button>
                    <button
                        className={s.searchBtn}
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
                type: 'SET_MOVIE_ITEM_SECTION',
                movies,
            });
        },
        onClick2: (id) => {
            dispatch({
                type: 'INIT_EMPTY2',
                id,
            });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);

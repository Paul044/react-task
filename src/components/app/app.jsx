import React from 'react';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import DetailPage from 'components/detail-page/DetailPage';
import SearchForm from 'components/search-form/SearchForm';
import { Route, Switch } from 'react-router-dom';
import movies from 'data.json';
import MovieItemsSection from 'components/movie-items-section/MovieItemsSection';
import * as s from './app.css';
import { AppStates } from './app.constants';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            selectedShowId: null,
            appState: AppStates.EMPTY,
        };
    }

    _onImageClick(id) {
        this.setState({
            selectedShowId: id,
            appState: AppStates.DETAILED,
        });
    }

    _searchBtnClick() {
        this.setState({
            movies,
            appState: AppStates.SEARCH,
        });
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
    _goToSearchClick() {
        this.setState({
            movies: [],
            selectedShowId: null,
            appState: AppStates.EMPTY,
        });
    }

    render() {
        const selectedItem = this.state.movies &&
            (this.state.movies.filter(elem => elem.show_id === this.state.selectedShowId))[0];
        return (
            <div className={s.mainContainer + ' ' + s.clearfix}>

                <Header
                    show={selectedItem}
                    searchBtnClick={this._searchBtnClick.bind(this)}
                    appState={this.state.appState}
                    items={this.state.movies}
                    sortByDateClick={this._sortByDateClick.bind(this)}
                    sortRatingClick={this._sortRatingClick.bind(this)}
                    goToSearchClick={this._goToSearchClick.bind(this)}
                >
                    <Switch>
                        <Route path="/film/:id" component={DetailPage} />
                        <Route path="/search">
                            <SearchForm
                                searchBtnClick={this._searchBtnClick.bind(this)}
                            />
                        </Route>
                    </Switch>
                </Header>
                <MovieItemsSection
                    items={this.state.movies}
                    onImageClick={this._onImageClick.bind(this)}
                />
                <Footer />
            </div>
        );
    }
}

export default App;

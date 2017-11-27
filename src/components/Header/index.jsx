import React from 'react';
import DetailPage from '../DetailPage/index';
import SearchForm from '../SearchForm/index';
import { Route, Switch } from 'react-router-dom';

// import * as style from './style.css';
const style = {};

class Header extends React.Component {
    handleGoToSearch() {
        this.props.history.push('/');
    }

    render() {
        return (
            <div className={style.header}>
                <div className={style.logo}>
                    <span>netflixrullete</span>
                    <Route
                        path="/film"
                        render={() => (
                            <button
                                className={style.searchBtn}
                                onClick={this.handleGoToSearch.bind(this)}
                            >SEARCH
                            </button>
                        )}
                    />
                </div>

                <Route path="/film/:id" component={DetailPage} />
                <Switch>
                    <Route path="/" exact component={SearchForm} />
                    <Route path="/search/:query" component={SearchForm} />
                </Switch>
            </div>
        );
    }
}

export default Header;

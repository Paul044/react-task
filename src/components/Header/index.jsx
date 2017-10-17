import React from 'react';
import DetailPage from 'components/DetailPage/index';
import SearchForm from 'components/SearchForm/index';
import { Route, Switch } from 'react-router-dom';

import * as s from './style.css';

class Header extends React.Component {
    handleGoToSearch() {
        this.props.history.push('/');
    }

    render() {
        return (
            <div className={s.header}>
                <div className={s.logo}>
                    <span>netflixrullete</span>
                    <Route
                        path="/film"
                        render={() => (
                            <button
                                className={s.searchBtn}
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

import React from 'react';
import Header from 'components/Header/index';
import Footer from 'components/Footer/index';
import MovieItemsSection from 'components/MovieItemsSection/index';
import { Route } from 'react-router-dom';
import * as style from './style.css';

class App extends React.Component {
    render() {
        return (
            <div className={style.mainContainer + ' ' + style.clearfix}>
                <Route path="/" component={Header} />
                <Route path="/" component={MovieItemsSection} />
                <Route path="/" component={Footer} />
            </div>
        );
    }
}

export default App;

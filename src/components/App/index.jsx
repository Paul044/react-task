import React from 'react';
import Header from '../Header/index';
import Footer from '../Footer/index';
import MovieItemsSection from '../MovieItemsSection/index';
import { Route } from 'react-router-dom';
// import * as style from './style.css';
const style = {};

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

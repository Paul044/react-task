import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';


import App from './components/app/app';


const render = () => {
    ReactDom.render((
        <Router>
            <AppContainer>
                <App />
            </AppContainer>
        </Router>),
    document.getElementById('app'),
    );
};


render();

if (module.hot) {
    module.hot.accept('./components/app/app', render);
}

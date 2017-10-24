import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import appReducer from './reducers/AppReducer';
import App from './components/App/index';

const store = createStore(appReducer);

const render = () => {
    ReactDom.render((
        <Provider store={store}>
            <Router>
                <AppContainer>
                    <App />
                </AppContainer>
            </Router>
        </Provider>
    ),
    document.getElementById('app'),
    );
};


render();

if (module.hot) {
    module.hot.accept('./components/App/index', render);
}

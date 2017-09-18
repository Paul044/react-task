import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/app/app';


const render = () => {
    ReactDom.render(
        <AppContainer>
            <App />
        </AppContainer>,
        document.getElementById('app'),
    );
};


render();

if (module.hot) {
    module.hot.accept('./components/app/app', render);
}

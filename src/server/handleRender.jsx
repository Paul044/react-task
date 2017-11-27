import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducer from '../reducers/AppReducer';


import App from '../components/App/index';

function renderFullPage(html, preloadedState) {
    return `
        <!doctype html>
        <html>
          <head>
            <meta charset=utf-8>
            <title>React Netflix App</title>
          </head>
          <body>
            <div id="app">${html}</div>
            <script>
              window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
            </script>
            <script src="/js/bundle.js"></script>
          </body>
        </html>
    `;
}

function handleRender(req, res) {
    const context = {};
    const store = createStore(appReducer);
    const app = (
        <Provider store={store}>
            <StaticRouter location={req.url} context={context} >
                <App />
            </StaticRouter>
        </Provider>
    );

    const html = renderToString(app);

    if (context.url) {
        return res.redirect(context.url);
    }

    const preloadedState = store.getState();

    return res.send(renderFullPage(html, preloadedState));
}

export default handleRender;

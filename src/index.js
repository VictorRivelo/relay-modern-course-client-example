import React from 'react';
import ReactDOM from 'react-dom';
import routeConfig from './routes';
import { createBrowserRouter } from 'found';

const BrowserRouter = createBrowserRouter({ routeConfig });

ReactDOM.render(<BrowserRouter />, document.getElementById('root'));

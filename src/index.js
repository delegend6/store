import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {ProductProvider} from './Context';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
 
  <ProductProvider>
  <Router>
    <App />
    </Router>
    </ProductProvider>,
 
  document.getElementById('root')
);


serviceWorker.unregister();

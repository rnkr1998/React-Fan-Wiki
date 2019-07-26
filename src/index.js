import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Location from './components/Location';


import * as serviceWorker from './serviceWorker';
import  'react-bootstrap';





ReactDOM.render(<Location/>, document.getElementById('root'));


serviceWorker.unregister();

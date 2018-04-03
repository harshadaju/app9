import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImag from './HeaderBackground.jpg';

ReactDOM.render(<App img={backgroundImag} />, document.getElementById('root'));
registerServiceWorker();

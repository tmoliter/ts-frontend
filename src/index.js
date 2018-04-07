import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components';
import { Provider } from 'react-redux';
import { getStore } from './stores';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={getStore()}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

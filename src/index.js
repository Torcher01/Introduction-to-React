import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './components/App.jsx';
import { getImages, results } from './data.js';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App getImages={getImages} results={results}/>);
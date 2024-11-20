import React from "react";
import ReactDOM from "react-dom/client";
import '@fontsource/roboto-mono';
import axios from 'axios';

import App from './App';
import AppProvider from './AppProvider';

axios.defaults.baseURL =
    'https://us-central1-socialep-3bdd5.cloudfunctions.net/api/';

ReactDOM.render(
    <React.StrictMode>
        <AppProvider>
            <App />
        </AppProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

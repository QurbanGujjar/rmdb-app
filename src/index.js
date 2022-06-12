import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';

// initialState={initialState} reducer={reducer}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
<App />
</StateProvider>
  </React.StrictMode>
);



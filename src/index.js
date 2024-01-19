import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from  "./app/store";
import { Provider } from 'react-redux';
import { fetchUsers } from './features/users/userslice';

store.dispatch(fetchUsers());  // this is done to get the users loaded to the page as soon as the page has load. 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);



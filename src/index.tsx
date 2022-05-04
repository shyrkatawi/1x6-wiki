import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store';
import heroesActions from './redux/actions/heroes-actions';

fetch('http://localhost:3000/db.json')
  .then((response) => response.json())
  .then((json) => {
    store.dispatch(heroesActions.setHeroes(json.heroes));
  });

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>
);

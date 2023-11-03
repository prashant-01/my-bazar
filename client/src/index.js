import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store , persistor} from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Toaster } from 'react-hot-toast';
import { app } from './firebase.config';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store} app={ app }>
      <PersistGate loading={ "loading" } persistor={ persistor }>
        <App />
        <Toaster/>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);


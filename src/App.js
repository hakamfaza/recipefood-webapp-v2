import React from 'react';
import Router from './router/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate>
        <Router />
      </PersistGate>
    </Provider>
  );
}

export default App;

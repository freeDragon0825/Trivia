import React from 'react';
import { Provider } from 'react-redux';

import routes from 'routes'
import renderRoutes from 'routes/renderRoutes';
import store from 'store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      {renderRoutes(routes)}
    </Provider>
  );
}

export default App;

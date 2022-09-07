import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import CstmContainer from 'components/CstmContainer';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import store from 'store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <CstmContainer>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="quiz" element={<Quiz />} />
          </Route>
        </Routes>
      </CstmContainer>
    </Provider>
  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './pages/Home';
import Quiz from './pages/Quiz';
import store from 'store';
import './App.css';
import CustomContainer from 'components/CustomContainer';

function App() {
  return (
    <Provider store={store}>
      <CustomContainer>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="quiz" element={<Quiz />} />
          </Route>
        </Routes>
      </CustomContainer>
    </Provider>
  );
}

export default App;

import { combineReducers } from 'redux';

import api from './api';
import quiz from './quiz';

export default combineReducers({
  api,
  quiz,
});

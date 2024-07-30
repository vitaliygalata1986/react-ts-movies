import { combineReducers } from 'redux'; // объеденяет несколько редюсеров в один объект
import moviesReducer from './movies';

// создадим root редюсер, чтобы потом его использовать в файле store, чтобы создать store:
const rootReducer = combineReducers({
  movies: moviesReducer,
});

export default rootReducer;

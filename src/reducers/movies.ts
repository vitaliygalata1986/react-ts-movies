import { Action, Reducer } from 'redux';

/*
  Импортируем Action и Reducer из библиотеки redux:
  Action – интерфейс, который описывает действия (actions) в Redux. Действие – это объект с обязательным полем type и необязательными полями данных, которые описывают изменения состояния.
  Reducer – это функция, которая принимает текущее состояние (state) и действие (action) и возвращает новое состояние.
*/

export interface Movie {
  id: number;
  title: string;
  popularity: number;
  overview: string;
}

interface MoviesState {
  top: Movie[];
}

const initialState: MoviesState = {
  top: [
    {
      id: 1,
      title: 'Inception',
      popularity: 98,
      overview: 'Dreams...',
    },
    { id: 2, title: 'The Godfather', popularity: 97, overview: 'Godfather...' },
    {
      id: 3,
      title: 'The Dark Knight',
      popularity: 96.5,
      overview: 'Batman...',
    },
    {
      id: 4,
      title: 'The Godfather Part II',
      popularity: 96,
      overview: 'Part II...',
    },
    { id: 5, title: 'Angry Men', popularity: 94, overview: 'Men...' },
  ],
};

const moviesReducer: Reducer<MoviesState, Action> = (state, action) => {
  // тип Reducer, который встроен в Redux - он есть Genericom
  return initialState; // просто будет возвращать текущей стейт, на него не будут влиять action. Это даст нам возможность отобразить статично фильмы.
};

export default moviesReducer;

/*
moviesReducer – функция-редюсер, типизированная как Reducer<MoviesState, Action>.
MoviesState – тип состояния, с которым работает редюсер.
Action – тип действий, которые редюсер может обрабатывать.
Внутри редюсера:
state = initialState – задаем начальное состояние по умолчанию, если состояние не передано (в случае первого вызова редюсера).
return state – редюсер просто возвращает текущее состояние, игнорируя любые действия (actions). Это означает, что наше состояние не будет изменяться, и мы всегда будем получать начальное состояние.
Таким образом, данный редюсер предназначен для начального отображения списка фильмов без возможности изменения состояния через действия. Это может быть полезно для статического отображения данных.
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

import store from './store';
import { Provider } from 'react-redux';

import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  createMemoryRouter,
  RouterProvider,
} from 'react-router-dom';

import Movies from './features/Movies/Movies';
import About from './features/About/About';

const router = createBrowserRouter([
  // функция создает роутер, который базируется на базе History API Browser
  // сюда передаем массив маршрутов
  {
    path: '/', // путь по которому маршрут будет отрисовываться
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ), // какой элемент будет отрисовываться по этому маршруту
    children: [
      {
        path: '/movies',
        element: <Movies />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
  // {
  //   path: '/about',
  //   element: <About />,
  // },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

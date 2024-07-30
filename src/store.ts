import { createStore } from 'redux'; // функция устаревшая

import rootReducer from './reducers';

const store = createStore(rootReducer); // на вход нужно передать редюсеры - представляют собой функции, которые принимают текущее состояние и действие (action), и на основе этого вычисляют и возвращают новое состояние. Проще говоря, редюсер описывает, как состояние приложения должно измениться в ответ на определенное действие.

export type RootState = ReturnType<typeof store.getState>; // чтобы наш RootState представлял стейт нашего сайта

/*
store.getState - это метод Redux-хранилища, который возвращает текущее состояние приложения. В нашем случае, метод getState возвращает состояние, управляемое редьюсерами, переданными в createStore.

ReturnType<typeof store.getState> - это утилита TypeScript, которая получает тип возвращаемого значения функции. В данном случае, она вычисляет тип возвращаемого значения функции store.getState, то есть тип состояния приложения.

export type RootState = ReturnType<typeof store.getState>; - эта строка объявляет и экспортирует тип RootState, который будет соответствовать типу состояния, возвращаемого функцией store.getState.
*/

export default store;

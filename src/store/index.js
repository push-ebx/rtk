import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './todoSlice.js'

export default configureStore({
  reducer: {
    todos: todoReducer, // по 'todos' можно обратиться к todoReducer
    // user: userReducer
  }
}) // возвращает хранилище, которое состоит из набора reducer'ов
import {createSlice} from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: []
  },
  reducers: {
    addTodo(state, action) { // 'локальный' state
      console.log(state)
      console.log(action)

      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false
      })
    }, // state - текущее хранилище
    removeTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
    },
    toggleTodoComplete(state, action) {
      state.todos = state.todos.map(todo => {
        if (todo.id !== action.payload.id) return todo
        todo.completed = !todo.completed
        return todo
      })
    }
  }
}) // создали слайс

export const {addTodo, removeTodo, toggleTodoComplete} = todoSlice.actions; // экспортировали actions
export default todoSlice.reducer // общий reducer, подключается в store
import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        completedTodo: (state, action) => {
            const toggle = state.todos.find(p => p.id === action.payload)
            toggle.completed = ! toggle.completed
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload) 
        },
    },
})

export const { addTodo, completedTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/features/todos/todoSlice";

const TodoForm = () => {

    const dispatch = useDispatch()

    const [value, setValue] = useState('')

    const addNewTodos = () => {
        const newTodo = {
            id: Date.now(),
            value,
            completed: false,
        }
        
        dispatch(addTodo(newTodo))
        setValue('')
    }
    
    return (
        <div>
            <h1>Redux Toolkit Todo App</h1>
            <form className="item-submit" onSubmit={(e) => e.preventDefault()}>
                <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)} 
                    className="item-input" 
                    type="text" 
                    placeholder="Type something..." />
                <button className="button" onClick={addNewTodos}>
                    Submit
                </button>
            </form>
        </div>
    )
}
export default TodoForm;
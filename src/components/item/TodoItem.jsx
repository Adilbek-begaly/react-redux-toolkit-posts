import React from "react";
import { useDispatch } from "react-redux";
import { completedTodo, removeTodo } from "../../features/todos/todoSlice";

const TodoItem = ({todos}) => {

    const dispatch = useDispatch()

    const completedHandler = (id) => {
        dispatch(completedTodo(id))
    }
    
    const removeHandler = (id) => {
        dispatch(removeTodo(id))
    }

    return (
        <div>
            {todos.map(item => 
                <div key={item.id} className="submit">
                    <button className="button" onClick={() =>completedHandler(item.id)}>
                        Completed
                    </button> 
                    <div className={item.completed ? "item-value-true" : "item-value" }>
                        {item.value}
                    </div>
                    <button className="button" onClick={() => removeHandler(item.id)}>
                        Delete
                    </button>
                </div>
            )}
        </div>
    )
}
export default TodoItem;
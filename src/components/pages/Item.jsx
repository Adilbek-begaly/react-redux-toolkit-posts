import React from "react";
import { useSelector } from "react-redux";
import TodoForm from "../item/TodoForm";
import TodoItem from "../item/TodoItem";

const Item = () => {

    const todos = useSelector((state) => state.todo.todos)


    return (
        <div className="item">
            <TodoForm />
            <TodoItem todos={todos}/>
        </div>
    )
}
export default Item;
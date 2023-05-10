import { useEffect, useReducer, useState } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos') || []);
};

const getTodosCount = (todos) => {
    return todos.length;
}

const getPedingCount = (todos) => {
    return todos.filter((todo) => !todo.done).length;
}

export const useTodos = (initialState = []) => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    const [todosCount, setTodosCount] = useState(getTodosCount(initialState));

    const [pendingTodosCount, setPendingTodosCount] = useState(getPedingCount(initialState));

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
        setTodosCount(getTodosCount(todos));
        setPendingTodosCount(getPedingCount(todos));
    }, [todos])

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        };

        dispatch(action);

    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    };

    const handelToogleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    };


    return {
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        handelToogleTodo
    }
}

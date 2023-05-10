import { TodoAdd, TodoList } from "./components";
import { useTodos } from "../hooks";

const initialState = [];

export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handelToogleTodo, handleDeleteTodo, handleNewTodo } = useTodos(initialState);

    return (
        <>
            <h1> Todo App: {todosCount}  <small> pendientes: {pendingTodosCount} </small> </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    {todos.length !== 0 && <TodoList tasks={todos} onHandleDeleteTodo={handleDeleteTodo} onToogleTodo={handelToogleTodo} />}
                </div>

                <div className="col-5">
                    <h4> Agregar TODO </h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>

            </div>

        </>
    )
}

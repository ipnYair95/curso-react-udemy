import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodos } from "../../src/hooks/useTodos";

jest.mock('../../src/hooks/useTodos');

describe('Todo App', () => {

    useTodos.mockReturnValue({
        todos: [  { id: 1, description: 'Todo 1', done: false }, { id: 2, description: 'Todo 2', done: false } ],
        todosCount: 2,
        pendingTodosCount: 1,
        handelToogleTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
        handleNewTodo: jest.fn()
    });

    test('debe de mostrar el componente', () => {

        render(
            <TodoApp />
        );

        expect( screen.getByText('Todo 1') ).toBeTruthy();
        expect( screen.getByText('Todo 2') ).toBeTruthy();
        expect( screen.getByRole('textbox') ).toBeTruthy();

    });

});
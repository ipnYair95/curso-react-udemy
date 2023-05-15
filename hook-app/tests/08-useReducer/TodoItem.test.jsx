import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/components";

describe('TodoItem', () => {

    const todo = {
        id: 1,
        description: 'Todo',
        done: false
    };

    const onHandleDeleteTodoMock = jest.fn();
    const onToogleTodoMock = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('debe de mostrar el todo pendiente de completar', () => {

        render(
            <TodoItem
                task={todo}
                onToogleTodo={onToogleTodoMock}
                onHandleDeleteTodo={onHandleDeleteTodoMock}
            />
        );

        const liElement = screen.getByRole('listitem');
        expect(  liElement.className ).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('align-self-center');
        expect( spanElement.className ).not.toContain('text-decoration-line-through');

    });

    test('debe de mostrar el todo completado', () => {

        todo.done = true;

        render(
            <TodoItem
                task={todo}
                onToogleTodo={onToogleTodoMock}
                onHandleDeleteTodo={onHandleDeleteTodoMock}
            />
        );

        const spanElement = screen.getByLabelText('span');        
        expect( spanElement.className ).toContain('text-decoration-line-through');

    });

    test('span debe de llamar el toogle todo cuanod se hace click', () => {

        render(
            <TodoItem
                task={todo}
                onToogleTodo={onToogleTodoMock}
                onHandleDeleteTodo={onHandleDeleteTodoMock}
            />
        );

        const spanElement = screen.getByLabelText('span');    
        fireEvent.click( spanElement );

        expect( onToogleTodoMock ).toHaveBeenCalledWith( todo.id );
        
    });

    test('el boton debe de llamar el delete todo', () => {

        render(
            <TodoItem
                task={todo}
                onToogleTodo={onToogleTodoMock}
                onHandleDeleteTodo={onHandleDeleteTodoMock}
            />
        );

        const btnElement = screen.getByRole('button');    
        fireEvent.click( btnElement );

        expect( onHandleDeleteTodoMock ).toHaveBeenCalledWith( todo.id );
        
    });

});
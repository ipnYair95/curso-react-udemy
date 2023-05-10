import { TodoItem } from "./"


export const TodoList = ({ tasks = [], onHandleDeleteTodo, onToogleTodo }) => {
  return (
    <>

      <ul className="list-group" >
        {tasks.map(task => (
          <TodoItem key={task.id}
            task={task}
            onHandleDeleteTodo={onHandleDeleteTodo}
            onToogleTodo={onToogleTodo}
          />))}
      </ul>

    </>
  )
}

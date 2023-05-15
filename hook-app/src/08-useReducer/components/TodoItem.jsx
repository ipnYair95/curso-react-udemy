export const TodoItem = ({ task, onHandleDeleteTodo, onToogleTodo }) => {
  return (
    <>
      <li key={task.id} className="list-group-item d-flex justify-content-between" >
        <span
          className={`align-self-center ${(task.done) ? 'text-decoration-line-through' : ''}  `}
          onClick={() => onToogleTodo(task.id)}
          aria-label="span"
        >
          {task.description}
        </span>
        <button className=" btn btn-danger " onClick={() => onHandleDeleteTodo(task.id)} > Borrar </button>
      </li>
    </>
  )
}

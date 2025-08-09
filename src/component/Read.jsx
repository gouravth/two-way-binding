import { Fragment } from "react";

const Read = (props) => {
     const  todos = props.todos;
    const setTodos = props.setTodos;
    const rendertodos =todos.map(todo => {
    return <li key={todo.id}>{todo.title}</li>;
})
  return (
    <Fragment>
            <h1>Pending Todos </h1>
        <ol>{rendertodos}</ol>
</Fragment>
  )
}

export default Read
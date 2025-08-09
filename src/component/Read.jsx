import { Fragment } from "react";

const Read = (props) => {
     const  todos = props.todos;
    const setTodos = props.setTodos;
    const DeleteHandler = (id)=>{
     const filtertodos = todos.filter(todo => todo.id !== id);
     setTodos(filtertodos)
    }
    const rendertodos =todos.map(todo => 
      {
    return <li  key={todo.id} className="p-4flex justify-between items-center text-m">{todo.title} 
     <span onClick={()=>DeleteHandler(todo.id)}> Delete</span> </li>;
})
  return (
    <div className=" ml-5 border-2 border-solid h-1/2 text-center w-1/2 p-10">
<h1 className="text-2xl mb-5">Pending Todos </h1>
        <ol>{rendertodos}</ol>
</div>
  )
}

export default Read
import { Fragment } from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Read = (props) => {
     const  todos = props.todos;
    const setTodos = props.setTodos;

     const DeleteHandler = (id)=>{
     const filtertodos = todos.filter(todo => todo.id !== id);
     setTodos(filtertodos);
     toast.error("deleted successfully");
    }
    const rendertodos =todos.map(todo => 
      {
    return <li  key={todo.id} className="p-4 flex justify-between items-center text-m">{todo.title} 
    <span className="text-red-400" onClick={()=>DeleteHandler(todo.id)}>Delete</span> </li>;
})
return (
<div className=" ml-5 border-2 border-solid h-1/2 text-center w-1/2 p-10 ">
<h1 className="text-2xl mb-5"> Todos </h1>
<ol className="border-2 border-solid bg-black-300 px-5">{rendertodos}</ol>
</div>
  )
}

export default Read
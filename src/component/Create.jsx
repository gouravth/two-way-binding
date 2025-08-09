
import { Fragment, useState } from "react";
import { nanoid } from "nanoid";
  const Create = (props) => {
  const  todos = props.todos;
  const setTodos = props.setTodos;

  const [title, setTitle] = useState("");

  const SubmitHandler = (e) => { e.preventDefault();
    const newTodo = {
    id: nanoid(),
    title: title,
    iscompleted: false
    };
  
    let copytodio = [...todos];
    copytodio.push(newTodo);
    setTodos(copytodio);
    //settodos([...todos, newTodo]);
    setTitle(""); // Clear the input field after submission
  }

  return (
   <div className="border-2 border-solid h-1/2 border-white text-center w-1/2 p-10">
    <h1 className="text-2xl mb-5">Create Tasks </h1>
    <form onSubmit={SubmitHandler}>
      <input className="border-2 border-gray-300 p-2 rounded-md w-full"
    onChange={(e) => setTitle(e.target.value)}value={title}
    type="text" placeholder=" title "/>
    <br />
    <br />
 

    <button className="mt-1 text-m px-5 py-2 border rounded">Add Task</button>
    </form>
    </div>
  )
}

export default Create

  
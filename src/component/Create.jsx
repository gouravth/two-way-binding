
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
   <Fragment>
    <h1 style={{ color: "blue" }}>Create Tasks !!</h1>
      <form  onSubmit={SubmitHandler}><input 
     onChange={(e) => setTitle(e.target.value)}value={title}
    type="text" placeholder=" title "/>
    <br />
    <br />
    <button>Add Task</button>
    </form>
    </Fragment>
  )
}

export default Create

  
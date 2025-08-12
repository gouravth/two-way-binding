
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
  const Create = (props) => {
  const  todos = props.todos;
  const setTodos = props.setTodos;
  const {register, handleSubmit, reset, formState:{errors}} = useForm();



  const SubmitHandler = (data) => {
    data.id = nanoid();
    data.iscompleted = false;
  
    
   const copytodos = [...todos,];
    copytodos.push(data);
    setTodos(copytodos);
    toast.success("Task Added Successfully");
    reset();
    
  }
  // console.log(data);
  // console.log(todos);
  console.log(errors.message);
  

  return (
  
   <div className="border-2 border-solid h-1/2 border-white text-center w-1/2 p-10">

    <h1 className="text-2xl mb-5">Create Tasks </h1>

    <form onSubmit={handleSubmit(SubmitHandler)}>

    <input 
    {...register("title",{required:"This field is required"})}
    className="border-2 border-gray-300 p-2 rounded-md w-full"
     type="text"placeholder=" title"/>
    {errors && errors.title && errors.title.message && <small className="text-red-500 flex items-start pt-2 text-bold"> {errors.title.message} </small>}
    {/* {errors?.title?.message} */}
      
    <br />
    <br />
 

    <button className="mt-1 text-m px-5 py-2 border rounded">Add Task</button>
    </form>
    </div>
  )
}

export default Create

  
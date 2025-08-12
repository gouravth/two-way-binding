import { useState } from "react"
import { nanoid } from "nanoid";
import Create from "./component/Create.jsx";
import Read from "./component/Read.jsx";
import { ToastContainer } from "react-toastify";



const App = () => {

 const [todos, setTodos] = useState([
   { id: 1, title: "Learn React", iscompleted: false}
  ]);
  
  return (
<div className="w-screen h-screen bg-black text-white flex p-10">
      <Create todos={todos} setTodos={setTodos}/>
      <Read todos={todos} setTodos={setTodos}/>
    </div>
  
  )
}

export default App


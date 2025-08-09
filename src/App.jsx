import { useState } from "react"
import { nanoid } from "nanoid";
import Create from "./component/Create.jsx";
import Read from "./component/Read.jsx";

const App = () => {


 const [todos, setTodos] = useState([
   { id: 1, title: "Learn React", iscompleted: false}
  ]);
  
  return (
    <div>
      <Create todos={todos} setTodos={setTodos}/>
      <Read todos={todos} setTodos={setTodos}/>
    </div>
  
  )
}

export default App


import { useState ,useEffect} from "react"

import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList";

function App(){
  const[todolist,setTodoList]=useState([])
  const [task, setTask] = useState('');
  const  handleEdit=(index)=>{
    const valueTobeEdited = todolist[index]
    setTask(valueTobeEdited)
    handleDel(index)
   }
   const handleDel= (index)=>{
    const newTodoList= todolist.filter((item, idx) => idx !== index)
    setTodoList(newTodoList)
  }
  const handleChange= (event) => {
    setTask(event.target.value);
  };

  const handleAdd=()=>{
    const newtodoList= [...todolist,task]
    persistData(newtodoList)
    setTodoList(newtodoList)
    setTask('');
  }
  function persistData(newList)
  {
    localStorage.setItem('todos',JSON.stringify({todolist:newList}))
  }
  useEffect(()=>{
    if(!localStorage){
return
    }
    let localTodos=localStorage.getItem('todos')
    if(!localTodos)
    {
return
    }
    localTodos=JSON.parse(localTodos).todolist
    setTodoList(localTodos)
  },[])
    return (
        <main>
            
            <TodoInput 
            handleAdd={handleAdd}
           
            task={task}
            handleChange={handleChange}/>
             <TodoList
                todolist={todolist}
                setTodoList={setTodoList}
                handleEdit={handleEdit}
                handleDel={handleDel}
            />
            
            
        </main>
    )
}

export default App
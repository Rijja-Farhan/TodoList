import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
    const { todolist,setTodoList,handleEdit, handleDel}=props
    
  return (
    <div>
        <TodoCard todolist={todolist}
        setTodoList={setTodoList}
                handleEdit={handleEdit}
                handleDel={handleDel}/>
       
    </div>
  )

}

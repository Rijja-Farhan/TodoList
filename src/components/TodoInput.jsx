import React from "react";


export default function TodoInput(props) {
 const { handleAdd,task,handleChange}=props
  
  
  
  return (
    
    <div className="input-group">
     
      <input
        className="todoInput"
        aria-label="enter task"
        placeholder="enter task"
        onChange={handleChange}
        value={task}
      ></input>
      <div className="plusIcondiv">
        <button onClick={handleAdd}>
        <i className="fa-solid fa-plus plusIcon"></i>
        </button>
      </div>
      
    </div>
  );
}




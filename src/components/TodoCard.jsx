import React from "react";

export default function TodoCard(props) {
  const { todolist, handleEdit, handleDel } = props;

  return (
    <div>
      {todolist.map((todoitem, index) => (
        <div className="card" key={index}>
          <div className="todocard">
            {todoitem}
            <div className="buttons">
            <button type="button" class="btn btn-light" onClick={() => handleDel(index)}>
                <i style={{ padding:'10px' }} className="fa-solid fa-trash"></i>
              </button>
              <button type="button" class="btn btn-dark" onClick={() => handleEdit(index)}>
                <i style={{ padding:'10px' }}className="fa-regular fa-pen-to-square"></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

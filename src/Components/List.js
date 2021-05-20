import React, { useState } from "react"
import './List.css';

function List() {
    const [task, setTask] = useState("");
    const [tasklist, setTaskList] = useState([]);

    const handleChange = (e) => {
        setTask(e.target.value);
      };
    
      const AddTask = () => {
        if (task !== "") {
          const taskDetails = {
            id: Math.floor(Math.random() * 1000),
            value: task,
            isCompleted: false,
          };    
          setTaskList([...tasklist, taskDetails]);
          document.getElementById('todolist').value="";
        }
      };     

    return (
        <div>           
            <input type="text" name="todolist" id="todolist" onChange={(e) => handleChange(e)} placeholder="Add your tasks here"/>
            <button onClick={AddTask}>ADD</button><br/>  
            {tasklist !== [] ? (
                <ul>
                  {tasklist.map((t) => (                   
                    <li className={t.isCompleted ? "crossText" : "listitem"}> <input type="checkbox"/> {t.value} </li>
                  ))}
                </ul>
              ) : null}        
        </div>
    );
}

export default List

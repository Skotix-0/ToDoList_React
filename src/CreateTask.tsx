import {useState, useRef} from 'react'
import { v4 as uuidv4 } from 'uuid'; 

export default function CreateTask(props:any) {

    const [value_new_task, setNewTask] = useState("");
    const inputCreateTask :any = useRef("");

    return (
        <div id="Enter_Task">
            <input type="text" placeholder="Enter task" ref={inputCreateTask} onChange={(e)=>{setNewTask(e.target.value)}} />
            <button className="plus radius" onClick={()=>{
                let text = value_new_task.replace (/\s/g, '');
                if(text !== ""){
                    inputCreateTask.current.value = "";
                    props.add_task({id: uuidv4(),title: value_new_task});
                    setNewTask("");
                }
                inputCreateTask.current.value = "";
            }}></button>

            <select id="filter" onChange={(e)=>{
                props.filter(e.target.value);
            }}>
                <option value="def">All</option>
                <option value="fin">Finished</option>
                <option value="nfin">Not finished</option>
            </select>
        </div>    
    )
}

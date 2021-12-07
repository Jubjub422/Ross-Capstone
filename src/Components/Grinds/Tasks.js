import useSimpleAuth from "../Auth/useSimpleAuth"
import React, {useEffect, useState} from "react"
import TaskRepository from "../../Repositories/TaskRepository"
// import useModal from "../Modal/useModal"
// import { TaskDialogue } from "./TaskDialogue"
import GrindRepository from "../../Repositories/GrindRepository"








export const TaskGenerator = ({newTask, setNewTask, newGrindId, postNewTask}) => {
    const {getCurrentUser} = useSimpleAuth()
    const [tasks, setTasks] = useState([])
    
    
    
    

 useEffect(() => {
     TaskRepository.getAllTasks().then(setTasks)
 }, [])






 return (
    <>
        <h3>Tasks to be added to the grind:</h3>
            <li> 
        {
            newTask && "id"
            ?tasks.map(task => (
                <ul>{task.task} 
                </ul>
            ))
            :""
        }
        {
            <input type="text" className="newTaskInput" placeholder="New Task"
            onChange={(event)=> {
                const taskCopy = {...newTask}
                taskCopy.task = event.target.value
                setNewTask(taskCopy)
            }}
            >
            </input>
        }
        {
            <button
            onClick={() => {
                
                TaskRepository.addTask(newTask)
            }}
            
            >Submit Task</button>
        }
        
        </li>
        <button>Add another task?</button>
    </>
 )


}
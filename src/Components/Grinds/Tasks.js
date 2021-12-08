import React, { useEffect, useState } from "react"
import TaskRepository from "../../Repositories/TaskRepository"
import GrindRepository from "../../Repositories/GrindRepository"








export const TaskGenerator = () => {
    
    const [tasks, setTasks] = useState([])
    const [grinds, setGrinds] = useState([])
    const [currentGrind, setCurrentGrind] = useState({id: 0})
    const [inputValue, setInputValue] = useState("")
    const [newTask, setNewTask] = useState({
        task: "",
        grindId: 0,
        taskComplete: false
    }, [])

    useEffect(() => {
        GrindRepository.getAllGrinds()
        .then(setGrinds)
    }, [tasks])
    useEffect(() => {
        TaskRepository.getAllTasks()
        .then(setTasks)
    }, [])


   
    



    return (
        <>
            <h3>Which grind is this task for?</h3>
            {
                <select
                    defaultValue=""
                    required
                    name="game"
                    id="gameId"
                    className="form-control"
                    onChange={event => {
                        const taskCopy = { ...newTask }
                        taskCopy.grindId = parseInt(event.target.value)
                        setNewTask(taskCopy)
                        setCurrentGrind( {id: parseInt(event.target.value)})


                    }
                    }
                >
                    <option value="">Select a grind</option>
                    {grinds.map(grind => (
                        <option key={grind.id} id={grind.id} value={grind.id}>
                            {grind.grindGoal}
                        </option>
                    ))}
                </select>
            }




            <h3>Tasks to be added to the grind:</h3>
            <li>
                { 
                    newTask.grindId === currentGrind.id
                        ?tasks.map(task =>
                            task.grindId === currentGrind.id
                            ?<ul key={task.id}>{task.task}</ul>
                            :""
                            )
                        :""
                }
            </li>
            {
                <input type="text" value={inputValue} className="newTaskInput" placeholder="New Task"
                    onChange={(event) => {
                        const taskCopy = { ...newTask }
                        taskCopy.task = event.target.value
                        setNewTask(taskCopy)
                        setInputValue(event.target.value)
                    }}
                >
                </input>
            }
            {
                <button
                    onClick={() => {

                        TaskRepository.addTask(newTask)
                        .then(() => TaskRepository.getAllTasks())
                        .then(setTasks)
                        
                        setInputValue("")


                    }}

                >Add New Task</button>
            }


        </>
    )


}
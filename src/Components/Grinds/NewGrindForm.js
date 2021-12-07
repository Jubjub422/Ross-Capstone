import { useState, useEffect } from "react"
import GrindRepository from "../../Repositories/GrindRepository"
import TaskRepository from "../../Repositories/TaskRepository"
import GameRepository from "../../Repositories/GameRepository"
import useSimpleAuth from "../Auth/useSimpleAuth"
import { TaskGenerator } from "./Tasks"











export const NewGrindForm = () => {
    const [tasks, setTasks] = useState([])
    const [grinds, setGrinds] = useState([])
    const { getCurrentUser } = useSimpleAuth()
    const [games, setGames] = useState([])
    const [newGrind, setNewGrind] = useState({
        grindGoal: "",
        gameId: 0,
        userId: getCurrentUser().id,
        grindComplete: false,
        savedForCurrentUser: false
    })
    const findGrindId = () => {
        let newGrindId = grinds.length
        return newGrindId + 2
    }
    const [newTask, setNewTask] = useState({
        task: "",
        grindId: findGrindId(),
        taskComplete: false
    })
    
    useEffect(() => {
        GrindRepository.getAllGrinds().then(setGrinds)
        .then(() => GameRepository.getAllGames())
        .then(setGames)
    }, [])
    
    const postNewTask = (task) => {
        TaskRepository.addTask(task)
    }
    
    
    


//!Page re-renders every time a new task is added. Either need to figure out how to keep form populated with previous selections,
//! or need to route the form to a new tasks page when a game and goal are selected.




    return (
        <form className="animalForm">
            <h2>Plan That Grind</h2>
            <div className="form-group">
                <label htmlFor="animalName">Grind goal/name</label>
                <input
                    type="text"
                    required
                    autoFocus
                    className="form-control"
                    onChange={event => {
                        const copy = { ...newGrind }
                        copy.grindGoal = event.target.value
                        setNewGrind(copy)
                    }}
                    id="grindGoal"
                    placeholder="Grind goal/name"
                />
            </div>
            <div className="form-group">
                <label htmlFor="game">What game is this grind for?</label>
                <select
                    defaultValue=""
                    required
                    name="game"
                    id="gameId"
                    className="form-control"
                    onChange={event => {
                        const grindCopy = { ...newGrind }
                        grindCopy.gameId = parseInt(event.target.value)
                        setNewGrind(grindCopy)
                        const taskCopy = { ... newTask}
                        taskCopy.gameId = event.target.value
                        setNewTask(taskCopy)
                        event.preventDefault()
                    }
                    }
                >
                    <option value="">Select a game</option>
                    {games.map(game => (
                        <option key={game.id} id={game.id} value={game.id}>
                            {game.gameName}
                        </option>
                    ))}
                </select>
            </div>
                        <TaskGenerator 
                        newTask={newTask} 
                        setNewTask={setNewTask}
                        
                        postNewTask={postNewTask}
                        />
                        </form>

    )


}
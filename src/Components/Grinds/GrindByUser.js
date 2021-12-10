import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import GrindRepository from "../../Repositories/GrindRepository"
import TaskRepository from "../../Repositories/TaskRepository"
import useSimpleAuth from "../Auth/useSimpleAuth"






export const GrindByUser = () => {
    const [showTasks, setShowTasks] = useState(false)
    const [tasks, setTasks] = useState([])
    const history = useHistory()
    const { getCurrentUser } = useSimpleAuth()
    const [specificGrind, setSpecificGrind] = useState({})
    const [grinds, setGrinds] = useState([])
    
    useEffect(() => {
        GrindRepository.getAllGrinds().then(data => setGrinds(data))
    }, [])
    useEffect(() => {
        TaskRepository.getAllTasks()
            .then(setTasks)
    }, [])

    const toggleTaskDisplay = () => {
        if (showTasks) {
            setShowTasks(false)
        } else {
            setShowTasks(true)
        }
    }
    const foundTasks = tasks.filter(task => {
        return task.grindId === specificGrind.id
    })

    return (
        <>
            <h1>My Grinds</h1>

            {
                showTasks
                    ? grinds.map((grind) => {
                        if (specificGrind.id === grind.id) {
                            return <div key={`${grind.id}`}>Goal: {grind.grindGoal}, Game: {grind.game.gameName}, Creator: {grind.user.userName}
                                <div>
                                    <div>

                                        <li>
                                            {
                                                foundTasks?.map(task => {
                                                    return <ul key={task.id}>{task.task}</ul>
                                                })
                                            }
                                        </li>

                                    </div>

                                    <button id="button" className="grindExpand" value={grind.id} onClick={() => {
                                        setSpecificGrind({})

                                        toggleTaskDisplay()
                                    }}>Return to Grind List</button>
                                </div>
                                <div>
                                    <button id="button" className="grindDelete" onClick={() => {
                                        GrindRepository.delete(grind.id)
                                            .then(() => GrindRepository.getAllGrinds())
                                            .then(setGrinds)
                                    }}> Delete this grind?</button>
                                </div>
                            </div>
                        } else {
                            return ""
                        }
                    })


                    : grinds.map((grind) => {
                        if (getCurrentUser().id === grind.user.id) {
                            return <div key={`${grind.id}`}>Goal: {grind.grindGoal}, Game: {grind.game.gameName}, Creator: {grind.user.userName}
                                <div>

                                    <button id="button" className="grindExpand" value={grind.id} onClick={() => {
                                        setSpecificGrind(grind)

                                        toggleTaskDisplay()
                                    }}>See tasks for this grind?</button>
                                </div>





                                <div>
                                    <button id="button" className="grindDelete" onClick={() => {
                                        GrindRepository.delete(grind.id)
                                            .then(() => GrindRepository.getAllGrinds())
                                            .then(setGrinds)
                                    }}> Delete this grind?</button>
                                </div>
                            </div>
                        } else {
                            return ""
                        }
                    })
            }
            {
                <div className="centerChildren btn--newResource">
                <button type="button"
                    className="btn btn-success "
                    onClick={() => { history.push("/tasks") }}>
                    Want to add tasks to existing grinds?
                </button>
            </div>
            }

        </>
    )
}
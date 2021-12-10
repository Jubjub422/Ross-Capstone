import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import GrindRepository from "../../Repositories/GrindRepository"
import TaskRepository from "../../Repositories/TaskRepository"









export const GrindListComponent = () => {
    const [tasks, setTasks] = useState([])
    const [grinds, setGrinds] = useState([])
    const [showTasks, setShowTasks] = useState(false)
    const [specificGrind, setSpecificGrind] = useState({})
    const history = useHistory()
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
        {
            showTasks
            ?<h1>Specific Grind</h1>
            :<h1>Main Grind List</h1>
        }
        {
            showTasks
            ?grinds.map((grind) => {
                if (specificGrind.id === grind.id) {
                    return <div key={`${grind.id}`}>Goal: {grind.grindGoal}, Game: {grind.game.gameName}, Creator: {grind.user.userName}
                        <div>
                            <div>
            
                                <li>
                                    {
                                        foundTasks.map(task => {
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
                        
                    </div>
                } else {
                    return ""
                }
            })
            : grinds.map((grind) => 
            {
                return (<div key={`${grind.id}`}>Goal: {grind.grindGoal}, Game: {grind.game.gameName}, Creator: {grind.user.userName}
                <div><button id="button" className="grindExpand" value={grind.id} onClick={() => {
                                setSpecificGrind(grind)

                                toggleTaskDisplay()
                            }}>Expand Grind</button>
                            </div>
                </div>  )  
            })
        }
        {
           <section>
            <div className="centerChildren btn--newResource">
            <button type="button"
                className="btn btn-success "
                onClick={() => { history.push("/grinds/new") }}>
                Make a new grind
            </button>
        </div>
        
            <div className="centerChildren btn--newResource">
            <button type="button"
                className="btn btn-success "
                onClick={() => { history.push("/tasks") }}>
                Want to add tasks to existing grinds?
            </button>
        </div>
        </section>
        }

        </>
    )

}
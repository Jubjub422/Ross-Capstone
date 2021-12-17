import { useEffect, useState } from "react"
import {GrindRepository} from "../../Repositories/GrindRepository"
import {TaskRepository} from "../../Repositories/TaskRepository"
import "./Grind.css"









export const GrindListComponent = () => {
    const [tasks, setTasks] = useState([])
    const [grinds, setGrinds] = useState([])
    const [showTasks, setShowTasks] = useState(false)
    const [specificGrind, setSpecificGrind] = useState({})
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
            ?grinds.map((grind) => {
                if (specificGrind.id === grind.id) {
                    return ( <section key={grind.id} className="grindItem">
                        <h3>{grind.grindGoal}</h3>
                        <div>
                        <img style={{height: 100, width: 200}} src={grind.game.image} alt={grind.gameName}/> 
                        </div>
                    <div className="grind"> 
                     Game: {grind.game.gameName}, Creator: {grind.user.userName}
                        <div>
                            <div>
            
                                <ul key = {grind.grindGoal}>
                                    {
                                        foundTasks.map(task => {
                                            return <li key={task.id}>{task.task}</li>
                                        })
                                    }
                                </ul>
            
                            </div>
            
                            <button id="button" className="grindExpand" value={grind.id} onClick={() => {
                                setSpecificGrind({})
                                
                                toggleTaskDisplay()
                            }}>Return to Grind List</button>
                        </div>
                        
                    </div>
                            </section>
                    )} else {
                    return ""
                }
              })
            : 
            <>
            <h1> Check out these new Grinds</h1>
            {
            grinds.map((grind) => 
            {
                return (<section key={grind.id} className="grindItem">
                    <h3>{grind.grindGoal}</h3>

                <div><img style={{height: 100, width: 200}} src={grind.game.image} alt={grind.gameName}/></div>
                
                <div key={`${grind.id}`} className="grind">Game: {grind.game.gameName}, Creator: {grind.user.userName}
                <div><button id="button" className="grindExpand" value={grind.id} onClick={() => {
                                setSpecificGrind(grind)

                                toggleTaskDisplay()
                            }}>Expand Grind</button>
                            </div>
                </div>  
                </section>
                )  
            })
        }
            </>
       
        }
        </>
    )

}
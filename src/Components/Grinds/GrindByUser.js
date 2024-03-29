import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { GrindRepository } from "../../Repositories/GrindRepository"
import { TaskRepository } from "../../Repositories/TaskRepository"
import useSimpleAuth from "../Auth/useSimpleAuth"
import "./Grind.css"





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
            {
                showTasks
                    ? grinds.map((grind) => {
                        if (specificGrind.id === grind.id) {
                            return <section key={grind.id} className="grindItem specificGrind">
                                <h1>{grind.grindGoal}</h1>
                                <div>
                                    <img style={{ height: 100, width: 200 }} src={grind.game.image} alt={grind.gameName} />
                                </div>
                                <div key={`${grind.id}`}>Game: {grind.game.gameName}, Creator: {grind.user.userName}</div>
                                <div>
                                    <input type="checkbox" onChange={
                                        (evt) => {
                                            if (evt.target.checked) {
                                                specificGrind.grindComplete = true
                                            } else {
                                                specificGrind.grindComplete = false
                                            }

                                        }
                                    } />Mark Grind as completed?
                                </div>

                                <div>
                                    <div>

                                        <ul>
                                            {
                                                foundTasks?.map(task => {
                                                    return <li key={task.id}>{task.task}</li>
                                                })
                                            }
                                        </ul>

                                    </div>

                                    <div>
                                        {
                                            specificGrind.grindComplete
                                                ? ""
                                                : <button id="button" className="markGrindComplete" value={grind.id} onClick={() => {
                                                    GrindRepository.updateGrind(specificGrind)
                                                        .then(() =>
                                                            GrindRepository.getAllGrinds()
                                                        ).then(setGrinds)

                                                }}>Save Grind As Completed?</button>
                                        }



                                        <button id="button" className="grindExpand" value={grind.id} onClick={() => {
                                            setSpecificGrind({})

                                            toggleTaskDisplay()
                                        }}>Return to Grind List</button>

                                        <button id="button" className="grindDelete" onClick={() => {
                                            GrindRepository.delete(grind.id)
                                                .then(() => GrindRepository.getAllGrinds())
                                                .then(setGrinds)
                                        }}> Delete this grind?</button>
                                    </div>
                                </div>
                            </section>

                        } else {
                            return ""
                        }
                    })


                    : grinds.map((grind) => {
                        if (getCurrentUser().id === grind.user.id) {
                            if (grind.grindComplete === false) {

                                return <section key={grind.id} className="grindItem specificGrind">
                                    <h3>{grind.grindGoal}</h3>
                                    <div>
                                        <img style={{ height: 100, width: 200 }} src={grind.game.image} alt={grind.gameName} />
                                    </div>
                                    <div key={`${grind.id}`}> Game: {grind.game.gameName}, Creator: {grind.user.userName}
                                        <div>

                                            <button id="button" className="grindExpand" value={grind.id} onClick={() => {
                                                GrindRepository.getGrindById(grind.id).then(setSpecificGrind)

                                                toggleTaskDisplay()
                                            }}>See tasks for this grind?</button>
                                        </div>
                                    </div>

                                </section>
                            } else {
                                return ""
                            }
                        } else {
                            return ""
                        }
                    }
                    )
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
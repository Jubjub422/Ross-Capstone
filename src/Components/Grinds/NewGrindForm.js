import { useState, useEffect } from "react"
import {GrindRepository} from "../../Repositories/GrindRepository"
import {GameRepository} from "../../Repositories/GameRepository"
import useSimpleAuth from "../Auth/useSimpleAuth"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import "./Grind.css"












export const NewGrindForm = () => {

    
    const { getCurrentUser } = useSimpleAuth()
    const [games, setGames] = useState([])
    const history = useHistory()
    const [newGrind, setNewGrind] = useState({
        grindGoal: "",
        gameId: 0,
        userId: getCurrentUser().id,
        grindComplete: false,
        savedForCurrentUser: false
    })

    useEffect(() => {
         GameRepository.getAllGames()
            .then(setGames)
    }, [])




    return (
        <form className="newGrindForm">
            <h2>Plan That Grind</h2>
            <div className="form-group">
                <label htmlFor="grindGoal">Grind goal/name:</label>
                <input
                    type="text"
                    required
                    autoFocus
                    className="newGrindInput"
                    onChange={event => {
                        const copy = { ...newGrind }
                        copy.grindGoal = event.target.value
                        setNewGrind(copy)
                    }}
                    id="grindGoal"
                    placeholder="This will be the title of the grind."
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

            {
                window.location.pathname === "/grinds/new"
                    ?
                    <button type="button"
                        className="btn btn-success "
                        onClick={() => {
                            GrindRepository.createNewGrind(newGrind)
                                
                                .then(setNewGrind(
                                    {
                                        grindGoal: "",
                                        gameId: 0,
                                        userId: getCurrentUser().id,
                                        grindComplete: false,
                                        savedForCurrentUser: false
                                    }))
                                .then(history.push(`/grinds/userGrinds`))

                        }}>
                        Form new grind?
                    </button>
                    : ""

            }
        </form>

    )


}
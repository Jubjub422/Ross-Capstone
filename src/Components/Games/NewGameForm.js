import { useState } from "react"
import { useHistory } from "react-router-dom";
import { GameRepository } from "../../Repositories/GameRepository"








export const NewGameForm =() => {
    const history = useHistory()
    const [newGame, setNewGame] = useState({
        gameName:"",
        image:""
    })

    


    return (
        <>
        
        <h1>Register a new game</h1>
        <form className="newGameForm">
            <div className="form-group">
                <label htmlFor="gameName">Game Name</label>
                <input
                    type="text"
                    required
                    autoFocus
                    className="form-control"
                    onChange={event => {
                        const copy = { ...newGame }
                        copy.gameName = event.target.value
                        setNewGame(copy)
                    }}
                    id="gameName"
                    placeholder="Game Name"
                    />
                   
            </div>
            <div className="form-group">
                <label htmlFor="gameImage">Game Image</label>
                <input
                    type="url"
                    required
                    autoFocus
                    className="form-control"
                    onChange={event => {
                        const copy = { ...newGame }
                        copy.image = event.target.value
                        setNewGame(copy)
                    }}
                    id="gameName"
                    placeholder="Game Image Url"
                    />
                   
            </div>
            <button type="button"
                        className="btn btn-success "
                        onClick={() => {
                           GameRepository.createGame(newGame)
                           .then(setNewGame(
                               {
                                gameName:"",
                                image:""
                               }
                           ))
                           history.push("/grinds/userGrinds")

                        }}>
                        Register new game?
                    </button>



            </form>
            </>
    )

}
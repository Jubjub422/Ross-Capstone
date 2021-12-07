import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "../Games/GameList"
import { NewGameForm } from "../Games/NewGameForm"


export default () => {
    return (
        <>
            <Route exact path="/games">
                <GameList />
            </Route>
            
            <Route path="/games/new">
                <NewGameForm />
            </Route>
        </>
    )
}
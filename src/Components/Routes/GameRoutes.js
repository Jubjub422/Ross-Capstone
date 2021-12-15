import React from "react"
import { Route } from "react-router-dom"
import { NewGameForm } from "../Games/NewGameForm"






export const GameRoutes = () => {
    return (
        <>
            <Route exact path="/games/newgame">
                <NewGameForm />
            </Route>

        </>
    )

}
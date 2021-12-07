import React from "react"
import { Route } from "react-router-dom"


export default () => {
    return (
        <>
            <Route exact path="/grinds">
                <GrindList />
            </Route>

            <Route path="/grinds/new">
                <NewGrindForm />
            </Route>

            <Route path="/grinds/:grindId(/d+)">
                <GrindDetail />
            </Route>
            
            <Route path="/grinds/:userId(/d+)">
                <MyGrinds />
            </Route>
        </>
    )
}
import React from "react"
import { Route } from "react-router-dom"
import { GrindListComponent } from "../Grinds/GrindList"
import { NewGrindForm } from "../Grinds/NewGrindForm"
import { GrindsByCompleted } from "../Grinds/GrindsByComplete"
import { GrindByUser } from "../Grinds/GrindByUser"

export const GrindRoutes = () => {
    return (
        <>
            <Route exact path="/">
                <GrindListComponent />
            </Route>

            <Route exact path="/grinds/new">
                <NewGrindForm />
            </Route>
            <Route exact path="/grinds/complete">
                <GrindsByCompleted />
            </Route>
            
            <Route exact path="/grinds/userGrinds">
                <GrindByUser />
            </Route>
        </>
    )
}
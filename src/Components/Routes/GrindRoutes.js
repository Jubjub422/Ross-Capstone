import React from "react"
import { Route } from "react-router-dom"
import { GrindListComponent } from "../Grinds/GrindList"
import { NewGrindForm } from "../Grinds/NewGrindForm"

import { GrindByUser } from "../Grinds/GrindByUser"

export default () => {
    return (
        <>
            <Route exact path="/">
                <GrindListComponent />
            </Route>

            <Route exact path="/grinds/new">
                <NewGrindForm />
            </Route>
            
            
            <Route exact path="/grinds/userGrinds">
                <GrindByUser />
            </Route>
        </>
    )
}
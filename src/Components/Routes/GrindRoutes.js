import React from "react"
import { Route } from "react-router-dom"
import { GrindListComponent } from "../Grinds/GrindList"
import { NewGrindForm } from "../Grinds/NewGrindForm"


export default () => {
    return (
        <>
            <Route exact path="/grinds">
                <GrindListComponent />
            </Route>

            <Route path="/grinds/new">
                <NewGrindForm />
            </Route>

            {/* <Route path="/grinds/:grindId(/d+)">
                <GrindDetail />
            </Route>
            
            <Route path="/grinds/:userId(/d+)">
                <MyGrinds />
            </Route> */}
        </>
    )
}
import React from "react"
import { Route } from "react-router-dom"
import { GrindListComponent } from "../Grinds/GrindList"
import { NewGrindForm } from "../Grinds/NewGrindForm"
import { TaskGenerator } from "../Grinds/Tasks"


export default () => {
    return (
        <>
            <Route exact path="/grinds">
                <GrindListComponent />
            </Route>

            <Route exact path="/grinds/new">
                <NewGrindForm />
            </Route>
            <Route path="/tasks">
                <TaskGenerator />
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
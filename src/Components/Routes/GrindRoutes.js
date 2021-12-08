import React from "react"
import { Route } from "react-router-dom"
import { GrindListComponent } from "../Grinds/GrindList"
import { NewGrindForm } from "../Grinds/NewGrindForm"
import { TaskGenerator } from "../Grinds/Tasks"
import { GrindByUser } from "../Grinds/GrindByUser"
import { TasksByGrind } from "../Grinds/TasksByGrind"

export default () => {
    return (
        <>
            <Route exact path="/">
                <GrindListComponent />
            </Route>

            <Route exact path="/grinds/new">
                <NewGrindForm />
            </Route>
            <Route path="/tasks">
                <TaskGenerator />
            </Route>

            <Route path="/grinds/specificGrind">
                <TasksByGrind />
            </Route>
            
            <Route exact path="/grinds/userGrinds">
                <GrindByUser />
            </Route>
        </>
    )
}
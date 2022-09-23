import React from "react"
import { Route } from "react-router-dom"
import { TaskGenerator } from "../Grinds/Tasks"


export const TaskRoutes = () => {
    return (
        <>
            <Route path="/tasks">
                <TaskGenerator />
            </Route>
        </>
    )
}
import React from "react"
import {GrindRoutes} from "./Routes/GrindRoutes"
import {TaskRoutes} from "./Routes/TaskRoutes"
import {GameRoutes} from "./Routes/GameRoutes"



export const ApplicationViews = () => {
    return (
        <>
            <GameRoutes/>
            <GrindRoutes/>
            <TaskRoutes/>
            
        </>
    )
}

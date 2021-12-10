import React from "react"
import GameRoutes from "./Routes/GameRoutes"
import GrindRoutes from "./Routes/GrindRoutes"
import TaskRoutes from "./Routes/TaskRoutes"



export const ApplicationViews = () => {
    return (
        <>
            <GameRoutes/>
            <GrindRoutes/>
            <TaskRoutes/>
            
        </>
    )
}

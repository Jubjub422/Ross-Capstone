import React from "react"
import GameRoutes from "./Routes/GameRoutes"
import GrindRoutes from "./Routes/GrindRoutes"
import UserRoutes from "./Routes/UserRoutes"



export const ApplicationViews = () => {
    return (
        <>
            <GameRoutes/>
            <GrindRoutes/>
            <UserRoutes/>
        </>
    )
}

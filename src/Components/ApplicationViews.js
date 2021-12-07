import React from "react"
import GameRoutes from "./Routes/GameRoutes"
import GrindRoutes from "./Routes/GrindRoutes"
import UserRoutes from "./Routes/UserRoutes"



export default () => {
    return (
        <>
            <GameRoutes/>
            <GrindRoutes/>
            <UserRoutes/>
        </>
    )
}

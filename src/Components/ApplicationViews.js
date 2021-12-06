import React from "react"
import { Route } from "react-router-dom"
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

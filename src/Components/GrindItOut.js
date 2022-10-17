import React from "react"
import { Route, Redirect } from "react-router-dom"
import Login from "../Components/Auth/Login"
import { Register } from "./Auth/Register"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import useSimpleAuth from "./Auth/useSimpleAuth"
import { Footer } from "./nav/Footer"



export const GrindItOut = () => {
    const { isAuthenticated } = useSimpleAuth()

    return <>
        <Route render={() => {
            if (isAuthenticated()) {
                return <>
                    <NavBar />
                    <ApplicationViews />
                    <Footer />
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/register">
            <Register />
        </Route>

    </>
}
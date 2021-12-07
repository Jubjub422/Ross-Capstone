import React from "react"

import { Route } from 'react-router'
import { Redirect} from 'react-router-dom';
import Login from "./Auth/Login"
import {Register} from "./Auth/Register"
// import { NavBar } from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import useSimpleAuth from "./Auth/useSimpleAuth"
import "./GrindItOut.css"



export const GrindItOut = () => {
    const { isAuthenticated } = useSimpleAuth()

    return <>
        <Route render={() => {
            if (isAuthenticated()) {
                return <>
                    
                    <ApplicationViews />
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
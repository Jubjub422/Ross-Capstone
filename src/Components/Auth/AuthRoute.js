import React from "react"
import { Route, Redirect } from "react-router-dom"
import useSimpleAuth from "./useSimpleAuth"

//Not understanding what this component would be for. It is not currently used.
//Would it be to reauthenticate a user every time you navigate to a certain component?
const AuthRoute = ({ path, component: TargetComponent }) => {
    const { isAuthenticated } = useSimpleAuth()

    return (
        <Route exact path={path} render={props => {
            if (isAuthenticated()) {
                return <TargetComponent {...props} />
            } else {
                return <Redirect to="/login" />
            }
        }} />
    )
}

export default AuthRoute

import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import useSimpleAuth from "./useSimpleAuth";
import "./Login.css"

export const Register = () => {
    const [credentials, syncAuth] = useState({
        name: "",
        userName: "",
        email: "",
    })
    const { register } = useSimpleAuth()
    const history = useHistory()

    const handleRegister = (e) => {
        e.preventDefault()

        const newUser = {
            name: `${credentials.name}`,
            userName: `${credentials.userName}`,
            email: credentials.email,
        }

        register(newUser).then(() => {
            history.push("/")
        })
    }

    const handleUserInput = (event) => {
        const copy = {...credentials}
        copy[event.target.id] = event.target.value
        syncAuth(copy)
    }


    return (
        <main style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Please Register to make a Grind.</h1>
                <fieldset>
                    <label htmlFor="name"> Name </label>
                    <input type="text" onChange={handleUserInput}
                        id="name"
                        className="form-control"
                        placeholder="Name"
                        required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="userName"> UserName </label>
                    <input type="text" onChange={handleUserInput}
                        id="userName"
                        className="form-control"
                        placeholder="User name"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail"> Email address </label>
                    <input type="email" onChange={handleUserInput}
                        id="email"
                        className="form-control"
                        placeholder="Email address"
                        required />
                </fieldset>
                
                <fieldset>
                    <button type="submit">
                        Sign in
                    </button>
                </fieldset>
            </form>
        </main>
    )
}

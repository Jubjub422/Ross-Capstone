import React from "react"
import { Link } from "react-router-dom"
import useSimpleAuth from "../Auth/useSimpleAuth"
import "./NavBar.css"




export const NavBar = () => {
    const { logout } = useSimpleAuth()



    return (
        <div className="container">
            <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top onTop">

                <div id="navbarNavDropdown" className="navbar-collapse collapse">
                    <ul className="navbar">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Grind It Out</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/grinds/complete">My Completed Grinds</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/grinds/userGrinds">My Grinds</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/games/newgame">Add a new game</Link>
                        </li>



                        <li className="nav-item dropdown">

                            <Link onClick={() => {
                                logout()
                            }} className="nav-link" to="/login">Logout</Link>

                        </li>

                    </ul>

                </div>
            </nav>
        </div>
    )
}

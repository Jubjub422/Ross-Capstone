
import { Link } from "react-router-dom"
import "./Footer.css"



export const Footer = () => {




    return (<>


        <div className="container">
            <nav>

                <div className="footerDiv">
                    <ul className="footer">
                        <li className="footerButton newGrind">
                            <Link className="nav-link" to="/grinds/new">Make a New Grind?</Link>
                        </li>
                        <li className="footerButton addToGrind">
                            <Link className="nav-link" to="/tasks">Want to Add Tasks to a Grind?</Link>
                        </li>

                    </ul>

                </div>
            </nav>
        </div>
    </>
    )
}
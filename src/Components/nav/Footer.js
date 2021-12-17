import { useHistory } from "react-router-dom"
import "./Footer.css"



export const Footer =() => {
const history = useHistory()




    return ( <>
        <section className="footer">
         <div className="footerDiv">
         <button type="button"
             className="footerButton newGrind"
             onClick={() => { history.push("/grinds/new") }}>
             Make a new grind
         </button>
     
         <button type="button"
             className="footerButton addToGrind"
             onClick={() => { history.push("/tasks") }}>
             Want to add tasks to existing grinds?
         </button>
     </div>
     </section>
</>
     )
}
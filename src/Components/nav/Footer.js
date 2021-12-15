import "./Footer.css"





export const Footer =() => {





    return ( <>
        <section className="footer">
         <div>
         <button type="button"
             className="btn newGrind"
             onClick={() => { history.push("/grinds/new") }}>
             Make a new grind
         </button>
     
         <button type="button addToGrind"
             className="btn"
             onClick={() => { history.push("/tasks") }}>
             Want to add tasks to existing grinds?
         </button>
     </div>
     </section>
</>
     )
}
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import GrindRepository from "../../Repositories/GrindRepository"










export const GrindListComponent = () => {
    const [grinds, setGrinds] = useState([])
    const history = useHistory()
    useEffect(() => {
        GrindRepository.getAllGrinds().then(data => setGrinds(data))

    }, [])



    return (
        <>
        {
            grinds.map((grind) => 
            {
                return <div key={`${grind.id}`}>Goal: {grind.grindGoal}, Game: {grind.game.gameName}, Creator: {grind.user.userName}</div>    
            })
        }
        {
            <div className="centerChildren btn--newResource">
            <button type="button"
                className="btn btn-success "
                onClick={() => { history.push("/grinds/new") }}>
                Make a new grind
            </button>
        </div>
        }

        </>
    )

}
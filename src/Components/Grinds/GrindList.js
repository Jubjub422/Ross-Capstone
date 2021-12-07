import { useEffect, useState } from "react"
import GrindRepository from "../../Repositories/GrindRepository"










export const GrindListComponent = () => {
    const [grinds, setGrinds] = useState([])
    
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

        </>
    )

}
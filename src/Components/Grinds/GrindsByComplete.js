import { useEffect } from "react"
import { useState } from "react"
import { GrindRepository } from "../../Repositories/GrindRepository"
import useSimpleAuth from "../Auth/useSimpleAuth"










export const GrindsByCompleted = () => {
    const [grinds, setGrinds] = useState([])
    const { getCurrentUser } = useSimpleAuth()
    



    useEffect(() => {
        GrindRepository.getAllGrinds().then(data => setGrinds(data))
    }, [])
    

    



    return (
        <>
            <h1>Completed Grinds</h1>

            {
                grinds.map((grind) => {
                    if (grind.grindComplete && getCurrentUser().id === grind.user.id) {
                        return <section key= {grind.id}>
                        <h3>{grind.grindGoal}</h3>
                        <div>
                            <img style={{ height: 100, width: 200 }} src={grind.game.image} alt={grind.gameName} />
                        </div>
                        <div key={`${grind.id}`}>Game: {grind.game.gameName}, Creator: {grind.user.userName}
                           
                                </div>
                                <div>
                                        <button id="button" className="grindDelete" onClick={() => {
                                            GrindRepository.delete(grind.id)
                                                .then(() => GrindRepository.getAllGrinds())
                                                .then(setGrinds)
                                        }}> Delete this grind?</button>
                                    </div>

                               
                    </section>

                    } else {
                        return ""
                    }
                })
            }

        </>
    )

}
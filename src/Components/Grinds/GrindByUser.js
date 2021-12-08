import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import GrindRepository from "../../Repositories/GrindRepository"
import { getCurrentUser } from "../Auth/useSimpleAuth"







export const GrindListByUser = () => {

    const {getCurrentUser} = getCurrentUser()
    const [grinds, setGrinds] = useState([])
    const history = useHistory()
    useEffect(() => {
        GrindRepository.getAllGrinds().then(data => setGrinds(data))

    }, [])









}
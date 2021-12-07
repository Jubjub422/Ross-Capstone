import React, { useState, useEffect } from "react"
import GrindRepository from "../../Repositories/GrindRepository"
import useSimpleAuth from "../Auth/useSimpleAuth"
import UserRepository from "../../Repositories/UserRepository"





export const GrindListComponent = () => {
    const [grinds, setGrinds] = useState ([])
    const [users, setUsers] = useState([])
    const { getCurrentUser } = useSimpleAuth()



    useEffect(()=> {
        GrindRepository.getAllGrinds().then(setGrinds)
        UserRepository.getAllUsers().then(setUsers)
    }, [])





}
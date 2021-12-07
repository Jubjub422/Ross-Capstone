import { useState } from "react"

const useModal = (selector) => {
    //initialize state (boolean) and setter function
    const [modalIsOpen, setIsOpen] = useState(false)

    const toggleDialog = () => {
        //when toggleDialog is called, change boolean of modalIsOpen to opposite (if true, make false, and vice versa)
        setIsOpen(!modalIsOpen)

        //if modalIsOpen was true when function was called, remove the open attribute from the modal (thus closing it)
        if (modalIsOpen) {
            document.querySelector(`${selector}`).removeAttribute("open")
        //else, add the open attribute, thus showing/opening the modal
        } else {
            document.querySelector(`${selector}`).setAttribute("open", true)
        }
    }

    //return the setter function and the new state (still a boolean)
    return { toggleDialog, modalIsOpen }
}

export default useModal
